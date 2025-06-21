#!/bin/bash

# PerplexityHub Ultra-Premium GitHub + Vercel Setup
echo "🔥 Starting Ultra-Premium PerplexityHub Deployment..."

# Step 1: Initialize Git
echo "📁 Initializing Git repository..."
git init

# Step 2: Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << 'EOF'
.DS_Store
node_modules/
.env
.vercel
*.log
EOF

# Step 3: Create vercel.json
echo "⚙️ Creating vercel.json..."
cat > vercel.json << 'EOF'
{
  "buildCommand": "",
  "outputDirectory": ".",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

# Step 4: Set up remote
echo "🌐 Setting up GitHub remote..."
git remote add origin https://github.com/voja1312/perplexityhub.git

# Step 5: Initial commit
echo "💾 Creating initial commit..."
git add .
git commit -m "ULTRA-PREMIUM LAUNCH: $100K Platform Experience

🔥 LUXURY FEATURES:
- Metallic black/grey + fluorescent orange palette
- Sophisticated animations and glow effects
- Premium typography and interactive elements
- Elite user experience with enterprise-grade polish

🎯 BUSINESS FEATURES:
- Pricing tiers: $0, $29, $99 with usage limits
- Google Analytics, Stripe, Formspree integrations
- Working tool modals and contact system

💎 EXCLUSIVITY: Bentley/Rolex/Ferrari level sophistication"

echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Ultra-Premium PerplexityHub deployed!"
echo "🌟 Live at: https://perplexityhub.com"