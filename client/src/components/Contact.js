import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Owner notification
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus('All fields are required.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('Invalid email format.');
      return false;
    }

    // allow leading 0 or country codes, 7-15 digits
    const phoneRegex = /^[+]?[0-9]{7,15}$/;
    if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
      setStatus('Please enter a valid phone number.');
      return false;
    }

    return true;
  };

  const showStatus = (message) => {
    setStatus(message);
    setTimeout(() => setStatus(''), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    setStatus('Sending your message...');
    setIsSubmitting(true);

    try {
      // Ensure EmailJS is configured
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        setIsSubmitting(false);
        return showStatus('Email service is not configured. Please set REACT_APP_EMAILJS_* in .env');
      }
      // Send to you (Contact Us template)
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_name: 'Dhamodraprasath CM',
          reply_to: form.email,
        },
        PUBLIC_KEY
      );

      if (result && result.text === 'OK') {
        showStatus('Message sent successfully! I will get back to you soon.');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        showStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      let errorMessage = 'Failed to send message. ';
      if (error && typeof error.status === 'number') {
        if (error.status === 401) errorMessage = 'EmailJS authentication failed. Please check your public key.';
        else if (error.status === 429) errorMessage = 'Too many requests. Please wait a moment and try again.';
        else if (error.status >= 500) errorMessage = 'Server error. Please try again later.';
      }
      showStatus(errorMessage);
    }
    setIsSubmitting(false);
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