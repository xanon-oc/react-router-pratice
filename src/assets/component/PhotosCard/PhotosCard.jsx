import React from "react";

const PhotosCard = ({ photo }) => {
  const { id, title, url } = photo;
  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-xs h-[500px] w-[450px] rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={url}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{id}</h2>
            <p className="dark:text-gray-100">{title}</p>
          </div>
          <button
            type="button"
            className="flex bg-purple-200 hover:duration-300 hover:bg-purple-600 hover:text-white items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotosCard;
