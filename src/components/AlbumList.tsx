
import AlbumCard from "./AlbumCard";
import { AlbumLibrary } from "../data/AlbumsLibrary";

const AlbumList = () => {
  return (
    <div>
      {AlbumLibrary.map((album) => (
        <AlbumCard
          key={album.id}
          name={album.name}
          album={album.album}
          imageUrl={album.imageUrl}
        />
      ))}
    </div>
  );
};

export default AlbumList;
