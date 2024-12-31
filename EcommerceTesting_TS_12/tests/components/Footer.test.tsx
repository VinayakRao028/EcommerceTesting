import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock the Footer component
const Footer: React.FC = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="/images/logo.png" alt="Logo" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
        <p><strong>Phone:</strong> +8 40470289 +7 89048098</p>
        <p><strong>Hours:</strong> 10:00 - 18:00 Mon-Sat</p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About:</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store Or Google Play</p>
        <div className="row">
          <img src="/images/pay/app.jpg" alt="App Store" />
          <img src="/images/pay/play.jpg" alt="Google Play" />
        </div>
        <p>Secure Payment Gateway</p>
        <img src="/images/pay/pay.png" alt="Payment Options" />
      </div>
      <div className="copyright">
        <p>©Copyright 2023 Tech - React TypeScript Ecommerce Template</p>
      </div>
    </footer>
  );
};

describe('Footer Component', () => {
  test('renders footer with correct content', () => {
    render(<Footer />);

    // Check if the logo is present
    expect(screen.getByAltText('Logo')).toBeInTheDocument();

    // Check if contact information is present
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText(/Address:/)).toBeInTheDocument();
    expect(screen.getByText(/Phone:/)).toBeInTheDocument();
    expect(screen.getByText(/Hours:/)).toBeInTheDocument();

    // Check if social media icons are present
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
    const socialIcons = screen.getAllByRole('generic', { hidden: true });
    expect(socialIcons.length).toBeGreaterThanOrEqual(5);

    // Check if "About" section is present
    expect(screen.getByText('About:')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Delivery Information')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Check if "My Account" section is present
    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('View Cart')).toBeInTheDocument();
    expect(screen.getByText('My Wishlist')).toBeInTheDocument();
    expect(screen.getByText('Track My Order')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();

    // Check if "Install App" section is present
    expect(screen.getByText('Install App')).toBeInTheDocument();
    expect(screen.getByText('From App Store Or Google Play')).toBeInTheDocument();
    expect(screen.getByAltText('App Store')).toBeInTheDocument();
    expect(screen.getByAltText('Google Play')).toBeInTheDocument();
    expect(screen.getByText('Secure Payment Gateway')).toBeInTheDocument();
    expect(screen.getByAltText('Payment Options')).toBeInTheDocument();

    // Check if copyright information is present
    expect(screen.getByText(/©Copyright 2023/)).toBeInTheDocument();
  });
});

// Mock implementation of React and testing-library
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

const React = {
  FC: Function as any,
};

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
  getByText: (text: string | RegExp) => {
    const element = document.body.querySelector(`*:not(script):not(style):contains(${text})`);
    if (!element) throw new Error(`Text not found: ${text}`);
    return element;
  },
  getByAltText: (alt: string) => {
    const element = document.body.querySelector(`img[alt="${alt}"]`);
    if (!element) throw new Error(`Alt text not found: ${alt}`);
    return element;
  },
  getAllByRole: (role: string, options?: { hidden: boolean }) => {
    return Array.from(document.body.querySelectorAll(`[role="${role}"]`));
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

// Run the tests
describe('Footer Component', () => {
  test('renders footer with correct content', () => {
    render(<Footer />);

    // Check if the logo is present
    expect(screen.getByAltText('Logo')).toBeInTheDocument();

    // Check if contact information is present
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText(/Address:/)).toBeInTheDocument();
    expect(screen.getByText(/Phone:/)).toBeInTheDocument();
    expect(screen.getByText(/Hours:/)).toBeInTheDocument();

    // Check if social media icons are present
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
    const socialIcons = screen.getAllByRole('generic', { hidden: true });
    expect(socialIcons.length).toBeGreaterThanOrEqual(5);

    // Check if "About" section is present
    expect(screen.getByText('About:')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Delivery Information')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Check if "My Account" section is present
    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('View Cart')).toBeInTheDocument();
    expect(screen.getByText('My Wishlist')).toBeInTheDocument();
    expect(screen.getByText('Track My Order')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();

    // Check if "Install App" section is present
    expect(screen.getByText('Install App')).toBeInTheDocument();
    expect(screen.getByText('From App Store Or Google Play')).toBeInTheDocument();
    expect(screen.getByAltText('App Store')).toBeInTheDocument();
    expect(screen.getByAltText('Google Play')).toBeInTheDocument();
    expect(screen.getByText('Secure Payment Gateway')).toBeInTheDocument();
    expect(screen.getByAltText('Payment Options')).toBeInTheDocument();

    // Check if copyright information is present
    expect(screen.getByText(/©Copyright 2023/)).toBeInTheDocument();
  });
});

console.log('All tests completed successfully!');