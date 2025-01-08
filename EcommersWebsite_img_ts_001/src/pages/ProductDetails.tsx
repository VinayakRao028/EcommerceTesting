import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
}

const ProductDetails: React.FC = () => {
    const [mainImage, setMainImage] = useState<string>('/images/products/f1.jpg');
    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<string>('');
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch related products from an API
        // This is a mock implementation
        setRelatedProducts([
            { id: 1, name: 'Cartoon Astronaut T-shirt', brand: 'adidas', price: 78, image: '/images/products/f1.jpg' },
            { id: 2, name: 'Cartoon Astronaut T-shirt', brand: 'adidas', price: 78, image: '/images/products/f2.jpg' },
            { id: 3, name: 'Cartoon Astronaut T-shirt', brand: 'adidas', price: 78, image: '/images/products/f3.jpg' },
            { id: 4, name: 'Cartoon Astronaut T-shirt', brand: 'adidas', price: 78, image: '/images/products/f4.jpg' },
        ]);
    }, []);

    const handleImageClick = (imageSrc: string) => {
        setMainImage(imageSrc);
    };

    const handleAddToCart = () => {
        // Implement add to cart functionality
        console.log('Added to cart');
    };

    return (
        <div>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImage} width="100%" id="mainimg" alt="Product" />
                    <div className="small-img-group">
                        {['f1', 'f2', 'f3', 'f4'].map((img, index) => (
                            <div key={index} className="small-img-col">
                                <img 
                                    src={`/images/products/${img}.jpg`} 
                                    width="100%" 
                                    className="small-img" 
                                    alt={`Product ${index + 1}`}
                                    onClick={() => handleImageClick(`/images/products/${img}.jpg`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T-Shirt</h4>
                    <h2>$139</h2>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="">Select Size</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="L">L</option>
                        <option value="S">S</option>
                    </select>
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <button className="normal" onClick={handleAddToCart}>Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem repudiandae non laboriosam! Dolor quam voluptas adipisci ab! Quia facilis excepturi ducimus ea in ipsum et sequi harum doloribus eaque recusandae assumenda, ad aperiam molestiae dignissimos eligendi! Temporibus nihil odio pariatur, porro voluptatem quae officiis nam dolorem, consequuntur quo doloribus. Excepturi ad, dolor recusandae rem expedita doloribus minus. Earum, id! Dicta at eveniet rerum quam deleniti vero quo dolore officiis, ipsam iure maxime ad. Distinctio ab impedit quae exercitationem possimus sit vel explicabo eaque? Suscipit iste aperiam error ad saepe exercitationem eius reprehenderit quam ut, hic deserunt adipisci cupiditate ullam quibusdam!
                    </span>
                </div>
            </section>

            <section id="products1" className="section-p1">    
                <h2>Featured Products</h2>
                <p>Summer Collections New Modern Design</p>
                <div className="pro-container">
                    {relatedProducts.map((product) => (
                        <div key={product.id} className="pro">
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
                            <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;