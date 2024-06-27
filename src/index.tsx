import { createRoot } from "react-dom/client";
import App from "./App";

// Clear the existing HTML content
const el = document.createElement("div");
el.id = "da11y";
document.body.append(el);

// Render your React component instead
//@ts-ignore
const root = createRoot(document.getElementById("da11y"));
root.render(<App key={"test"} />);
