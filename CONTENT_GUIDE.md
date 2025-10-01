# Content Management Guide

This guide will help you easily update your personal website content without any coding knowledge.

## 🚀 Quick Start

### Option 1: Admin Interface (Recommended)
1. Go to `http://localhost:3000/admin` (or your domain + `/admin`)
2. Edit the JSON content directly in the text area
3. Click "Save Changes" to update your website
4. Use "Preview Website" to see changes immediately

### Option 2: Direct File Editing
1. Open `src/data/content.json` in any text editor
2. Make your changes
3. Save the file
4. Refresh your website

## 📝 Content Structure

### Personal Information
```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "location": "City, Country",
    "bio": "Your professional bio (2-3 sentences)",
    "summary": "Brief summary of your expertise"
  }
}
```

### Social Links
```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "twitter": "https://twitter.com/yourusername",
    "website": "https://yourwebsite.com"
  }
}
```

### Work Experience
```json
{
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Your Job Title",
      "location": "City, Country",
      "startDate": "2023",
      "endDate": "Present",
      "description": "Brief description of your role and responsibilities",
      "achievements": [
        "Key achievement 1",
        "Key achievement 2",
        "Key achievement 3"
      ],
      "technologies": ["Technology 1", "Technology 2", "Technology 3"]
    }
  ]
}
```

### Skills
```json
{
  "skills": {
    "technical": [
      { "name": "JavaScript", "level": 90 },
      { "name": "React", "level": 85 },
      { "name": "Node.js", "level": 80 }
    ],
    "soft": [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Team Collaboration"
    ],
    "tools": [
      "Git",
      "VS Code",
      "Docker",
      "AWS"
    ]
  }
}
```

### Projects
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Brief project description",
      "longDescription": "Detailed project description",
      "technologies": ["React", "Node.js", "MongoDB"],
      "image": "/project-image.jpg",
      "liveUrl": "https://project-demo.com",
      "githubUrl": "https://github.com/username/project",
      "featured": true
    }
  ]
}
```

### Education
```json
{
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "year": "2020",
      "location": "City, Country"
    }
  ]
}
```

### Certifications
```json
{
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "2023",
      "credentialId": "ABC123"
    }
  ]
}
```

## 🎨 Customization Tips

### Adding New Projects
1. Add project images to the `public/` folder
2. Update the `projects` array in `content.json`
3. Set `"featured": true` for projects you want to showcase

### Updating Skills
- **Technical Skills**: Use level 0-100 to show proficiency
- **Soft Skills**: Add as many as needed
- **Tools**: List technologies and tools you use

### Modifying Experience
- Add new entries by incrementing the `id`
- Use "Present" for current positions
- Include specific achievements and technologies used

## 📸 Image Guidelines

### Profile Photo
- **Size**: 400x400px minimum
- **Format**: JPG or PNG
- **File**: Save as `gpunuane-photo.jpg` in `public/` folder

### Project Images
- **Size**: 1200x675px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **Naming**: Use descriptive names like `project-name.jpg`

## 🔧 Common Updates

### Changing Your Bio
1. Update the `bio` field in `personal` section
2. Keep it 2-3 sentences for best display
3. Focus on your professional value proposition

### Adding New Skills
1. Add to the appropriate category (technical, soft, tools)
2. For technical skills, include a proficiency level (0-100)
3. For soft skills and tools, just add the name

### Updating Contact Information
1. Modify `email`, `phone`, and `location` in `personal` section
2. Update social media links in `social` section
3. Changes appear immediately on the website

## ⚠️ Important Notes

### JSON Format
- Always use proper JSON syntax
- Use double quotes for strings
- Don't forget commas between items
- Validate your JSON before saving

### Backup
- Always download a backup before making major changes
- Use the "Download Backup" button in the admin interface
- Keep copies of your content.json file

### Testing
- Use the "Preview Website" button to test changes
- Check all sections after updates
- Verify links and contact information

## 🚨 Troubleshooting

### Common Errors
1. **Invalid JSON**: Check for missing commas or quotes
2. **Missing Fields**: Ensure all required fields are present
3. **Image Not Loading**: Check file path and format

### Getting Help
1. Check the browser console for error messages
2. Validate your JSON using online tools
3. Compare with the original content.json structure

## 📱 Mobile Optimization

Your website is automatically responsive, but consider:
- Keep descriptions concise for mobile viewing
- Use shorter project titles on mobile
- Ensure contact information is easily accessible

## 🎯 Best Practices

### Content Writing
- Use action verbs in achievements
- Quantify results when possible
- Keep descriptions concise but informative
- Use professional language

### SEO Optimization
- Include relevant keywords naturally
- Write descriptive project descriptions
- Use clear, professional titles

### Regular Updates
- Update experience and projects regularly
- Add new skills as you learn them
- Keep contact information current
- Refresh project descriptions periodically

---

**Need help?** Check the main README.md file for technical details or open an issue in the repository.
