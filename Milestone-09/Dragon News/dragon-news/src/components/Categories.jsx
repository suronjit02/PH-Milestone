import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  // console.log(categoriesPromise);

  const categories = use(categoriesPromise);

  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>

      <div className="grid grid-cols-1 mt-3 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn bg-white border-0 hover:bg-base-200 font-semibold text-accent"}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
