import React from 'react';

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
            {['facebook-f', 'twitter', 'instagram', 'pinterest-p', 'youtube'].map((icon) => (
              <i key={icon} className={`fab fa-${icon}`} aria-hidden="true"></i>
            ))}
          </div>
        </div>
      </div>
      {['About', 'My Account'].map((columnTitle) => (
        <div key={columnTitle} className="col">
          <h4>{columnTitle}:</h4>
          {columnTitle === 'About' ? (
            <>
              <a href="#">About Us</a>
              <a href="#">Delivery Information</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Contact Us</a>
            </>
          ) : (
            <>
              <a href="#">Sign In</a>
              <a href="#">View Cart</a>
              <a href="#">My Wishlist</a>
              <a href="#">Track My Order</a>
              <a href="#">Help</a>
            </>
          )}
        </div>
      ))}
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store Or Google Play</p>
        <div className="row">
          <img src="/images/pay/app.jpg" alt="App Store" />
          <img src="/images/pay/play.jpg" alt="Google Play" />
        </div>
        <p>Secure Payment Gateway</p>
        <img src="/images/pay/pay.png" alt="Payment Methods" />
      </div>
      <div className="copyright">
        <p>©Copyright {new Date().getFullYear()} Tech - React TypeScript Ecommerce Template</p>
      </div>
    </footer>
  );
};

export default Footer;