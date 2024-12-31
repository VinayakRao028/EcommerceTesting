# Step 1: Fix Node.js and npm installation
sudo apt-get remove nodejs npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Step 2: Verify Node.js and npm installation
node --version
npm --version

# Step 3: Clear npm cache and reinstall dependencies
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Step 4: Update Navigation.ts file
cat << EOF > src/utils/navigation.ts
export function initializeNavigation() {
  const nav = document.querySelector('.nav-menu');
  const close = document.querySelector('.close');
  const bar = document.querySelector('.bar');

  if (bar) {
    bar.addEventListener('click', () => {
      nav?.classList.add('active');
    });
  }

  if (close) {
    close.addEventListener('click', () => {
      nav?.classList.remove('active');
    });
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);
EOF

# Step 5: Update tsconfig.json to include DOM types
cat << EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
EOF

# Step 6: Update package.json to include Vitest
npm install --save-dev vitest

# Step 7: Add test script to package.json
npm pkg set scripts.test="vitest"

# Step 8: Run tests
npm test