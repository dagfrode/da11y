import { createRoot } from "react-dom/client";
import App from "./App";

// Render your React component instead
//@ts-ignore
const root = createRoot(document.getElementById("sally"));
root.render(<App />);
