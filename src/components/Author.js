import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CssComponent/Author.css';

import categoryImg from '../category.svg'
import '../CssComponent/Category.css'


const Author = () => {
  const location = useLocation();
  const { author } = location.state || {};

  return (
    <>   <div className="author-page">
      {author ? (
        <div>
                <div className="author-content">
          
          <div className="author-image-container">
            <img src={author.image} alt={author.name} className="author-image" />
          </div>
          
          <div className="author-info">
            <h2 className="author-name"> Hey there I'm {author.name} and welcome to my blog</h2>
            <p className="author-details">Biography or other details about the author .</p>
            <div className='author-line'>
            <p className='yellow-line'>                                                   </p>

            <p className='blue-line'>                                                </p>
            </div>
          </div>
         
        </div>
        </div>     ) : (
        <p>No author data available.</p>
      )}
    </div>
 
        
        <div className='category-content'>
            <div className="category-image-container">
            <img src={categoryImg}  className="category-image" />
          </div>
          
          <div className="category-info">
          <p className="category-Cname">Economy</p>
            <h2 className="category-name"> Top 6 free website mockup tools 2024</h2>
            <p className="category-details">This is  under the Economy</p>
          
            </div>
            </div>
            <div className='category-content'>

<div className="category-image-container">
<img src={categoryImg}  className="category-image" />
</div>

<div className="category-info">
<p className="category-Cname">Technology</p>
<h2 className="category-name"> Step-by-step guide to choosig great font pairs</h2>
<p className="category-details">This is  under the Technology</p>

</div>
</div>
</>
      
  );
};

export default Author;
