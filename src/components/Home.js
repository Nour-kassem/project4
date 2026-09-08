import astronautImage from '../photos/astronaut.png';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-text">
        <span className="greeting">
          Welcome All In My Portfolio
        </span>
        <h1>Hi! I'm Nour Kassem,<br />
          <span>Frontend Developer</span>
        </h1>
        <p>Hello Everyone, I am gaining experience in Frontend Web Development</p>
        <button className="connect-text">Let's Connect<FaArrowRight /></button>
      </div>

      <div className="home-image">
        <div className="circle">
          <img src={astronautImage} />
        </div>
      </div>

    </section>
  );
}

export default Home;