# Service Status Page

A simple, modern status page that renders markdown content. Perfect for GitHub Pages hosting.

## Features

- **Markdown-based content**: Easy to edit and maintain
- **Modern UI**: Clean, responsive design with your brand color (#C40000)
- **Status indicators**: Visual status indicators (operational, degraded, outage, maintenance)
- **Auto-refresh**: Updates every 5 minutes
- **Light theme**: Readable and professional

## How to Use

### 1. Edit the Status

Edit the `status.md` file to update your service status. The file uses a simple metadata format:

```markdown
status: operational  # Can be: operational, degraded, outage, maintenance
title: All Systems Operational
date: 2024-01-13T12:00:00Z  # ISO format date

# Your status content here
# Use regular markdown formatting
```

### 2. Replace the Logo

Replace `logo.svg` with your actual logo. The current one is just a placeholder.

### 3. Customize Colors

Edit `styles.css` to change the color scheme. The main color is set as:

```css
--primary-color: #C40000;
```

### 4. Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select the branch to deploy from (usually `main` or `gh-pages`)
4. Your status page will be available at `https://username.github.io/repo-name/`

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for markdown rendering
- `status.md` - Status content (edit this file)
- `logo.svg` - Logo placeholder (replace this)

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

## License

This is a simple status page template. Feel free to use and modify it for your needs.