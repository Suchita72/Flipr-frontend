import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='form-container'>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Your Email'/>
            <input type='text' placeholder='Query Related'/>
            <textarea placeholder='Message'></textarea>
            <button>Send message</button>
        </div>
      
    </div>
  )
}

export default Form
