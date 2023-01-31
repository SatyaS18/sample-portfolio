import React from "react";
import { useState } from "react";
import vg from "../assets/vg.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = () => {};
  return (
    <div id="contact">
      <section>
        <form action="" onSubmit={submitHandler}>
          <h2>Contact Me</h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />

          <button type="submit">Send</button>
        </form>
      </section>

      <aside>
        <img src={vg} alt="graphics" />
      </aside>
    </div>
  );
};

export default Contact;
