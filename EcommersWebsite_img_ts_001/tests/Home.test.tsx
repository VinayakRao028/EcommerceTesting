import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock React Router
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

// Mock CSS import
jest.mock('../styles/global.css', () => ({}));

// Component to be tested
const Home: React.FC = () => {
  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button><a href="/shop">Shop Now</a></button>
      </section>

      <section id="feature" className="section-p1">
        {[
          { img: 'f1.png', text: 'Free Shipping' },
          { img: 'f2.png', text: 'Online Order' },
          { img: 'f3.png', text: 'Save Money' },
          { img: 'f4.png', text: 'Promotions' },
          { img: 'f5.png', text: 'Happy Sell' },
          { img: 'f6.png', text: '24/7 Support' }
        ].map((feature, index) => (
          <div key={index} className="fe-box">
            <img src={`/images/features/${feature.img}`} alt={feature.text} />
            <h6>{feature.text}</h6>
          </div>
        ))}
      </section>

      <section id="products1" className="section-p1">    
        <h2>Featured Products</h2>
        <p>Summer Collections New Modern Design</p>
        <div className="pro-container">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="pro">
              <img src={`/images/products/f${index + 1}.jpg`} alt={`Product ${index + 1}`} />
              <div className="desc">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-shirt</h5>
                <div className="stat">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair service</h4>
        <h2>Up to <span> 70% off </span> All t-shirts & Accessories</h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="products1" className="section-p1">    
        <h2>New Arrivals</h2>
        <p>Summer Collections New Modern Design</p>
        <div className="pro-container">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="pro">
              <img src={`/images/products/n${index + 1}.jpg`} alt={`New Product ${index + 1}`} />
              <div className="desc">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-shirt</h5>
                <div className="stat">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring Summer</h4>
          <h2>Upcoming seasons</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2023</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
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
    </>
  );
};

describe('Home Component', () => {
  test('renders hero section with correct content', () => {
    render(<Home />);
    expect(screen.getByText('Trade-in-offer')).toBeInTheDocument();
    expect(screen.getByText('Super value deals')).toBeInTheDocument();
    expect(screen.getByText('On all products')).toBeInTheDocument();
    expect(screen.getByText('Save more with coupons & up to 70% off!')).toBeInTheDocument();
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });

  test('renders feature section with correct number of features', () => {
    render(<Home />);
    const featureBoxes = screen.getAllByTestId('fe-box');
    expect(featureBoxes).toHaveLength(6);
  });

  test('renders featured products section', () => {
    render(<Home />);
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
    expect(screen.getByText('Summer Collections New Modern Design')).toBeInTheDocument();
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(8);
  });

  test('renders banner section', () => {
    render(<Home />);
    expect(screen.getByText('Repair service')).toBeInTheDocument();
    expect(screen.getByText('Up to')).toBeInTheDocument();
    expect(screen.getByText('70% off')).toBeInTheDocument();
    expect(screen.getByText('All t-shirts & Accessories')).toBeInTheDocument();
    expect(screen.getByText('Explore More')).toBeInTheDocument();
  });

  test('renders new arrivals section', () => {
    render(<Home />);
    expect(screen.getByText('New Arrivals')).toBeInTheDocument();
    const newProductCards = screen.getAllByTestId('new-product-card');
    expect(newProductCards).toHaveLength(8);
  });

  test('renders small banner section', () => {
    render(<Home />);
    expect(screen.getByText('Crazy Deals')).toBeInTheDocument();
    expect(screen.getByText('buy 1 get 1 free')).toBeInTheDocument();
    expect(screen.getByText('Spring Summer')).toBeInTheDocument();
    expect(screen.getByText('Upcoming seasons')).toBeInTheDocument();
  });

  test('renders banner3 section', () => {
    render(<Home />);
    expect(screen.getByText('SEASONAL SALE')).toBeInTheDocument();
    expect(screen.getByText('NEW FOOTWEAR COLLECTION')).toBeInTheDocument();
    expect(screen.getByText('T-SHIRTS')).toBeInTheDocument();
  });

  test('renders newsletter section', () => {
    render(<Home />);
    expect(screen.getByText('Sign Up For Newsletter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your email address')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('newsletter sign up button is clickable', () => {
    render(<Home />);
    const signUpButton = screen.getByText('Sign Up');
    fireEvent.click(signUpButton);
    // Add assertions for what should happen when the button is clicked
  });
});