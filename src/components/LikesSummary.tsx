
type LikesSummaryProps = {
  totalLikes: number;
};

const LikesSummary = (props: LikesSummaryProps) => {
  const generateMessage = () => {
    if (props.totalLikes === 0) {
      return (
        <div className="flex justify-center items-center  mb-8 max-w-full">
          <div
            id="toast-default"
            className="flex items-center justify-center  w-full max-w-xs p-5 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div className="no-likes ml-3 text-sm font-bold">
              You have no liked albums.
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="flex justify-center items-center mb-8 max-w-full">
        <div
          id="toast-default"
          className="flex justify-center items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-7 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <div className=" has-likes  ml-3 text-sm font-bold">
            You have liked {props.totalLikes} albums.
          </div>
        </div>
      </div>
    );
  };

  return generateMessage();
};

export default LikesSummary;

