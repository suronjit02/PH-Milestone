import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    
    const { details } = news;
    // console.log(news, details);

  return (
    <div>
      <h1 className="font-semibold">Dragon News</h1>

      <div className="card bg-base-100 shadow-xl p-5 ">
        <div className="card-body">
          {/* Cover Image */}
          <figure>
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full h-100 rounded-md object-cover"
            />
          </figure>
          {/* Title */}
          <h2 className="card-title text-[1.5rem] my-4">{news.title}</h2>

          {/* Details */}
          <p className="text-gray-700 text-[1.2rem] line-clamp-5">
            {news.details}
          </p>

          {/* Button */}
          <div className="card-actions mt-5">
            <Link to={`/category/${news.category_id}`} className="btn btn-secondary  ">
              <MdOutlineArrowBack />
              All News in This Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
