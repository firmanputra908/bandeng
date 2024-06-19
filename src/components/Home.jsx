import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen home bg-no-repeat bg-left md:bg-center flex items-center px-5 lg:px-[72px] ">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        {/* <h1 className="font-bold text-[16px] lg:text-[20px] text-white">
          Rasa Autentik Tiap Gigitan
        </h1> */}
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-white drop-shadow-[0_2.6px_1.9px_rgba(0,0,0,0.9)]">
        Nikmati Bandeng Bu Yem Semarang, Sensasi Rasa Tak Terlupakan...
        </h1>
        <p className="text-text text-[14px] lg:text-[18px] text-white drop-shadow-[0_2.6px_1.9px_rgba(0,0,0,0.9)]">
          Dibuat tanpa pengawet dan tanpa pewarna buatan
        </p>
        <div>
          <button className="py-2 px-8 bg-white rounded-full">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
