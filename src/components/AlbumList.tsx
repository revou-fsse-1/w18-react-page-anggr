
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
    <div className="flex justify-center items-start flex-wrap gap-8">
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
