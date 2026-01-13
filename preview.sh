#!/bin/bash

echo "🌐 Starting preview server..."
echo "📁 Serving files from: $(pwd)"
echo "🔗 Open your browser to: http://localhost:8000"
echo "💡 Press Ctrl+C to stop the server"
echo ""

# Try Python first
if command -v python3 &> /dev/null; then
    echo "🐍 Using Python 3 HTTP server"
    python3 -m http.server 8000
    
# Fall back to Python 2
elif command -v python &> /dev/null; then
    echo "🐍 Using Python 2 HTTP server"
    python -m SimpleHTTPServer 8000
    
# Try PHP
elif command -v php &> /dev/null; then
    echo "🐘 Using PHP built-in server"
    php -S localhost:8000
    
# Try Node.js
elif command -v npx &> /dev/null; then
    echo "⚡ Using Node.js http-server"
    npx http-server -p 8000
    
else
    echo "❌ No suitable server found. Please install Python, PHP, or Node.js"
    echo ""
    echo "Alternative: You can double-click index.html to open it directly in your browser"
    echo "(Note: Some features like auto-refresh won't work with direct file opening)"
fi