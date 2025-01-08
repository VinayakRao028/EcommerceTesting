import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ path, component: Component }: { path: string; component: React.ComponentType }) => (
    <div data-testid={`route:${path}`}>
      {Component && <Component />}
    </div>
  ),
  Switch: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock components
const mockComponent = (name: string) => () => <div data-testid={name}>{name}</div>;

const Header = mockComponent('Header');
const Footer = mockComponent('Footer');
const Home = mockComponent('Home');
const Shop = mockComponent('Shop');
const Blog = mockComponent('Blog');
const About = mockComponent('About');
const Contact = mockComponent('Contact');
const Cart = mockComponent('Cart');

// App component
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// Test suite
describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });

  it('renders all routes', () => {
    render(<App />);
    expect(screen.getByTestId('route:/')).toBeInTheDocument();
    expect(screen.getByTestId('route:/shop')).toBeInTheDocument();
    expect(screen.getByTestId('route:/blog')).toBeInTheDocument();
    expect(screen.getByTestId('route:/about')).toBeInTheDocument();
    expect(screen.getByTestId('route:/contact')).toBeInTheDocument();
    expect(screen.getByTestId('route:/cart')).toBeInTheDocument();
  });

  it('renders Home component for root path', () => {
    render(<App />);
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });
});

// Run tests
test('Placeholder to trigger test execution', () => {
  expect(true).toBe(true);
});