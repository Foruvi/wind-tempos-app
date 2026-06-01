import { useState } from "react";
import Flower from "./Flower";

function Portfolio() {

  const [flowers, setFlowers] = useState([]);

  const handleClick = (e) => {

    setFlowers([
      ...flowers,
      {
        x: e.clientX,
        y: e.clientY
      }
    ]);
  };

  return (
    <div className="portfolio" onClick={handleClick}>

      {/* PUT YOUR BACKGROUND VIDEO HERE */}

      <video
        autoPlay
        muted
        loop
        className="video-bg"
      >
        <source
          src="/video/background.mp4"
          type="video/mp4"
        />
      </video>

      {/* FLOWERS */}

      {flowers.map((flower, index) => (
        <Flower
          key={index}
          x={flower.x}
          y={flower.y}
        />
      ))}

      <div className="overlay" />

      <section className="hero">

        {/* HERO IMAGE 1 */}

        <img
          src="/images/hero1.jpg"
          alt=""
          className="hero-img"
        />

        {/* HERO IMAGE 2 */}

        <img
          src="/images/hero2.jpg"
          alt=""
          className="hero-img"
        />

        <div className="hero-text">

          <h1>
            matt kevin
          </h1>

          <p>
            trying to feel alive
          </p>

        </div>

      </section>

      {/* FLOATING PORTER STYLE TEXT */}

      <div className="floating-text one">
        wind tempos
      </div>

      <div className="floating-text two">
        the world is lucky to be your home
      </div>

      <div className="floating-text three">
        everything we need is already here
      </div>

      {/* PROJECTS */}

      <section className="projects">

        <div className="project-card">
          {/* TRAIN OR FAIL IMAGE */}
          <h2>Train |or| Fail</h2>
        </div>

        <div className="project-card">
          {/* ADD PROJECT IMAGE */}
          <h2>UI / UX</h2>
        </div>

        <div className="project-card">
          {/* ADD PROJECT IMAGE */}
          <h2>Digital Media</h2>
        </div>

      </section>

      {/* PROFILE */}

      <section className="footer">

        {/* PROFILE PHOTO */}

        <img
          src="/images/profile.jpg"
          alt=""
          className="profile"
        />

        <h2>
          thank you for visiting...
        </h2>

      </section>

    </div>
  );
}

export default Portfolio;