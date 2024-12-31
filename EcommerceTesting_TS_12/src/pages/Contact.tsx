# 1. Remove any existing Node.js and npm installations
sudo apt-get remove nodejs npm

# 2. Clean the apt cache
sudo apt-get clean
sudo apt-get update

# 3. Install Node.js and npm using nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install node --lts
nvm use node --lts

# 4. Verify installation
node --version
npm --version

# 5. Clear npm cache
npm cache clean --force

# 6. Reinstall project dependencies
rm -rf node_modules package-lock.json
npm install