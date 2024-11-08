import React from 'react'
import '../CssComponent/Category.css'
import categoryImg from '../category.svg'
import { useLocation } from 'react-router-dom';
import Cpost from './Cpost';

import icon1 from '../Icon-1.svg'
import icon2 from '../icon.svg'
import icon3 from '../icon2.svg'
import icon0 from '../icon0.svg'
const Category = () => {
  const location=useLocation()
  const { category } = location.state || {};

  return (
    <div>
      {category?(
        <>
        <div  style={{backgroundColor:"#6d6e76"}}className='category.header'>
            <h1 style={{marginLeft:"40%"}}>{category.name}</h1>
            <p style={{marginLeft:"40%"}}>{}</p>
            <h5 style={{marginLeft:"40%"}}>BLOG {category.name}</h5>
        </div>
        <div className='container'>
          <Cpost/>
        <section>
          <div>
          <div className='cat'>
            <img src={icon0}/>
            <h1>
              Startup
            </h1>
          </div>
          <div className='cat'>
          <img src={icon1}/>

            <h1>
              Bussiness
            </h1>
          </div>
          <div className='cat'>
          <img src={icon2}/>

            <h1>
              Economy
            </h1>
          </div>
          <div className='cat'>
          <img src={icon3}/>

            <h1>
              Technology
            </h1>
          </div>
          </div>
          <div>
            <h1>All Tags</h1>
            <p className='p'>Bussiness</p>
            <p className='p'>Experience</p>
            <p className='p'>Screen</p>
            <p className='p'>Technology</p>
            <p className='p'>Marketing</p>
            <p className='p'>Life</p>

          </div>
        </section>
        </div>
        </>
        )
      :(<p></p>  )}
    </div>
      
  )
}

export default Category
