import React from "react";

const VideoCard = ({ image, hidden }) => {
  return (
    <div className={`cursor-pointer ${hidden}`}>
      <img
        src={image}
        className="rounded-4xl w-full h-38 object-cover"
        alt="video"
      />
    </div>
  );
};

export default VideoCard;
