import React from "react";
import P from "../assets/P.png";
import carbon from "../assets/carbon_copy.png";
import BNI from "../assets/BNI.png";
import BRI from "../assets/BRI.png";
import Dana from "../assets/Dana.png";

const ProkesGift = () => {
  return (
    <div className="wrapper mt-[200px] ">
      <section id="prokes">
        <div className="container mx-auto">
          <div className="title-text flex justify-center items-end">
            <img src={P} alt="" />
            <p className="texts -ml-10 text-4xl font-poppins">rokes</p>
          </div>
          <p className="lead text-center mt-10 text-[#888] max-w-[70%] font-inter mx-auto">
            Tanpa mengurangi rasa hormat, dikarenakan masih dalam masa pandemi
            Covid-19, dan demi mematuhi protokol kesehatan ditatanan hidup baru.
            Demi kenyamanan bersama, kami memohon agar para tamu undangan yang
            hadir berkenan menerapkan protokol kesehatan.
          </p>
        </div>
      </section>

      <section id="gift" className="mt-24 w-screen h-full">
        <h1 className="title-text text-center font-[500] py-10 font-poppins text-5xl">
          Wedding Gift
        </h1>
        <p className="lead text-center mx-auto w-2/4 font-outfit">
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
          kado secara cashless dengan mengirim amplop digital secara transfer
          pada akun di bawah ini :
        </p>
        <div className="container mx-auto mt-16 p-5">
          <div className="card-list">
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items gap-10">
              <div className="card p-5 py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Transfer
                </h1>
                <img src={BNI} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
                <center>
                  <button className="button my-5 flex items-center bg-black text-white px-10 py-4 rounded-full">
                    <img src={carbon} alt="" className="mx-2" />
                    <p>Copy Nomor Rekening</p>
                  </button>
                </center>
              </div>
              <div className="card p-5 py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Transfer
                </h1>
                <img src={BRI} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
                <center>
                  <button className="button my-5 flex items-center bg-black text-white px-10 py-4 rounded-full">
                    <img src={carbon} alt="" className="mx-2" />
                    <p>Copy Nomor Rekening</p>
                  </button>
                </center>
              </div>
              <div className="card p-5 py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Dana
                </h1>
                <img src={Dana} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProkesGift;
