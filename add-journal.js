#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Helper script to add new journal entries
function addJournal() {
  const contentPath = path.join(__dirname, 'src/data/content.json');
  
  // Read current content
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  
  // Get the next ID
  const nextId = Math.max(...content.journals.map(j => j.id)) + 1;
  
  // Template for new journal entry
  const newJournal = {
    id: nextId,
    title: "New Article Title - Edit This",
    excerpt: "Brief description of your article - Edit This",
    content: "Full article content goes here - Edit This",
    publishedDate: new Date().toISOString().split('T')[0], // Today's date
    readTime: "5 min read",
    tags: ["DevOps", "Cloud", "Infrastructure"],
    featured: false,
    image: `/journal-article-${nextId}.jpg`
  };
  
  // Add to beginning of journals array (most recent first)
  content.journals.unshift(newJournal);
  
  // Write back to file
  fs.writeFileSync(contentPath, JSON.stringify(content, null, 2));
  
  console.log(`✅ New journal entry added with ID: ${nextId}`);
  console.log(`📝 Edit the content in: ${contentPath}`);
  console.log(`🖼️  Add image: public/journal-article-${nextId}.jpg`);
  console.log(`🌐 View at: http://localhost:3000/#journals`);
}

// Run the script
addJournal();
