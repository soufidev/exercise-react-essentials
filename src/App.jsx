// Import top-level components
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/Core-concepts.jsx";
import Exampels from "./components/Example.jsx";

function App() {
  return (
    <div>
      {/* App header */}
      <Header />

      <main>
        {/* Section showing core React concepts */}
        <CoreConcepts />

        {/* Section with practical examples */}
        <Exampels />
      </main>
    </div>
  );
}

export default App;
