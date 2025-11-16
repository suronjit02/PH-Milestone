import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center gap-5 bg-base-200 p-2 mt-5">
        <h1 className="text-white bg-secondary px-4 py-2 ">Latest</h1>

        <Marquee pauseOnHover={true} speed={60}>
          <p className="font-semibold">
            Officiis repudiandae exercitationem aperiam tempora assumenda
            impedit minus? Recusandae tempore tempora quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio dicta deleniti error iure alias veniam totam iusto sed, velit tempore recusandae. Consequuntur ipsa itaque, mollitia id odit numquam quasi inventore!
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;