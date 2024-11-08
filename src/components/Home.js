import React from 'react';
import '../CssComponent/Home.css'
import { useNavigate } from 'react-router-dom';
import AuthorList from './AuthorList';

import icon1 from '../Icon-1.svg'
import icon2 from '../icon.svg'
import icon3 from '../icon2.svg'
import icon0 from '../icon0.svg'
import Join from './Join';
import BlogSection from './BlogSection';
import Cpost from './Cpost';
const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Bussiness', image: icon0 },
    { name: 'Startup', image: icon1},
    { name: 'Economy', image: icon2 },
    { name: 'Technology', image: icon3 },
  ];
  
  const goToCategoryPage = (category) => {
    navigate('/category', { state: { category } });
  };


  return (
    <div className="homepage ">
      {/* Header Section */}
      <header className="header background-div">
        <h1>Welcome to Flipr's Blog</h1>
        <p>Your go-to source for insightful articles and news</p>
      </header>

      {/* Choose a Category Section */}
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
      
       <BlogSection/>
     
      <AuthorList/>
      <Join/>
    </div>
  );
};

export default Home;

