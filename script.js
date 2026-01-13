document.addEventListener('DOMContentLoaded', function() {
    // Fetch and render the status markdown file
    fetchStatus();
    
    // Set up auto-refresh every 5 minutes
    setInterval(fetchStatus, 5 * 60 * 1000);
});

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
            '<p style="color: #C40000;">Error loading status. Please try again later.</p>';
    }
}

function renderStatus(markdown) {
    // Extract metadata from the first three lines
    const lines = markdown.split('\n');
    const metadataLines = lines.slice(0, 3);
    const metadataMarkdown = metadataLines.join('\n');
    
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
    
    // Update the UI
    document.getElementById('status-content').innerHTML = content;
    document.getElementById('status-title').textContent = title;
    
    // Update status indicator
    const indicator = document.querySelector('.status-indicator');
    indicator.className = 'status-indicator ' + getStatusClass(status);
    
    // Format and display the updated date
    const date = new Date(updatedDate);
    const formattedDate = date.toLocaleString('nl-NL');
    document.getElementById('last-updated').textContent = formattedDate;
}

function getStatusClass(status) {
    switch(status) {
        case 'operational':
            return 'operational';
        case 'degraded':
            return 'degraded';
        case 'outage':
            return 'outage';
        case 'maintenance':
            return 'maintenance';
        default:
            return '';
    }
}