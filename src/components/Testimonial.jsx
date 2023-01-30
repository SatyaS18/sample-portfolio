import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Shikhar Gupta"}
          feedback={"Proficient work, would like to collaborate"}
        />
        <TestimonialCard
          name={"Sanket Diwate"}
          feedback={"Amazing work, awesome developer"}
        />
        <TestimonialCard
          name={"Varun Tiwari"}
          feedback={"Very good portfolio, amazing projects"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="alt"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
