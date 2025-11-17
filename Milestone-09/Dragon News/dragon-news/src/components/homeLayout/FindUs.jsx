import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold">Find Us</h2>

        <div className="join join-vertical w-full mt-2 ">
          <button className="btn join-item text-blue-500 bg-white justify-start">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn join-item bg-white justify-start">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn join-item text-red-700 bg-white justify-start">
            <BsInstagram />
            Instagram
          </button>
        </div>
      </div>
    );
};

export default FindUs;