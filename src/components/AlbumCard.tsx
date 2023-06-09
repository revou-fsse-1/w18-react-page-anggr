import { useState } from "react";

type AlbumCardProps = {
  name: string;
  album: string;
  imageUrl: string;
  youtubeUrl: string;
  description: string;
  onLike: (value: number) => void;
};

const AlbumCard = (props: AlbumCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (event: React.MouseEvent) => {
    event.preventDefault(); // prevent the link from being followed
    const value = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    props.onLike(value);
  };

  return (
    <div className="flex">
      <a
        href={props.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat w-full sm:w-64 h-64 sm:h-80 shadow-xl transition-transform transform group-hover:scale-105"
        style={{ backgroundImage: `url(${props.imageUrl})` }}>
        <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:opacity-50"></div>

        <div className="relative flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-8 h-full">
          <div className="absolute top-4 right-3">
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-0.5 rounded-full px-2 py-1 text-xs font-semibold ${
                isLiked ? "bg-green-500" : "bg-black"
              } text-white`}>
              {isLiked ? "Liked" : "Like"}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          </div>

          <div className="text-white absolute bottom-2 left-2 group-hover:bottom-20 transition-all duration-500 ease-in-out">
            <h3 className="text-sm sm:text-lg md:text-xl font-bold">
              {props.album}
            </h3>
            <p className="text-xs sm:text-sm">{props.name}</p>
          </div>

          <div className="text-white opacity-0 group-hover:opacity-100 absolute bottom-2 left-2 transition-all duration-500 ease-in-out">
            <p>{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AlbumCard;
