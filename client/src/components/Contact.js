import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // TODO: Replace with actual API endpoint
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title"><span>Contact Me</span></div>
        <div className="text">
          <div className="topic">Have any project?</div>
          <p>Feel free to reach out for collaborations or freelance opportunities.</p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={form.email} onChange={handleChange} required />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" value={form.phone} onChange={handleChange} required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter Your Message" value={form.message} onChange={handleChange} required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 