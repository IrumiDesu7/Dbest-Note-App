import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form>
        <div className='top'>
          <div className='name-input'>
            <label htmlFor='name'>Name*</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='email-input'>
            <label htmlFor='email'>Email*</label>
            <input type='email' name='email' id='email' />
          </div>
        </div>
        <div className='bottom'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' />
          <label htmlFor='comment'>Your Message</label>
          <textarea name='comment' id='comment' cols='30' rows='10' />
        </div>
        <button type='button'>Post Comment</button>
      </form>
    </div>
  );
}
