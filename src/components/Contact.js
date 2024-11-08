import React from 'react'
import Form from './Form'


const Contact = () => {
  return (
    
    <>    <div className='contact'>
        <h5 style={{marginTop:"40px",marginLeft:"30%" }}>CONTACT US</h5>
        <h1 style={{marginLeft:"10%"}}>Let's Start a Conversation</h1>
        <p></p>
        <div className='contact-container'>
            <div className='contact-left'>
                <p>Working hours</p>
                <p>______________________</p>
                <h5>Monday To Friday</h5>
                <h5>9.00 AM to 8.00 PM</h5>
                <p>Our support team is available 24/7</p>
            </div>
            
            <div className='contact-right'>
                <p>Contact us</p>
                <p>______________________</p>
                <h5>02079932905</h5>
                <p>Our support team is available 24/7</p>
            </div>
            
        </div>
      
    </div>
    <Form/>
    </>

    
  )
}

export default Contact
