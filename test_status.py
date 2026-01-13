#!/usr/bin/env python3

"""
Simple test script to verify the status page setup
"""

import os
import re

def test_files_exist():
    """Test that all required files exist"""
    required_files = [
        'index.html',
        'styles.css', 
        'script.js',
        'status.md',
        'logo.svg'
    ]
    
    missing_files = []
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ Missing files: {', '.join(missing_files)}")
        return False
    else:
        print("✅ All required files exist")
        return True

def test_markdown_format():
    """Test that status.md has correct metadata format"""
    try:
        with open('status.md', 'r') as f:
            content = f.read()
            
        # Check for required metadata
        has_status = bool(re.search(r'^status:\s*(operational|degraded|outage|maintenance)', content, re.MULTILINE))
        has_title = bool(re.search(r'^title:', content, re.MULTILINE))
        has_date = bool(re.search(r'^date:', content, re.MULTILINE))
        
        if not has_status:
            print("❌ status.md missing 'status:' metadata")
            return False
        if not has_title:
            print("❌ status.md missing 'title:' metadata")
            return False
        if not has_date:
            print("❌ status.md missing 'date:' metadata")
            return False
            
        print("✅ status.md has correct metadata format")
        return True
        
    except FileNotFoundError:
        print("❌ status.md file not found")
        return False

def test_html_structure():
    """Test that index.html has required elements"""
    try:
        with open('index.html', 'r') as f:
            content = f.read()
        
        required_elements = [
            '<div id="status-content"',
            '<div class="status-indicator"',
            '<span id="last-updated"',
            '<script src="script.js"',
            '<link rel="stylesheet" href="styles.css"'
        ]
        
        missing_elements = []
        for element in required_elements:
            if element not in content:
                missing_elements.append(element)
        
        if missing_elements:
            print(f"❌ Missing HTML elements: {', '.join(missing_elements)}")
            return False
        else:
            print("✅ index.html has correct structure")
            return True
            
    except FileNotFoundError:
        print("❌ index.html file not found")
        return False

def main():
    print("🔍 Testing Service Status Page Setup...")
    print()
    
    tests = [
        test_files_exist,
        test_markdown_format,
        test_html_structure
    ]
    
    passed = 0
    total = len(tests)
    
    for test in tests:
        if test():
            passed += 1
    
    print()
    print(f"📊 Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Your status page is ready.")
        print()
        print("🚀 To use:")
        print("1. Edit status.md to update your status")
        print("2. Replace logo.svg with your actual logo")
        print("3. Deploy to GitHub Pages")
        print("4. Access at https://username.github.io/repo-name/")
    else:
        print("❌ Some tests failed. Please check the issues above.")

if __name__ == "__main__":
    main()