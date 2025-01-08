import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  content: string;
  date: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: '/images/blog/b1.jpg',
      title: 'The cotton-Jersey Zip-Up Hoodies',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero accusamus fuga alias repellendus voluptatibus, velit odio repellat explicabo voluptatum.',
      date: '13/01'
    },
    // ... (other blog posts)
  ];

  return (
    <div className="blog-page">
      <section className="page-header blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products</p>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-box">
            <div className="blog-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-details">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <Link to={`/blog/${post.id}`}>CONTINUE READING</Link>
            </div>
            <time dateTime={post.date}>{post.date}</time>
          </article>
        ))}
      </section>

      <nav className="pagination section-p1">
        <Link to="/blog?page=1">1</Link>
        <Link to="/blog?page=2">2</Link>
        <Link to="/blog?page=2" aria-label="Next Page">
          <i className="fal fa-long-arrow-alt-right" aria-hidden="true"></i>
        </Link>
      </nav>

      <section className="newsletter section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>Get Email updates about our latest shop and <span>special offers</span></p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
          <button type="submit" className="normal">Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default Blog;