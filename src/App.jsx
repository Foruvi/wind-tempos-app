import { useState, useRef } from "react";
import sweetTimeAudio from "./assets/sweettime.mp3";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const audioRef = useRef(null);
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      title: "Train |or| Fail",
      image: "/sun1.jpg",
      description: "A game I'm currently designing."
    },
    {
      title: "UI / UX",
      image: "/sun2.jpg",
      description: "I like to create things."
    },
    {
      title: "Digital Media",
      image: "/sun3.jpg",
      description: "I make music."
    }
  ];

  const createFlower = (e) => {
    setFlowers([
      ...flowers,
      {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }
    ]);
  };

  if (!started) {
    return (
      <div className="intro">
        <div className="flower-intro">
          <img src="/rose.gif" alt="Blooming Rose" className="rose-gif" />
        </div>
        <h1>wind tempos</h1>
        <p className="intro-subtitle">everything we need is already here</p>
        <button
          className="enter"
          onClick={() => {
            audioRef.current?.play().catch(err => console.log("Audio play blocked/failed:", err));
            setStarted(true);
          }}
        >
          enter portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="portfolio" onClick={createFlower}>
      {/* UPDATE: The src property now uses your imported sweetTimeAudio variable */}
      <audio ref={audioRef} loop src={sweetTimeAudio} type="audio/mpeg" />

      <video autoPlay muted loop className="video">
        <source src="/sunflowermatt.mp4" type="video/mp4" />
      </video>

      <div className="dark-overlay" />

      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower-click"
          style={{ left: flower.x, top: flower.y }}
        >
          ✿
        </div>
      ))}

      <div className="floating top">wind tempos</div>
      <div className="floating left">the world is lucky to be your home</div>
      <div className="floating right">trying to feel alive</div>

      <img src="/outside.jpg" alt="" className="flower-decoration flower1" />
      <img src="/outside2.jpg" alt="" className="flower-decoration flower2" />
      <img src="/outside3.jpg" alt="" className="flower-decoration flower3" />

      <section className="hero">
        <img src="/mattpicdog.jpg" alt="" className="photo" />
        <img src="/MattTapes.jpg" alt="" className="photo" />
        <div className="info">
          <h1>matt kevin</h1>
          <p>ui / ux designer</p>
          <p>digital media manager</p>
        </div>
      </section>

      <section className="about">
        <h2>about</h2>
        <p>i do art, code, sports, ride motorcycles, bicycles, play games and bake foods.</p>
      </section>

      <section className="projects">
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={project.title} className="project-container">
              <div
                className="project-item"
                onClick={() => setOpenProject(openProject === index ? null : index)}
              >
                <img src={project.image} alt={project.title} className="project-thumb" />
                <h3>{project.title}</h3>
              </div>
              <div className={`drawer ${openProject === index ? "open" : ""}`}>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="footer">
        <div className="footer-left">
          <img src="/profile.jpg" alt="" className="profile" />
          <h2>thank you for visiting...</h2>
        </div>
        <div className="footer-right">
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            @foruvi
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
