import React from "react";
import polishing from '../imgs/polishing.jpg';
import paintimg from'../imgs/paint.jpg';
import fiximg from'../imgs/fix.jpg';
import spareimg from '../imgs/spare.jfif';
export default function Preff() {
 
  return (
    <div className="work-sample flex flex-col items-center w-full h-full my-9 ">
        <h1 className="text-4xl font-bold text-orange-500">Our services</h1>
      <div className="work-item grid grid-cols-4 justify-items-center items-center max-md:grid max-md:grid-cols-2 max-sm:grid max-sm:grid-cols-1  w-full h-full ">
        <div className="card flex flex-col justify-around items-center p-4  w-[350px] h-[450px] ">
          <div className="card-img flex items-center w-[260px] h-[180px]">
           <img className="w-full h-full rounded-xl object-cover " src={polishing} alt="first-item"/>
          </div>
          <h1 className="text-2xl text-orange-500">Polishing</h1>
          <p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, omnis quaerat. Nostrum nemo id hic magni eos aut vel officiis?</p>
        </div>
        <div className="card flex flex-col justify-around items-center p-4  w-[350px] h-[450px]  ">
          <div className="card-img flex items-center w-[260px] h-[180px]">
           <img className="w-full h-full rounded-xl object-cover " src={paintimg} alt="first-item"/>
          </div>
          <h1 className="text-2xl text-orange-500">Repaint</h1>
          <p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, omnis quaerat. Nostrum nemo id hic magni eos aut vel officiis?</p>
        </div>
        <div className="card flex flex-col justify-around items-center p-4  w-[350px] h-[450px]  ">
          <div className="card-img flex items-center w-[260px] h-[180px]">
           <img className="w-full h-full rounded-xl object-cover " src={fiximg} alt="first-item"/>
          </div>
          <h1 className="text-2xl text-orange-500">Mechanical repair</h1>
          <p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, omnis quaerat. Nostrum nemo id hic magni eos aut vel officiis?</p>
        </div>
        <div className="card flex flex-col justify-around items-center p-4  w-[350px] h-[450px]  ">
          <div className="card-img flex items-center w-[260px] h-[180px]">
           <img className="w-full h-full rounded-xl object-cover " src={spareimg} alt="first-item"/>
          </div>
          <h1 className="text-2xl text-orange-500">Spare Parts</h1>
          <p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, omnis quaerat. Nostrum nemo id hic magni eos aut vel officiis?</p>
        </div>
      </div>
    </div>
  );
}
