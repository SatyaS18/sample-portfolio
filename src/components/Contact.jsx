import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section>
        <form action="">
          <h2>Contact Me</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Message" required />

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
