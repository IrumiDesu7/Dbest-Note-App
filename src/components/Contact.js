import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    comment: '',
  });
  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [name]: value,
      };
    });
  }

  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form>
        <div className='top'>
          <div className='name-input'>
            <label htmlFor='name'>Name*</label>
            <input
              type='text'
              name='name'
              id='name'
              required={true}
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className='email-input'>
            <label htmlFor='email'>Email*</label>
            <input
              type='email'
              name='email'
              id='email'
              required={true}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className='bottom'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            required={true}
            onChange={handleChange}
            value={formData.title}
          />
          <label htmlFor='comment'>Your Message</label>
          <textarea
            name='comment'
            id='comment'
            cols='30'
            rows='10'
            required={true}
            onChange={handleChange}
            value={formData.comment}
          />
        </div>
        <button type='submit'>Post Comment</button>
      </form>
    </div>
  );
}
