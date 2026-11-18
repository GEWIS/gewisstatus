document.addEventListener('DOMContentLoaded', function() {
    // Fetch and render the status markdown file
    fetchStatus();

    // Set up auto-refresh every 5 minutes
    setInterval(fetchStatus, 5 * 60 * 1000);
});

const ICONS = {
    operational: '<path d="M20 6 9 17l-5-5"/>',
    degraded: '<path d="M12 7v6"/><path d="M12 17h.01"/>',
    outage: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    maintenance: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    unknown: '<path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    upcoming: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    recent: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    issues: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    contact: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>'
};

const STATUS_LABELS = {
    operational: 'Operational',
    degraded: 'Degraded performance',
    outage: 'Service outage',
    maintenance: 'Maintenance',
    unknown: 'Status unknown'
};

function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
}

async function fetchStatus() {
    try {
        const response = await fetch('status.md');
        if (!response.ok) {
            throw new Error('Failed to fetch status');
        }

        const markdown = await response.text();
        renderStatus(markdown);
    } catch (error) {
        console.error('Error fetching status:', error);
        document.getElementById('status-content').innerHTML =
            '<div class="card error">' + icon('outage') + '<p>Error loading status. Please try again later.</p></div>';
    }
}

function renderStatus(markdown) {
    // Extract metadata from the first three lines
    const lines = markdown.split('\n');
    const metadataLines = lines.slice(0, 3);

    // Remove metadata lines from content
    const contentMarkdown = lines.slice(3).join('\n');
    const content = marked.parse(contentMarkdown);

    // Extract values from metadata
    let status = 'unknown';
    let title = 'Service Status';
    let updatedDate = new Date().toISOString();

    metadataLines.forEach(line => {
        if (line.startsWith('status:')) {
            status = line.replace('status:', '').trim().toLowerCase();
        }
        if (line.startsWith('title:')) {
            title = line.replace('title:', '').trim();
        }
        if (line.startsWith('date:')) {
            updatedDate = line.replace('date:', '').trim();
        }
    });
    if (!STATUS_LABELS[status]) {
        status = 'unknown';
    }

    // Update the banner
    document.getElementById('status-banner').dataset.status = status;
    document.getElementById('status-icon').innerHTML = icon(status);
    document.getElementById('status-label').textContent = STATUS_LABELS[status];
    document.getElementById('status-title').textContent = title;
    document.title = title + ' · GEWIS Service Status';

    const date = new Date(updatedDate);
    const time = document.getElementById('last-updated');
    time.dateTime = date.toISOString();
    time.textContent = formatRelative(date) + ' · ' + date.toLocaleString('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Europe/Amsterdam'
    });

    // Render the markdown as one card per "##" section
    document.getElementById('status-content').replaceChildren(buildSections(content));
}

// Groups rendered markdown into a card per h2, and an entry per h3 inside it.
function buildSections(html) {
    const template = document.createElement('template');
    template.innerHTML = html;

    const fragment = document.createDocumentFragment();
    let body = null;
    let entry = null;

    for (const node of Array.from(template.content.childNodes)) {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'H2') {
            const kind = sectionKind(node.textContent);
            const card = document.createElement('section');
            card.className = 'card';
            card.dataset.kind = kind;

            const header = document.createElement('header');
            header.className = 'card-header';
            header.innerHTML = '<span class="card-icon">' + icon(kind) + '</span>';
            header.appendChild(node);
            card.appendChild(header);

            body = document.createElement('div');
            body.className = 'card-body';
            card.appendChild(body);
            fragment.appendChild(card);
            entry = null;
            continue;
        }

        // Skip whitespace and comments between blocks
        if (node.nodeType !== Node.ELEMENT_NODE) {
            continue;
        }

        if (!body) {
            const card = document.createElement('section');
            card.className = 'card';
            body = document.createElement('div');
            body.className = 'card-body';
            card.appendChild(body);
            fragment.appendChild(card);
        }

        if (node.tagName === 'H3') {
            entry = document.createElement('article');
            entry.className = 'entry';
            body.appendChild(entry);
        }

        (entry || body).appendChild(node);
    }

    return fragment;
}

function sectionKind(heading) {
    const text = heading.toLowerCase();
    if (text.includes('upcoming') || text.includes('maintenance')) return 'upcoming';
    if (text.includes('issue') || text.includes('incident')) return 'issues';
    if (text.includes('recent') || text.includes('change')) return 'recent';
    if (text.includes('contact')) return 'contact';
    return 'info';
}

function formatRelative(date) {
    // Dates slightly in the future (clock skew, pre-dated entries) read as "just now"
    const seconds = Math.min(0, Math.round((date - Date.now()) / 1000));
    const units = [
        ['year', 365 * 24 * 3600],
        ['month', 30 * 24 * 3600],
        ['week', 7 * 24 * 3600],
        ['day', 24 * 3600],
        ['hour', 3600],
        ['minute', 60]
    ];
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    for (const [unit, size] of units) {
        if (Math.abs(seconds) >= size) {
            return rtf.format(Math.round(seconds / size), unit);
        }
    }
    return 'just now';
}
