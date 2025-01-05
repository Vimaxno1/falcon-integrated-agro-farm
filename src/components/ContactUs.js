import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us" id="contact">
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Address: along Umuawulu Road, Akaezi-Ezeoye Nibo</p>
        <p>Phone: +234 806 132 8798</p>
        <p>Email: falconfarms.ng@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
