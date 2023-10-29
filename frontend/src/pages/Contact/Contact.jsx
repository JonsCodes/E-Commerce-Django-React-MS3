import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Jon "The Don" Dillinger',
    email: 'don@corleone.com',
    message: 'You\'ve come to the right place. What\'s on your mind, capo?',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle the form submission, such as sending the data to a server or displaying a success message.
  };

  return (
    <main>
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <hr/>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className='SubBtn'>Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
