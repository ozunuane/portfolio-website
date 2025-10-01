# Personal Website - Unuane Godspower Ozimede

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Content Management**: Update content through JSON files
- **SEO Optimized**: Built-in SEO best practices
- **Fast Performance**: Optimized for speed and Core Web Vitals
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Display your projects and achievements

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Portfolio.tsx   # Project showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with social links
├── data/               # Content management
│   └── content.json    # All website content
├── lib/                # Utilities
│   ├── content.ts      # Content management functions
│   └── utils.ts        # Utility functions
└── public/             # Static assets
    ├── gpunuane-photo.jpg
    └── UNUANE GODSPOWER OZIMEDE_CV_25 (1).pdf
```

## 🛠️ Easy Content Updates

### Updating Personal Information

Edit `src/data/content.json` to update:

- **Personal Info**: Name, title, bio, contact details
- **Experience**: Add/remove work experience entries
- **Skills**: Update technical skills, soft skills, and tools
- **Projects**: Add new projects to your portfolio
- **Social Links**: Update GitHub, LinkedIn, and other social profiles

### Example Content Update

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "bio": "Your professional bio...",
    "email": "your.email@example.com"
  },
  "experience": [
    {
      "id": 1,
      "company": "Your Company",
      "position": "Your Position",
      "startDate": "2023",
      "endDate": "Present",
      "description": "Job description...",
      "achievements": ["Achievement 1", "Achievement 2"],
      "technologies": ["React", "Node.js", "TypeScript"]
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

### Styling

The website uses Tailwind CSS. Customize styles by:

- Modifying Tailwind classes in components
- Adding custom CSS in `src/app/globals.css`
- Updating the color scheme in `tailwind.config.js`

### Adding Projects

1. Add project images to `public/` folder
2. Update `src/data/content.json` with project details
3. Projects will automatically appear in the Portfolio section

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray tones
- **Accent**: Green, Purple for skill categories

### Typography
- **Headings**: Inter font, bold weights
- **Body**: Inter font, regular weight
- **Code**: Monospace fonts

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Responsive padding and margins

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The website can be deployed to any platform that supports Node.js or static hosting.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js

## 🔧 Maintenance

### Regular Updates

1. **Content**: Update `content.json` with new information
2. **Dependencies**: Run `npm update` regularly
3. **Images**: Optimize new images before adding
4. **Performance**: Monitor with Lighthouse

### Backup

- Keep your `content.json` file backed up
- Version control all changes
- Regular backups of the entire project

## 📞 Support

For questions or issues:

- Check the documentation
- Review the code comments
- Open an issue in the repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**