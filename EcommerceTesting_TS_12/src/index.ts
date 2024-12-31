# Step 1: Remove conflicting Node.js and npm installations
sudo apt-get remove nodejs npm
sudo apt-get autoremove

# Step 2: Clean apt cache
sudo apt-get clean
sudo apt-get update

# Step 3: Install Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc

# Step 4: Install the latest LTS version of Node.js
nvm install --lts
nvm use --lts

# Step 5: Verify installation
node --version
npm --version

# Step 6: Clear npm cache
npm cache clean -f

# Step 7: Navigate to your project directory
cd /path/to/your/project

# Step 8: Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Step 9: Install project dependencies
npm install

# Step 10: Install ESLint and related packages
npm install eslint@latest eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest --save-dev

# Step 11: Create or update .eslintrc.js
cat << EOF > .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Add any specific rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
EOF

# Step 12: Add lint script to package.json
npm pkg set scripts.lint="eslint 'src/**/*.{js,jsx,ts,tsx}'"

# Step 13: Run ESLint
npm run lint

# Step 14: Fix any remaining linting errors in your code
# Open your code files and address the issues reported by ESLint

# Step 15: Run ESLint again to verify fixes
npm run lint