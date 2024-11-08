import React from 'react';
import '../CssComponent/Read.css';
import post from '../post.svg'
import author1 from  '../author1.svg'


const Read = () => {
  return (
    <div className="blog-post">
      <header className="post-header">
        <div className="post-author">
          <img src={author1} alt="Author" className="author-avatar" />
          <div>
            <p className="author-name">john doe</p>
            <p className="post-date">Posted on 17th January 2022</p>
          </div>
        </div>
        <h1 className="post-title">Step-by-step guide to choosing great font pairs</h1>
        <p className="post-category">Startup</p>
      </header>

      <img src={post} alt="Blog Post" className="post-image" />

      <section className="post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </section>
    </div>
  );
};

export default Read;
