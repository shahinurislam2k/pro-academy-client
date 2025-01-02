import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="my-8 md:my-16 space-y-8">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Explore Our Features
        </h1>
        <p className="text-sm md:text-base text-center">
          Unlock the power of collaboration, grading, and seamless assignment
          management.
        </p>
      </div>
      <div className="border-2 border-yellow-400 h-96"></div>
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
          Ready to Get Started?
        </h1>
        <p className="text-sm md:text-base text-center">
          Experience the best tools for collaborative learning and assignment
          management.
        </p>
        <div className="flex justify-center mt-4">
          <Link>
            <button className="btn rounded-xl btn-info">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
