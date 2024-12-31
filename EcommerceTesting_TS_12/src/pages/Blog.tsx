# Step 1: Install Node.js and npm
# For Ubuntu/Debian:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# For macOS (using Homebrew):
brew install node

# For Windows:
# Download and install from https://nodejs.org/

# Verify installation:
node --version
npm --version

# Step 2: Install project dependencies
npm install

# Step 3: Fix the React component
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, altText, title, description, linkTo }) => {
  return (
    <section className="card">
      <div className="card__image-container">
        <img src={imgSrc} alt={altText} className="card__image" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <Link to={linkTo} className="card__link">
          Learn More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Card;

# Step 4: Install additional dependencies
npm install react react-dom react-router-dom @types/react @types/react-dom @types/react-router-dom

# Step 5: Create a tsconfig.json file (if not already present)
echo '{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}' > tsconfig.json

# Step 6: Update package.json scripts (if needed)
npm pkg set scripts.start="react-scripts start"
npm pkg set scripts.build="react-scripts build"
npm pkg set scripts.test="react-scripts test"
npm pkg set scripts.eject="react-scripts eject"

# Step 7: Run the development server
npm start