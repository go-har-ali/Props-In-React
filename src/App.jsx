import CoreImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const Desc = ["Fundamentals", "Core", "Essentials"];

function GenRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const Description = Desc[GenRandomNum(2)];

  return (
    <header>
      <img src={CoreImage} alt="" />
      <h1>React Essentials</h1>
      <p>{Description} React app having all the basic features</p>
    </header>
  );
}

function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
