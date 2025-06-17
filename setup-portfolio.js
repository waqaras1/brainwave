#!/usr/bin/env node

/**
 * Portfolio Setup Script
 * Run this script to quickly customize the project with your information
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 Brainwave Portfolio Customization Setup\n');

// Get user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupPortfolio() {
  try {
    console.log('Please provide your information to customize the portfolio:\n');
    
    const name = await question('Your full name: ');
    const title = await question('Your professional title (e.g., "Full Stack Developer"): ');
    const email = await question('Your email address: ');
    const github = await question('Your GitHub username: ');
    const linkedin = await question('Your LinkedIn profile URL: ');
    const portfolio = await question('Your portfolio website URL: ');
    const resume = await question('Your resume URL (optional, press Enter to skip): ');
    
    // Update the personal config file
    const configPath = path.join(__dirname, 'src', 'config', 'personal.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Replace placeholders with actual values
    configContent = configContent.replace(/\[Your Name\]/g, name);
    configContent = configContent.replace(/Full Stack Developer/g, title);
    configContent = configContent.replace(/\[your-email\]@example\.com/g, email);
    configContent = configContent.replace(/\[your-username\]/g, github);
    configContent = configContent.replace(/\[your-profile\]/g, linkedin.split('/').pop() || '');
    configContent = configContent.replace(/\[your-portfolio-url\]\.com/g, portfolio.replace(/^https?:\/\//, ''));
    
    if (resume) {
      configContent = configContent.replace(/\[your-resume-url\]/g, resume);
    } else {
      configContent = configContent.replace(/https:\/\/\[your-resume-url\]/g, '#');
    }
    
    fs.writeFileSync(configPath, configContent);
    
    // Update README
    const readmePath = path.join(__dirname, 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    
    readmeContent = readmeContent.replace(/\[your-username\]/g, github);
    readmeContent = readmeContent.replace(/Your Name/g, name);
    readmeContent = readmeContent.replace(/your-profile/g, linkedin.split('/').pop() || '');
    readmeContent = readmeContent.replace(/your-portfolio-url\.com/g, portfolio.replace(/^https?:\/\//, ''));
    
    fs.writeFileSync(readmePath, readmeContent);
    
    console.log('\n✅ Portfolio customization complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Review the changes in src/config/personal.js');
    console.log('2. Update any additional content as needed');
    console.log('3. Run "npm run dev" to start the development server');
    console.log('4. Deploy to your preferred hosting platform');
    
  } catch (error) {
    console.error('❌ Error during setup:', error.message);
  } finally {
    rl.close();
  }
}

setupPortfolio(); 