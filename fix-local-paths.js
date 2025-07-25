const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace /business-suite/ with / in asset paths
      content = content.replace(/\/business-suite\/_next/g, '/_next');
      content = content.replace(/href="\/business-suite\//g, 'href="/');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    }
  });
}

console.log('Fixing asset paths for local testing...');
fixPaths('./out');
console.log('Done! You can now serve the site locally.');