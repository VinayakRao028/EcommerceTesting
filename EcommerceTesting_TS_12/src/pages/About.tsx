# Run these commands in your terminal

# 1. Clear npm cache
npm cache clean --force

# 2. Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# 3. Install n (Node.js version manager)
sudo npm install -g n

# 4. Install the latest stable Node.js version
sudo n stable

# 5. Verify Node.js and npm versions
node -v
npm -v

# 6. Reinstall project dependencies
npm install