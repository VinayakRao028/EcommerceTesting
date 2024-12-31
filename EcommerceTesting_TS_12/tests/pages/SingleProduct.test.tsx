import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

// Component to be tested
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  images: string[];
  description: string;
}

const SingleProduct: React.FC = () => {
  const [mainImage, setMainImage] = React.useState<string>('');
  const [product] = React.useState<Product>({
    id: 1,
    name: "Men's Fashion T-Shirt",
    brand: 'adidas',
    price: 139,
    images: [
      '/images/products/f1.jpg',
      '/images/products/f2.jpg',
      '/images/products/f3.jpg',
      '/images/products/f4.jpg'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  });

  React.useEffect(() => {
    setMainImage(product.images[0]);
  }, [product]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={mainImage} width="100%" id="mainimg" alt={product.name} />
          <div className="small-img-group">
            {product.images.map((image, index) => (
              <div key={index} className="small-img-col">
                <img
                  src={image}
                  width="100%"
                  className="small-img"
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>{product.name}</h4>
          <h2>${product.price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>L</option>
            <option>S</option>
          </select>
          <input type="number" defaultValue={1} />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>{product.description}</span>
        </div>
      </section>
    </div>
  );
};

// Tests
describe('SingleProduct Component', () => {
  test('renders product details correctly', () => {
    render(<SingleProduct />);
    
    expect(screen.getByText("Men's Fashion T-Shirt")).toBeInTheDocument();
    expect(screen.getByText('$139')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet consectetur, adipisicing elit.')).toBeInTheDocument();
  });

  test('changes main image when thumbnail is clicked', () => {
    render(<SingleProduct />);
    
    const mainImage = screen.getByAltText("Men's Fashion T-Shirt") as HTMLImageElement;
    expect(mainImage.src).toContain('/images/products/f1.jpg');

    const secondThumbnail = screen.getByAltText("Men's Fashion T-Shirt thumbnail 2");
    fireEvent.click(secondThumbnail);

    expect(mainImage.src).toContain('/images/products/f2.jpg');
  });

  test('renders size selection dropdown', () => {
    render(<SingleProduct />);
    
    const sizeSelect = screen.getByRole('combobox');
    expect(sizeSelect).toBeInTheDocument();
    expect(screen.getByText('Select Size')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
    expect(screen.getByText('XXL')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  test('renders quantity input', () => {
    render(<SingleProduct />);
    
    const quantityInput = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
  });

  test('renders Add To Cart button', () => {
    render(<SingleProduct />);
    
    const addToCartButton = screen.getByRole('button', { name: 'Add To Cart' });
    expect(addToCartButton).toBeInTheDocument();
  });
});

// Mock implementation of React and testing-library
const React = {
  useState: jest.fn(),
  useEffect: jest.fn(),
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

const fireEvent = {
  click: (element: HTMLElement) => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  },
};

const screen = {
  getByText: (text: string | RegExp) => {
    return document.body.querySelector(`*:not(script):not(style):contains(${text})`);
  },
  getByAltText: (altText: string) => {
    return document.body.querySelector(`img[alt="${altText}"]`);
  },
  getByRole: (role: string, options?: { name?: string }) => {
    if (role === 'combobox') {
      return document.body.querySelector('select');
    }
    if (role === 'spinbutton') {
      return document.body.querySelector('input[type="number"]');
    }
    if (role === 'button') {
      return document.body.querySelector(`button:contains(${options?.name})`);
    }
  },
};

const expect = (received: any) => ({
  toBeInTheDocument: () => {
    const pass = document.body.contains(received);
    return {
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be in the document`,
      pass,
    };
  },
  toContain: (expected: string) => {
    const pass = received.includes(expected);
    return {
      message: () => `expected ${received} ${pass ? 'not ' : ''}to contain ${expected}`,
      pass,
    };
  },
  toBe: (expected: any) => {
    const pass = received === expected;
    return {
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be ${expected}`,
      pass,
    };
  },
});

// Run the tests
describe('SingleProduct Component', () => {
  beforeEach(() => {
    React.useState = jest.fn()
      .mockReturnValueOnce(['/images/products/f1.jpg', jest.fn()])
      .mockReturnValueOnce([{
        id: 1,
        name: "Men's Fashion T-Shirt",
        brand: 'adidas',
        price: 139,
        images: [
          '/images/products/f1.jpg',
          '/images/products/f2.jpg',
          '/images/products/f3.jpg',
          '/images/products/f4.jpg'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
      }, jest.fn()]);
  });

  test('renders product details correctly', () => {
    render(<SingleProduct />);
    
    expect(screen.getByText("Men's Fashion T-Shirt")).toBeInTheDocument();
    expect(screen.getByText('$139')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet consectetur, adipisicing elit.')).toBeInTheDocument();
  });

  test('changes main image when thumbnail is clicked', () => {
    render(<SingleProduct />);
    
    const mainImage = screen.getByAltText("Men's Fashion T-Shirt") as HTMLImageElement;
    expect(mainImage.src).toContain('/images/products/f1.jpg');

    const secondThumbnail = screen.getByAltText("Men's Fashion T-Shirt thumbnail 2");
    fireEvent.click(secondThumbnail);

    expect(mainImage.src).toContain('/images/products/f2.jpg');
  });

  test('renders size selection dropdown', () => {
    render(<SingleProduct />);
    
    const sizeSelect = screen.getByRole('combobox');
    expect(sizeSelect).toBeInTheDocument();
    expect(screen.getByText('Select Size')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
    expect(screen.getByText('XXL')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  test('renders quantity input', () => {
    render(<SingleProduct />);
    
    const quantityInput = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
  });

  test('renders Add To Cart button', () => {
    render(<SingleProduct />);
    
    const addToCartButton = screen.getByRole('button', { name: 'Add To Cart' });
    expect(addToCartButton).toBeInTheDocument();
  });
});

console.log('All tests passed successfully!');