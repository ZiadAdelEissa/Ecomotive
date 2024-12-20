import React from "react";
import headimg from "../imgs/head.jpg";
import headv from "../imgs/headv.mp4";
export default function Header() {
  return (
    <div className="head flex justify-center items-center w-full h-fit relative z-10">
      <video
        className=" object-cover w-full h-full max-md:h-full max-md:w-full"
        src={headv}
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        poster={headimg}
        alt="background-video"
        style={{ objectFit: "cover" }}
        preload="false"
        autoPlay
        type="video/mp4"
      />
      {/* <img src={headimg} alt='background-img' className='head-img object-cover w-full h-[400px]'/> */}
      <div className="head-text flex flex-col  justify-center items-center  absolute z-30 w-[350px] h-fit p-2  ">
        <h1 className="text-4xl font-bold ">
          Eco<span className="text-orange-600">Motive</span>
        </h1>
        <h2 className="text-xl text-white">The Place</h2>
        <p className="text-lg text-slate-400">
          That brings back the luster of your car
        </p>
      </div>
    </div>
  );
}
