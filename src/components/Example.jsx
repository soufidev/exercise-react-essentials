import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Exampels (){ 
    const [selectedTopik ,setSelectedTopik] = useState(0)
        let Tabtext = "Pelese choose a button"
        function  handleClick(selectedButton) {
            console.log(Tabtext);
            setSelectedTopik(selectedButton)
    
        Tabtext = selectedButton;
    }
    Tabtext = "Pelese choose a button"
    
    if(selectedTopik){
        Tabtext = <div id="tab-content">
    
            <h3>{EXAMPLES[selectedTopik].title}</h3>
            <p>{EXAMPLES[selectedTopik].description}</p>
            <pre>
                        <code>{EXAMPLES[selectedTopik].code}</code>
                    </pre>
        </div>
    }
    return (
    <Section id="examples" title = "Examples">
            <menu>
                <TabButton isselected={selectedTopik === "components"} onClick={() => {handleClick("components")}}>Components</TabButton>
                <TabButton isselected={selectedTopik === "jsx"} onClick={() => {handleClick("jsx")}}>JSX</TabButton>
                <TabButton isselected={selectedTopik === "props"} onClick={() => {handleClick("props")}}>Props</TabButton>
                <TabButton isselected={selectedTopik === "state"} onClick={() => {handleClick("state")}}>State</TabButton>
            </menu>
            {Tabtext}

        </Section>
        )
    }