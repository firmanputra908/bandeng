import React from "react";
import { apps, googlePlay, lokasi } from "../asset";

const Footer = () => {
  return (
    <div className="flex flex-col h-auto mb-9 md:flex-row justify-center gap-3 items-center px-5 lg:px-[72px">
      <div className="h-[400px] w-full md:flex-1">
        <img src={lokasi} alt="" className="w-full h-full " />
      </div>
      <div className="flex flex-col gap-3 md:flex-1">
        <h1 className="text-[16px] font-bold text-black">
          Temukan kami di :
          <div className="text-text text-[14px] mt-3 mb-3">
            <p>0896 1844 3450</p>
            <p>Jl. Tarupolo Tengah I 24</p>
          </div>
        </h1>
        <h1 className="text-2xl font-bold">Unduh aplikasi kami</h1>
        
        <div className="w-full h-[50px] lg:h-[70px] flex ">
          <img src={apps} alt="" className="w-[300px] h-full " />
          <img src={googlePlay} alt="" className="w-[300px] h-full " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
