import React from "react";
import { Link } from "react-router-dom";

function SingleNews({news}) {
  
    const {_id, title, thumbnail_url, details} = news

  return (
    <div className="mb-7">
      <div className="card card-compact  bg-base-100 shadow-xl">
      <h2 className="card-title">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt="Shoes"
            className="w-full h-[300px] "
          />
        </figure>
        <div className="card-body">
          {
            details.length>200 ? <p>{details.slice(0, 200)}... <Link to={`/news/${_id}`} className="text-orange-600 font-medium">Read More</Link></p> : <p>{details}</p>
          }
         

        </div>
      </div>
    </div>
  );
}

export default SingleNews;
