// Import React DOM client for rendering
import ReactDOM from "react-dom/client";

// Import main App component and global styles
import App from "./App.jsx";
import "./index.css";

// Get the root DOM element
const entryPoint = document.getElementById("root");

// Mount the React app into the root
ReactDOM.createRoot(entryPoint).render(<App />);
