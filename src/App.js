import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page</p>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Krish Arora</h1>
      <MyButton />
      <About />
    </div>
  );
}
