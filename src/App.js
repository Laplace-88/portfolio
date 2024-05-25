import './App.css';

function Header() {
  return (
    <nav>
    <button className="button" id="github" onClick={openGithub}>Github</button>
    <button className="button" id="linkedin" onClick={openLinkedIn}>LinkedIn</button>
    <button className="button" id="contact" onClick={contactForm}>Contact Me</button>
    <button className="button" id="resume" onClick={Resume}>Resume</button>
  </nav>
  );
}

const openGithub = () => {
    window.open("https://github.com/laplace-88/"); 
}

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/krish-a-105402135/");
}

const contactForm = () => {
  window.open("mailto:krisharora088@icloud.com");
}

const Resume = () => {
  window.open("https://drive.google.com/file/d/1Jfu6u3yndMwc0e4YVxCpaVeAkv4e6Prj/view?usp=sharing");
}

function Hello() {
  return (
    <div>
      <h1 className="howdy">Howdy! My name is</h1>
    </div>
  );
}

function Title() {
  return (
    <div><h1 className="nameHeader">
        <div class="hero-container">
    <div class="environment"></div>
    <span className="code" aria-hidden="true">
      &lt;/&gt;
        </span>
    <h2 class="hero glitch layers" data-text="Krish Arora"><span>Krish Arora</span></h2>
  </div></h1></div>
  );
}

function About() {
  return (
    <div className="aboutMe">
      <h1 className="howdy para">I'm a third year student at the University of British Columbia, Vancouver in BSc Mathematics. My niche is front-end development but I'm still exploring other fields and am always open to learning new things.</h1>
    </div>
  );
}

function ProjectsHeader() {
  return (
    <div>
      <h1 className="projects">Projects</h1>
    </div>
  );
}

function ProjectCard1() {
  return (
  <div className="card">
    <div className="card__top">
    <img src="https://i.imgur.com/0vVfqby.png" alt="POP.GG Home Page"></img>
       <div className="profile__photo">
      <img src="https://i.imgur.com/v6fuPxQ.png" alt="ProfilePic"></img>
    </div>
    </div>
   
    <div className="card__content">
      <h2>POP.GG</h2>
      <p>POP.GG is a tool for game developers which enables them to understand their audience better. It calculates various metrics based on in-game data of an individual player and assigns each player a score. It then distributes tokens to players proportional to the score, allowing them to vote on proposed in-game features using a DAO-based system.</p>
      <button className="button" onClick={Popgg}>Read More</button>
    </div>
  </div>
  )
}

const Popgg = () => {
  window.open("https://github.com/coolncrazee/popgg", "_blank");
}

function Footer() {
  return (
    <footer>
      <p>Author: Krish Arora</p>
    </footer>
  );
}

export default function MyApp() {
  return (
    <div>
      <div className="section-1">
      <Header />
      <Hello />
      <Title />
      <About />
      <div className="spacer"></div>
      </div>

      <div className="section-2">
      <div className="gradient"></div>
      <ProjectsHeader />
      <ProjectCard1 />
      <div className="gradient"></div>
      <Footer />
    </div>
    </div>
  );
}