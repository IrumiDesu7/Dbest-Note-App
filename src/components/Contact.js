import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form>
        <label htmlFor='name'>Name*</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>Email*</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='title' />
        <label htmlFor='comment'>Your Message</label>
        <textarea name='comment' id='comment' cols='30' rows='10' />
      </form>
    </div>
  );
}
