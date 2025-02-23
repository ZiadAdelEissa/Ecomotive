import React, { useState } from "react";
import axios from "axios";
export default function Dash() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState();
  const upload = () => {
    const frormData = new FormData();
    frormData.append("model", model);
    frormData.append("year", year);
    frormData.append("file", image);
    axios
      .post("http://localhost:8081/create", frormData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="adds flex flex-col w-full h-full bg-slate-500 ">
      <div className="flex flex-col gap-5 justify-around">
        <label>Car model</label>
        <input
          type="text"
          className=" bg-black text-white"
          placeholder="Enter model"
          autoComplete="off"
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 justify-around">
        <label>model year</label>
        <input
          type="text"
          className=" bg-black text-white"
          placeholder="Enter model"
          autoComplete="off"
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 justify-around">
        <label>add image</label>
        <input
          type="file"
          className=" bg-black text-white"
          placeholder="Enter model"
          autoComplete="off"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="flex flex-col gap-5 justify-around">
        <button
          className=" w-full text-white bg-black hover:bg-slate-200"
          onClick={upload}
        >
          Add to dashboard
        </button>
      </div>
    </div>
  );
}
