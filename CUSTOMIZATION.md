# 🎨 Portfolio Customization Guide

This guide will help you personalize the Brainwave project for your portfolio.

## 🚀 Quick Setup

Run the automated setup script to quickly customize the project:

```bash
npm run setup
```

This will prompt you for your information and automatically update the necessary files.

## 📝 Manual Customization

If you prefer to customize manually, here are the key files to update:

### 1. Personal Information (`src/config/personal.js`)

This is the main configuration file where you can update:
- Your name and title
- Email address
- Social media links
- Project information

### 2. Footer (`src/components/Footer.jsx`)

The footer now uses the personal configuration, but you can also add:
- Additional links
- Custom styling
- More personal touches

### 3. Hero Section (`src/components/Hero.jsx`)

Update the main hero section to reflect:
- Your project description
- Your skills and technologies
- Your personal branding

### 4. Social Links (`src/constants/index.js`)

The social links are now connected to your personal configuration, but you can:
- Add more social platforms
- Change the icons
- Update the styling

### 5. Project Information

Update these files with your project details:
- `package.json` - Project name and description
- `README.md` - Project documentation
- `index.html` - Page title and meta tags

## 🎯 Recommended Customizations

### Add Your Personal Branding
- Update the color scheme in `tailwind.config.js`
- Add your logo to the assets folder
- Customize the typography

### Enhance the Content
- Add your own project screenshots
- Update the features list to match your implementation
- Add a "Technologies Used" section

### Improve SEO
- Update meta tags in `index.html`
- Add Open Graph tags
- Include structured data

### Add Interactive Elements
- Include a live demo link
- Add GitHub repository links
- Include contact forms

## 🔧 Technical Customizations

### Styling
- Modify `src/index.css` for global styles
- Update component-specific styles
- Add custom animations

### Functionality
- Add new components
- Implement additional features
- Integrate with APIs

### Performance
- Optimize images
- Add lazy loading
- Implement code splitting

## 📱 Deployment

Once customized, you can deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `npm run build && gh-pages -d dist`
- **Firebase**: `firebase deploy`

## 🎨 Design Tips

1. **Keep it Clean**: Don't overcrowd the design
2. **Show Your Work**: Include screenshots and demos
3. **Tell a Story**: Explain your process and decisions
4. **Make it Accessible**: Ensure good contrast and readability
5. **Mobile First**: Test on all device sizes

## 📞 Support

If you need help with customization:
1. Check the existing code structure
2. Review the Tailwind CSS documentation
3. Look at the component architecture
4. Test changes incrementally

Happy customizing! 🚀 