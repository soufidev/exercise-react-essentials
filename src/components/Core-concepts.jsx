// Import concept data and reusable component
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {/* Render each concept as a CoreConcept component */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
