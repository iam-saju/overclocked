#!/bin/bash

# OverClocked CTF - Netlify Deployment Script
echo "🚀 Starting Netlify deployment for OverClocked CTF..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. No dist folder found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output is in the 'dist' folder"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Go to https://app.netlify.com"
echo "2. Click 'New site from Git'"
echo "3. Connect your GitHub repository"
echo "4. Set build command: npm run build"
echo "5. Set publish directory: dist"
echo "6. Click 'Deploy site'"
echo ""
echo "🎉 Your OverClocked CTF website will be live on Netlify!"


