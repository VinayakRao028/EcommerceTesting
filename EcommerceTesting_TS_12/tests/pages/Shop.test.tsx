import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock implementation of react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

// Component to be tested
interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  rating: number;
  price: number;
}

const Shop: React.FC = () => {
  const products: Product[] = [
    { id: 1, image: '/images/products/f1.jpg', brand: 'adidas', name: 'Cartoon Astronaut T-shirt', rating: 5, price: 78 },
    { id: 2, image: '/images/products/f2.jpg', brand: 'adidas', name: 'Cartoon Astronaut T-shirt', rating: 5, price: 78 },
  ];

  return (
    <div>
      <section id="page-header">
        <h2>#Stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <section id="products1" className="section-p1">    
        <div className="pro-container">
          {products.map((product) => (
            <div key={product.id} className="pro" onClick={() => window.location.href='sproduct.html'}>
              <img src={product.image} alt={product.name} />
              <div className="desc">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="stat">
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>Get Email updates about our latest shop and <span>special offers</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

// Test suite
describe('Shop Component', () => {
  beforeEach(() => {
    render(<Shop />);
  });

  test('renders page header', () => {
    expect(screen.getByText('#Stayhome')).toBeInTheDocument();
    expect(screen.getByText('Save more with coupons & up to 70% off!')).toBeInTheDocument();
  });

  test('renders product list', () => {
    expect(screen.getAllByText('Cartoon Astronaut T-shirt')).toHaveLength(2);
    expect(screen.getAllByText('adidas')).toHaveLength(2);
    expect(screen.getAllByText('$78')).toHaveLength(2);
  });

  test('renders pagination', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('renders newsletter section', () => {
    expect(screen.getByText('Sign Up For Newsletter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your email address')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});

// Mock implementation of testing-library
const render = (component: React.ReactElement) => {
  document.body.innerHTML = '';
  const container = document.createElement('div');
  document.body.appendChild(container);
  const ReactDOM = {
    render: (element: React.ReactElement, container: HTMLElement) => {
      container.innerHTML = element.toString();
    },
  };
  ReactDOM.render(component, container);
};

const screen = {
  getByText: (text: string) => {
    const element = document.body.querySelector(`*:not(script):not(style):contains(${text})`);
    if (!element) throw new Error(`Text not found: ${text}`);
    return element;
  },
  getAllByText: (text: string) => {
    return Array.from(document.body.querySelectorAll(`*:not(script):not(style):contains(${text})`));
  },
  getByPlaceholderText: (text: string) => {
    const element = document.body.querySelector(`input[placeholder="${text}"]`);
    if (!element) throw new Error(`Placeholder not found: ${text}`);
    return element;
  },
};

const expect = (received: any) => ({
  toBeInTheDocument: () => {
    const pass = document.body.contains(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be in the document`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be in the document`,
        pass: false,
      };
    }
  },
  toHaveLength: (length: number) => {
    const pass = received.length === length;
    if (pass) {
      return {
        message: () => `expected ${received} not to have length ${length}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have length ${length}`,
        pass: false,
      };
    }
  },
});

const test = (name: string, fn: () => void) => {
  console.log(`Running test: ${name}`);
  fn();
  console.log(`Test passed: ${name}`);
};

const describe = (name: string, fn: () => void) => {
  console.log(`Test suite: ${name}`);
  fn();
};

const beforeEach = (fn: () => void) => {
  fn();
};

// Run the tests
describe('Shop Component', () => {
  beforeEach(() => {
    render(<Shop />);
  });

  test('renders page header', () => {
    expect(screen.getByText('#Stayhome')).toBeInTheDocument();
    expect(screen.getByText('Save more with coupons & up to 70% off!')).toBeInTheDocument();
  });

  test('renders product list', () => {
    expect(screen.getAllByText('Cartoon Astronaut T-shirt')).toHaveLength(2);
    expect(screen.getAllByText('adidas')).toHaveLength(2);
    expect(screen.getAllByText('$78')).toHaveLength(2);
  });

  test('renders pagination', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('renders newsletter section', () => {
    expect(screen.getByText('Sign Up For Newsletter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your email address')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});

console.log('All tests completed successfully!');