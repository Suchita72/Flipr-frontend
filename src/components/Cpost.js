import React from 'react'
import '../CssComponent/Category.css'
import categoryImg from '../category.svg'
import { useLocation } from 'react-router-dom'

const Cpost = () => {
    const location=useLocation()
    const { category } = location.state || {};
  
  return (
    <div>
        <section>
<div className='category-content'>
            <div className="category-image-container">
            <img src={categoryImg} alt={category.name} className="category-image" />
          </div>
          
          <div className="category-info">
          <p className="category-Cname">{category.name}</p>
            <h2 className="category-name"> Top 6 free website mockup tools 2024</h2>
            <p className="category-details">This is  under the {category.name}</p>
          
            </div>
            </div>
            <div className='category-content'>

            <div className="category-image-container">
            <img src={categoryImg} alt={category.name} className="category-image" />
          </div>
          
          <div className="category-info">
          <p className="category-Cname">{category.name}</p>
            <h2 className="category-name"> Step-by-step guide to choosig great font pairs</h2>
            <p className="category-details">This is  under the {category.name}</p>
          
            </div>
            </div>
            <div className='category-content'>

            <div className="category-image-container">
            <img src={categoryImg} alt={category.name} className="category-image" />
          </div>
          
          <div className="category-info">
          <p className="category-Cname">{category.name}</p>

            <h2 className="category-name"> Ten free foogle fonts that you should use</h2>
            <p className="category-details">This is  under the {category.name}</p>
          
            </div>
            </div>
            <div className='category-content'>

            <div className="category-image-container">
            <img src={categoryImg} alt={category.name} className="category-image" />
          </div>
          
          <div className="category-info">
            <p className="category-Cname">{category.name}</p>
            <h2 className="category-name"> What did I learn from doig 50+ design sprints?</h2>
            <p className="category-details">This is  under the {category.name}</p>
          </div>
            </div>
        </section>
      
    </div>
  )
}

export default Cpost
