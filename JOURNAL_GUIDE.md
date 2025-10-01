# 📝 Journal Management Guide

## Quick Ways to Add New Journal Entries

### Method 1: Direct JSON Editing (Easiest)

1. **Open the content file:**
   ```
   src/data/content.json
   ```

2. **Find the journals section** (around line 400)

3. **Add your new journal entry** at the beginning of the array:
   ```json
   "journals": [
     {
       "id": 6,
       "title": "Your Article Title",
       "excerpt": "Brief 1-2 sentence description",
       "content": "Full article content...",
       "publishedDate": "2024-12-20",
       "readTime": "5 min read",
       "tags": ["DevOps", "Cloud", "Security"],
       "featured": true,
       "image": "/journal-your-image.jpg"
     },
     // ... existing entries
   ]
   ```

4. **Add a placeholder image:**
   ```bash
   cp public/gpunuane-photo.jpg public/journal-your-image.jpg
   ```

### Method 2: Using the Helper Script

1. **Run the script:**
   ```bash
   node add-journal.js
   ```

2. **Edit the generated entry** in `src/data/content.json`

3. **Add your image** to the `public/` folder

### Method 3: Admin Interface

1. **Visit:** http://localhost:3000/admin
2. **Edit the JSON** directly in the web interface
3. **Save changes**

## Journal Entry Structure

```json
{
  "id": 6,                                    // Unique number (increment from last)
  "title": "Your Article Title",             // Main headline
  "excerpt": "Brief description...",         // Shown on cards (1-2 sentences)
  "content": "Full article content...",      // Full article text
  "publishedDate": "2024-12-20",           // YYYY-MM-DD format
  "readTime": "5 min read",                 // Estimated reading time
  "tags": ["DevOps", "Cloud"],             // Array of topic tags
  "featured": true,                         // Show prominently (boolean)
  "image": "/journal-article-6.jpg"        // Image path in public folder
}
```

## Image Requirements

- **Size:** 1200x630px (16:9 aspect ratio) recommended
- **Format:** JPG or PNG
- **Location:** `public/` folder
- **Naming:** `journal-[topic].jpg` (e.g., `journal-kubernetes.jpg`)

## Tags Categories

Use these common tags for consistency:
- **Technical:** `DevOps`, `Kubernetes`, `Docker`, `Terraform`, `CI/CD`
- **Cloud:** `AWS`, `Azure`, `GCP`, `Multi-Cloud`, `Cloud Architecture`
- **Security:** `Security`, `Zero-Trust`, `DevSecOps`, `Compliance`
- **Operations:** `SRE`, `Monitoring`, `Observability`, `Incident Management`
- **Process:** `GitOps`, `Automation`, `Best Practices`, `Leadership`

## Tips for Great Journal Entries

1. **Compelling Titles:** Use action words and specific benefits
2. **Clear Excerpts:** Explain the value readers will get
3. **Practical Content:** Include real examples and lessons learned
4. **Relevant Tags:** Use 3-4 tags that match your content
5. **Professional Images:** Use relevant technical diagrams or photos

## After Adding a Journal

1. **Test locally:** Visit http://localhost:3000/#journals
2. **Commit changes:** `git add . && git commit -m "Add new journal entry"`
3. **Deploy:** `npm run build && npx vercel --prod`

## Troubleshooting

- **JSON Errors:** Use a JSON validator or the admin interface
- **Images not showing:** Check file path and ensure image exists in `public/`
- **Build errors:** Clear cache with `rm -rf .next && npm run dev`
