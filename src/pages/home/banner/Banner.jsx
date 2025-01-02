import Lottie from "lottie-react";
import React from "react";
import bannerLottie from "../../../assets/lottie/bannerLottie.json";


const Banner = () => {
  return (
    <div className="hero bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={bannerLottie}></Lottie>
        <div>
          <h1 className="text-3xl md:text-5xl text-cyan-600 font-bold">
            Empowering Students Through Collaborative Assignments
          </h1>
          <p className="text-sm md:text-base text-gray-600 py-6">
            Turn studying into a collaborative adventure. Work on assignments
            together, provide feedback, and watch your knowledge flourish with
            every completed task
          </p>
          <button className="btn btn-outline">View Contribution</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
