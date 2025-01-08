import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: number;
}

const Shop: React.FC = () => {
    const products: Product[] = [
        { id: 1, image: '/images/products/f1.jpg', brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78 },
        { id: 2, image: '/images/products/f2.jpg', brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78 },
        // ... Add more products here
    ];

    const handleProductClick = (productId: number) => {
        // Navigate to product detail page
        window.location.href = `/product/${productId}`;
    };

    return (
        <div className="shop-page">
            <section className="page-header">
                <h2>#Stayhome</h2>
                <p>Save more with coupons & up to 70% off!</p>
            </section>

            <section className="products-section section-p1">    
                <div className="pro-container">
                    {products.map((product) => (
                        <div key={product.id} className="pro" onClick={() => handleProductClick(product.id)}>
                            <img src={product.image} alt={product.name} />
                            <div className="desc">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="stat">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <h4>${product.price}</h4>
                            </div>
                            <button className="cart-button" aria-label="Add to cart">
                                <i className="fal fa-shopping-cart cart"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pagination section-p1">
                <Link to="/shop?page=1">1</Link>
                <Link to="/shop?page=2">2</Link>
                <Link to="/shop?page=next"><i className="fal fa-long-arrow-alt-right"></i></Link>
            </section>

            <section className="newsletter section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get Email updates about our latest shop and <span>special offers</span></p>
                </div>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" aria-label="Email address" required />
                    <button type="submit" className="normal">Sign Up</button>
                </form>
            </section>
        </div>
    );
};

export default Shop;