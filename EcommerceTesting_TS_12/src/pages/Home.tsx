1. Clean npm cache:
   npm cache clean --force

2. Remove existing node_modules and package-lock.json:
   rm -rf node_modules package-lock.json

3. Install nvm (Node Version Manager):
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

4. Restart your terminal or source your profile:
   source ~/.bashrc  # or ~/.zshrc if you're using zsh

5. Install a stable version of Node.js:
   nvm install 14.17.0
   nvm use 14.17.0

6. Verify Node.js and npm installation:
   node --version
   npm --version

7. Update npm to the latest version:
   npm install -g npm@latest

8. Install project dependencies:
   npm install

9. If you encounter specific package errors, try installing them individually:
   npm install react react-dom @types/react @types/react-dom typescript

10. If you're still facing issues, try using Yarn instead of npm:
    npm install -g yarn
    yarn install

11. Update your package.json to include necessary dependencies:
    {
      "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^5.2.0"
      },
      "devDependencies": {
        "@types/react": "^17.0.0",
        "@types/react-dom": "^17.0.0",
        "@types/react-router-dom": "^5.1.7",
        "typescript": "^4.1.2"
      }
    }

12. After updating package.json, run:
    npm install  # or yarn install if using Yarn

13. If you're still encountering issues, try clearing your global npm cache:
    npm cache clean -f

14. As a last resort, if all else fails, consider reinstalling Node.js:
    nvm uninstall 14.17.0
    nvm install 14.17.0

After completing these steps, your Node.js and npm should be properly installed, and the dependencies should be resolved. Make sure to restart your development server after these changes.