import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, thumbnail_url, details, author, total_view, rating, } =
    news;

  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="card rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center rounded-t-md p-5 justify-between bg-base-200">
        <div className="flex gap-3 items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className=" p-4">
        {/* Title */}
        <h2 className="text-xl font-bold mt-2">{title}</h2>

        {/* Thumbnail */}
        <figure className="mt-4">
          <img src={thumbnail_url} alt={title} className="rounded-lg" />
        </figure>

        {/* Details */}
        <p className="mt-4 text-gray-500">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 cursor-pointer font-semibold">
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="border-t mt-4 pt-4 pb-4 flex justify-between items-center text-gray-700">
          <div className="flex items-center gap-2 text-orange-400">
            {/* rating.number, static 5 star */}
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-1 font-semibold">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye className="text-xl" />
            <span className="font-semibold">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
