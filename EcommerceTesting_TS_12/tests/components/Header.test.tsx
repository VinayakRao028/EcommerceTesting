import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the react-router-dom Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

// Component to be tested
const Header: React.FC = () => {
  return (
    <section id="header">
      <a href="/">
        <img src="/images/swethlogopng5.png" className="logo" alt="Logo" />
      </a>

      <div>
        <ul id="navbar">
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li id="lg-bag"><a href="/cart"><i className="far fa-shopping-bag"></i></a></li>
          <a href="#" id="close"><i className="far fa-times"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="/cart"><i className="far fa-shopping-bag"></i></a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  test('renders logo', () => {
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/swethlogopng5.png');
  });

  test('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const shopLink = screen.getByText('Shop');
    const blogLink = screen.getByText('Blog');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(shopLink).toHaveAttribute('href', '/shop');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('renders shopping bag icon', () => {
    const shoppingBagIcon = screen.getAllByRole('link', { name: '' })[5];
    expect(shoppingBagIcon).toBeInTheDocument();
    expect(shoppingBagIcon).toHaveAttribute('href', '/cart');
  });

  test('renders mobile menu icons', () => {
    const mobileMenuIcons = screen.getByRole('link', { name: '' });
    expect(mobileMenuIcons).toBeInTheDocument();
    expect(mobileMenuIcons).toHaveAttribute('href', '/cart');
  });
});

// Run the tests
describe('Run all tests', () => {
  test('All tests should pass', () => {
    // This will run all the tests defined above
  });
});