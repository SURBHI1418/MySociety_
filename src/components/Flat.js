import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";



const Flat = memo(({ room }) => {
  const { state, city, locality,  houseId, image_url, rent } = room;
  console.log(room,"Flat");
  return (
    <article className="room">
      <div className="img-container">
      <img
        src={"https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"}
        
        alt=""
        height={200}
        width={200}
        />
        <div className="price-top">
          <h6>Rs {rent}</h6>
          <p>Starting Price</p>
        </div>
        <Link to={`/rooms/${houseId}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{`${state} ${city} ${locality}`}</p>
    </article>
  );
});


export default Flat;
