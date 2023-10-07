import React from 'react'

export default function Feedback() {
  return (
    
    <div>
      <section className='feedback-container'>
        <h2 style={{textAlign :"center" , marginTop : 40}}>FeedBack</h2>
        <p className='feedback-p'>We value your feedback! Our feedback section is your platform to share your thoughts and experiences 
          with us. Whether it's about our products, website, or any aspect of your interaction with us,
           we encourage you to reach out and help us improve. Your input is invaluable in shaping our offerings 
           to better meet your needs.</p>
        <div className='feedback-container'>
            <form action="https://airform.io/slam.salim2006@gmail.com" method="post">
                <input className='inputField' type="text" placeholder="Name" name='name'/>
                <input className='inputField' type="email" placeholder="Email" name='email' />
                <input className='inputField' type="text" placeholder="Subject" name='subject' />
                <textarea className='inputField textArea ' placeholder="Message" name='message'></textarea>
                <button className='submit-btn'>Submit</button>
            </form>
        </div>
      </section>
    </div>
  )
}
