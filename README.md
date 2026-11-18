# Service Status Page

A simple, modern status page that renders markdown content. Perfect for GitHub Pages hosting.

## Features

- **Markdown-based content**: Easy to edit and maintain
- **Modern UI**: Clean, responsive design with the GEWIS brand color (#D40000)
- **Status banner**: Color-coded banner per status (operational, degraded, outage, maintenance)
- **Section cards**: Each `##` heading becomes a card, each `###` an entry within it; headings containing "upcoming", "issue", "recent"/"change" or "contact" get a matching icon and accent color
- **Auto-refresh**: Updates every 5 minutes

## How to Use


Edit the `status.md` file to update your service status. The file uses a simple metadata format:

```markdown
status: operational  # Can be: operational, degraded, outage, maintenance
title: All Systems Operational
date: 2024-01-13T12:00:00Z  # ISO format date

# Your status content here
# Use regular markdown formatting
```

### 📋 Markdown Features Supported

✅ **Headers**: `#`, `##`, `###`, `####`

✅ **Lists**: Bulleted and numbered

✅ **Tables**: Full table support

✅ **Code**: Inline `` `code` `` and code blocks

✅ **Links**: `[text](url)`

✅ **Images**: `![alt](url)`

✅ **Blockquotes**: `> quoted text`

✅ **Bold/Italic**: `**bold**`, `*italic*`

✅ **Horizontal Rules**: `---`


## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for markdown rendering
- `status.md` - Status content (edit this file)

## Status Types

The system supports these status types:

- `operational` - Green indicator (all systems working)
- `degraded` - Yellow indicator (some issues)
- `outage` - Red indicator (major problems)
- `maintenance` - Blue indicator (planned work)

## Markdown Support

The page supports full markdown formatting:

- Headers (`#`, `##`, `###`)
- Lists (bulleted and numbered)
- Tables
- Code blocks
- Links and images
- Blockquotes

## Browser Compatibility

Works in all modern browsers. Uses:
- Fetch API (for loading markdown)
- Marked.js (for markdown parsing)
- CSS Grid/Flexbox (for layout)