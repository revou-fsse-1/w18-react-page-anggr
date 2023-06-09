// src/main.tsx
import { useState } from "react";
import { createRoot } from "react-dom/client";
import AlbumList from "./components/AlbumList";
import LikesSummary from "./components/LikesSummary";
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import RegisterModal from "./components/RegisterModal";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLike = (value: number) => {
    setTotalLikes(totalLikes + value);
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <div>
      <Header />
      <LikesSummary totalLikes={totalLikes} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <AlbumList onLike={handleLike} searchTerm={searchTerm} />
      <RegisterModal onRegister={() => setIsRegistered(true)} />
      {isRegistered && <RegistrationConfirmation />}
    </div>
  );
};

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
