import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import categoryImg from '../category.svg'
import '../CssComponent/Category.css'

import '../CssComponent/Post.css';
import post from '../post.svg'
import Cpost from './Cpost';
import Join from './Join';

import icon1 from '../Icon-1.svg'
import icon2 from '../icon.svg'
import icon3 from '../icon2.svg'
import icon0 from '../icon0.svg'


const Post = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'Bussiness', image: icon0 },
    { name: 'Startup', image: icon1},
    { name: 'Economy', image: icon2 },
    { name: 'Technology', image: icon3 },
  ];
  const location=useLocation()
    const { category } = location.state || {};
    const goToCategoryPage = (category) => {
        navigate('/category', { state: { category } });
      };
    
 

  const handleReadMore = () => {
    navigate(`/read`);
  };
return(
    <>
<div className="featured-post">

  <div className="featured-content">
    <p className="post-tag">FEATURED POST</p>
    <h1 className="post-title">Step-by-step guide to choosing great font pairs</h1>
    <p className="post-meta">
      By <span className="author-name">John Doe</span> | May 23, 2022
    </p>
    <p className="post-excerpt">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </p>
    <button className="read-more-button" onClick={handleReadMore}>Read More &gt;</button>
    </div>
    <div >
  <img src={post} alt="Featured" className="featured-image" />
  </div>
 
 
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
<div className='category-content'>

<div className="category-image-container">
<img src={categoryImg} className="category-image" />
</div>

<div className="category-info">
<p className="category-Cname">Startup</p>

<h2 className="category-name"> Ten free foogle fonts that you should use</h2>
<p className="category-details">This is  under the Startup</p>

</div>
</div>
<div className='category-content'>

<div className="category-image-container">
<img src={categoryImg}  className="category-image" />
</div>

<div className="category-info">
<p className="category-Cname">Entertainment</p>
<h2 className="category-name"> What did I learn from doig 50+ design sprints?</h2>
<p className="category-details">This is  under the Entertainment</p>
</div>
</div>

        
        
<section className="category-section">
        <h2>Choose A Category</h2>
        <div className="categories">
          {categories.map((category,index)=>(
          
          <div  key={index} className="category-card" onClick={()=>goToCategoryPage(category)}>
           <img src={category.image}/>
            <p>{category.name}</p>
          </div>
           ) )}
           
                 </div>
      </section> 



<Join/>
</>
)}
export default Post
