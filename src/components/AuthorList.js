import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CssComponent/Home.css'
import author1 from  '../author1.svg'
import author2 from '../author2.svg'
import author3 from '../author3.svg'
import author4 from '../author4.svg'

import fb from '../fb.svg'
import insta from '../insta.svg'
import twitter from '../twitter.svg'
import linkdin from '../linkdin.svg'




const AuthorList = () => {
    const navigate=useNavigate()
    const authors = [
        { name: 'John Doe', image: author1 },
        { name: 'Dianne Russell', image: author2 },
        { name: 'jenny Wilson', image: author3 },
        { name: 'Lestie Alexander', image: author4 },
      ];
      const goToAuthorPage = (author) => {
        navigate('/author', { state: { author } });
      };
     
  return (
    <div>
      <section className="authors-section">
        <h2>Our Authors</h2>
        <div className="authors">
        {authors.map((author, index) => (
        <div key={index} className="author-card" onClick={() => goToAuthorPage(author)}>
          <img src={author.image} alt={author.name} />
          <p>{author.name}</p>
          <div >
            <img style={{margin:"2px"}} src={fb}/>
            <img style={{margin:"2px"}} src={insta}/>
            <img style={{margin:"2px"}} src={twitter}/>
            <img style={{margin:"2px"}} src={linkdin}/>

          </div>
        </div>
      ))}

         </div>
      </section>

    </div>
  )
}

export default AuthorList
