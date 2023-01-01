import React from 'react'
import bg from "../assets/bg3.png";
import cw from "../assets/cw.png";
import cwk from "../assets/cwk.png";
import flower from "../assets/flower.png";

const Jumbotron = () => {
  return (
    <div className='wrapper'>
        <div className="jumbotron relative">
        <img src={bg} className="w-full" alt="background" />
      </div>
      {/* Card Mempelai */}
      <div className="container md:container sm:container relative z-10 -mt-52 md:-mt-52 sm:-mt-12 mx-auto">
        <div className="card w-4/6 md:w-8/12 sm:w-11/12 mx-auto border-2 bg-white p-16 md:p-10 sm:p-5 rounded-2xl shadow-md">
          <h1 className="text-title text-center font-poppins text-2xl">
            Mempelai
          </h1>
          <h1 className="text-title text-center font-poppins text-2xl">
            Pria dan Wanita
          </h1>
          <div className="img w-36 mx-auto">
            <img src={flower} alt="" className="text-center ml-5 " />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="description">
              <div className="flex justify-end items-center md:justify-end sm:justify-center">
                <div className="text-group">
                  <p className="top-title text-right font-marck text-3xl py-[5px!important]">
                    In'am Attaqi
                  </p>
                  <p className="center-title text-right py-[5px!important] text-[#888]">
                    Anak Putra dari
                  </p>
                  <p className="bottom-title  text-right py-[5px!important] text-[#888]">
                    Alm. Bapak Nahwan Ibu Rofiatun
                  </p>
                </div>
                <img
                  src={cw}
                  alt=""
                  className="border-2 border-[#555656] p-3 rounded-full md:max-h-[120px] sm:max-h-[90px]"
                />
              </div>
            </div>
            <div className="description">
              <div className="flex items-center justify-start md:justify-start sm:justify-center">
                <img
                  src={cwk}
                  alt=""
                  className="border-2 border-[#555656] p-3 rounded-full md:max-h-[120px] sm:max-h-[90px]"
                />
                <div className="text-group">
                  <p className="top-title font-marck text-3xl py-[5px!important]">
                    Siti Sumiyati Nur
                  </p>
                  <p className="center-title py-[5px!important] text-[#888]">
                    Anak Putri dari
                  </p>
                  <p className="bottom-tittle py-[5px!important] text-[#888] max-w-sm">
                    Bapak Sumaeri Ibu Kasmonah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron