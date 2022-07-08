import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form>
        <div className='top'>
          <div className='name-input'>
            <label htmlFor='name'>Name*</label>
            <input type='text' name='name' id='name' required={true} />
          </div>
          <div className='email-input'>
            <label htmlFor='email'>Email*</label>
            <input type='email' name='email' id='email' required={true} />
          </div>
        </div>
        <div className='bottom'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' required={true} />
          <label htmlFor='comment'>Your Message</label>
          <textarea
            name='comment'
            id='comment'
            cols='30'
            rows='10'
            required={true}
          />
        </div>
        <button type='button'>Post Comment</button>
      </form>
    </div>
  );
}
