import React from "react";
import { useLoaderData } from "react-router-dom";
import PhotosCard from "../PhotosCard/PhotosCard";

const Photos = () => {
  const photos = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-8">
      {photos.map((photo) => (
        <PhotosCard photo={photo} key={photo.id}></PhotosCard>
      ))}
    </div>
  );
};

export default Photos;
