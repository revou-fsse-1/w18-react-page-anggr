import { createRoot } from "react-dom/client";
import Album from './Album'

const App = () => {
  return (
    <div>
      <h1>Musikimia</h1>
      <Album/>
    </div>
  );
};
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
