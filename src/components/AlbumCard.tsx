type AlbumCardProps = {
  name: string;
  album: string;
  imageUrl: string;
};

const AlbumCard = (props: AlbumCardProps) => {
  return (
    <div>
      <img src={props.imageUrl} alt="Album" height="200px" />
      <h2>{props.album}</h2>
      <h3>{props.name}</h3>
    </div>
  );
};

export default AlbumCard;
