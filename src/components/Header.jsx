// Import image and styles
import reactimg from '../assets/react-core-concepts.png';
import "./Header.css";

// Description options for dynamic text
const reactDescription = ['Fundamental', 'Crucial', 'Core'];

// Returns a random integer between 0 and max
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = genRandomInt(2);

  return (
    <header>
      <img src={reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[description]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
