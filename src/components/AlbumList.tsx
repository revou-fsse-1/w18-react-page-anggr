import AlbumCard from "./AlbumCard";
import { AlbumLibrary } from "../data/AlbumLibrary";

type AlbumListProps = {
  onLike: (value: number) => void;
  searchTerm: string;
};

const AlbumList = (props: AlbumListProps) => {
  const filteredAlbums = AlbumLibrary.filter(
    (album) =>
      album.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
      album.album.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:grid-row-5 gap-4 sm:gap-6 lg:gap-6 md:gap-y-8">
      {filteredAlbums.length > 0 ? (
        filteredAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            name={album.name}
            album={album.album}
            youtubeUrl={album.youtubeUrl}
            description={album.description}
            imageUrl={album.imageUrl}
            onLike={props.onLike}
          />
        ))
      ) : (
        <p>No Albums Found</p>
      )}
    </div>
  );
};

export default AlbumList;
