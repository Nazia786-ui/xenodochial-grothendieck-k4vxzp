import React from "react";
import "./comp.css";

function Restcard(props) {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="restcard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4> {avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
}

export default Restcard;
