// Import dependencies and components
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Handle tab button click
  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  // Render selected example content
  let tabContent = <p>Please choose a topic</p>;
  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];
    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton isselected={selectedTopic === "components"} onClick={() => handleClick("components")}>
          Components
        </TabButton>
        <TabButton isselected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>
          JSX
        </TabButton>
        <TabButton isselected={selectedTopic === "props"} onClick={() => handleClick("props")}>
          Props
        </TabButton>
        <TabButton isselected={selectedTopic === "state"} onClick={() => handleClick("state")}>
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
