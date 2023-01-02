import React, { useState } from "react";
import mekar from "../assets/mekar.png";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const RSVPFooter = () => {
  const [rsvp, setRSVP] = useState();
  const [ucapanForm, setucapanForm] = useState();
  const [ucapan, setUcapan] = useState([]);

  async function getWeddingOwner() {
    const collectionRef = query(
      collection(db, "undangan"),
      where("pemilik_undangan", "==", "In'am Attaqi")
    );
    const collectionSnapShot = await getDocs(collectionRef);
    const undanganArrId = [];
    collectionSnapShot.forEach((item) => {
      undanganArrId.push(item.id);
    });
    const ucapanRef = collection(db, "undangan", undanganArrId[0], "ucapan");
    const ucapanSnapShot = await getDocs(ucapanRef);
    ucapanSnapShot.forEach((item) => {
      setUcapan((ucapan) => [...ucapan, item.data()]);
    });
  }
  function handleChangeRSVP(e) {
    setRSVP({
      ...rsvp,
      [e.target.name]: e.target.value,
    });
  }
  function handleFormUcapan(e) {
    setucapanForm({
      ...ucapanForm,
      [e.target.name]: e.target.value,
    });
  }
  function handleRSVP(e) {
    e.preventDefault();
    console.log(rsvp);
    window.location.href = `https://wa.me/+6285879610915?text=Pesan dari ${rsvp.rsvp_name}: %0AHai, aku bakalan hadir di pernikahanmu%0APesan: ${rsvp.rsvp_confirmation}`;
  }
  async function handlePostUcapan(e) {
    e.preventDefault();
    const collectionRef = query(
      collection(db, "undangan"),
      where("pemilik_undangan", "==", "In'am Attaqi")
    );
    const collectionSnapShot = await getDocs(collectionRef);
    const undanganArrId = [];
    collectionSnapShot.forEach((item) => {
      undanganArrId.push(item.id);
    });
    const docRef = await addDoc(
      collection(db, "undangan", undanganArrId[0], "ucapan"),
      ucapanForm
    );
    const ucapanRef = collection(db, "undangan", undanganArrId[0], "ucapan");
    const ucapanSnapShot = await getDocs(ucapanRef);
    ucapanSnapShot.forEach((item) => {
      setUcapan((ucapan) => [...ucapan, item.data()]);
    });
    console.log("Document written with ID: ", docRef.id);
  }
  useEffect(() => {
    try {
      getWeddingOwner();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const uniqueUcapan = [
    ...new Map(ucapan.map((item) => [item.nama_pengirim, item])).values(),
  ];

  // Sliders
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="wrapper mt-[200px]">
      {" "}
      <section className="RSVP w-screen bg-background bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto p-24 md:p-24 sm:p-3 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24">
            <div className="comment">
                <Slider {...settings}>
                  {uniqueUcapan.map((item, index) => (
                    <div
                      key={index}
                      className="card my-5 p-10 bg-white max-w-[100px] py-10 min-w-full border-2 rounded-lg mx-auto"
                    >
                      <p className="salam text-xl ??? text-justify font-poppins">
                        “{item.konten_ucapan}
                      </p>
                      <div className="text-group mt-3">
                        <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">
                          {item.nama_pengirim}
                        </p>
                        <p className="center-title text-[#888] px-[0px!important] py-[0px!important] font-poppins">
                          {item.alamat}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
            </div>

            {/* Send */}
            <div className="send">
              <form className="p-16 sm:p-4 rounded-lg border-2 bg-white">
                <div className="send-text">
                  <h1 className="title-text text-center text-black text-5xl my-5 font-bold">
                    RSVP
                  </h1>
                  <p className="leads text-center max-w-sm mx-auto font-montserrat">
                    Lorem ipsum dolor sit amet consectetur. Porttitor
                    ullamcorper eget quam libero
                  </p>
                </div>
                <div className="input-list mt-5">
                  <input
                    type="text"
                    className="w-full border p-5"
                    placeholder="Nama"
                    name="rsvp_name"
                    onChange={handleChangeRSVP}
                  />
                  <input
                    type="text"
                    className="w-full border p-5"
                    placeholder="Isikan Konfirmasi Daftar Kehadiran"
                    name="rsvp_confirmation"
                    onChange={handleChangeRSVP}
                  />
                  <center>
                    <button
                      onClick={handleRSVP}
                      className="btn px-10 py-3 bg-black text-white rounded-full mt-5"
                    >
                      Konfirmasi via WA
                    </button>
                  </center>
                  <div className="group-flowers flex justify-center relative my-16">
                    <div className="border border-[#888] w-2/4 mx-auto z-0 relative"></div>
                    <img
                      src={mekar}
                      alt=""
                      className="absolute z-10 -mt-10 w-2/12"
                    />
                  </div>
                  {/* ucapan */}
                  <div className="ucapan">
                    <h1 className="title text-center font-montserrat text-4xl my-5 font-bold">
                      Ucapan & Doa
                    </h1>
                    <div className="leads max-w-sm mx-auto text-center font-montserrat">
                      Lorem ipsum dolor sit amet consectetur. Porttitor
                      ullamcorper eget quam libero{" "}
                    </div>
                    <div className="input-list mt-5">
                      <input
                        type="text"
                        className="w-full border p-5"
                        placeholder="Nama"
                        name="nama_pengirim"
                        onChange={handleFormUcapan}
                      />
                      <input
                        type="text"
                        className="w-full border p-5"
                        placeholder="Ucapan & Doa"
                        name="konten_ucapan"
                        onChange={handleFormUcapan}
                      />
                      <center>
                        <button
                          onClick={handlePostUcapan}
                          className="btn px-10 py-3 bg-black text-white rounded-full mt-5"
                        >
                          Kirim Ucapan
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="p-24 md:p-24 sm:p-7 w-screen bg-[#1E1E1E]">
        <p className="leads text-white text-center text-2xl md:text-2xl sm:text-xl font-bold font-montserrat">
          Kami Yang Berbahagia
        </p>
        <h1 className="title-texts text-center text-white text-7xl md:text-6xl sm:text-5xl my-8 font-marck">
          In'am Attaqi <div className="w- sm:w-52 mx-auto">& </div>
          Siti Sumiyati Nur
        </h1>
        <p className="leads text-center text-white font-montserrat text-2xl md:text-2xl sm:text-xl font-bold">
          Sekeluarga
        </p>
      </footer>
    </div>
  );
};

export default RSVPFooter;
