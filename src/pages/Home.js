import React from "react";

const Home = () => {
  return (
    <div className="container">

      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        className="profile-img"
      />

      <h1>Varun Reddy Bandi</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Computer Science student at Mahindra University with a strong
          interest in Machine Learning, AI, and full-stack development.
        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>
          Machine Learning, AI, Data Science, NLP, Cybersecurity
        </p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <ul>
          <li><b>Name:</b> Varun Reddy Bandi</li>
          <li><b>Phone:</b> +91 8008369189</li>
          <li><b>Email:</b> varunreddy0189@gmail.com</li>
          <li><b>College Email:</b> se23ucse182@mahindrauniversity.edu.in</li>
          <li><b>Skills:</b> Python, C++, Java, ML, React</li>
        </ul>
      </section>

    </div>
  );
};

export default Home;