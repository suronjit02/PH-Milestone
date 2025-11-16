import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={ <h3>Loading...</h3> }>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
