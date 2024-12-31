# EcommerceTesting_TS_12

This repository contains a TypeScript-based e-commerce testing project, converted from the original HTML/CSS/JavaScript implementation.

## Project Structure

```
.
├── README.md
├── package.json
├── public
│   ├── images
│   │   ├── about
│   │   ├── banner
│   │   ├── blog
│   │   ├── features
│   │   ├── pay
│   │   ├── people
│   │   └── products
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Cart.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   └── SingleProduct.tsx
│   ├── styles
│   │   └── global.css
│   └── utils
│       └── navigation.ts
├── tests
│   ├── components
│   │   ├── Footer.test.tsx
│   │   └── Header.test.tsx
│   ├── pages
│   │   ├── About.test.tsx
│   │   ├── Blog.test.tsx
│   │   ├── Cart.test.tsx
│   │   ├── Contact.test.tsx
│   │   ├── Home.test.tsx
│   │   ├── Shop.test.tsx
│   │   └── SingleProduct.test.tsx
│   └── utils
│       └── navigation.test.ts
└── tsconfig.json
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Run tests: `npm test`

## Technology Stack

- TypeScript
- React
- Jest (for testing)

## Contributing

Please read the CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.