import { createRoot } from "react-dom/client";
import AlbumList from "./components/AlbumList";

const App = () => {
  // const topAlbum = AlbumLibrary[0];
  return (
    <div>
      <h1>Albumin</h1>
      <AlbumList />
    </div>
  );
};
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
