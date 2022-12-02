import React from "react";

const TypeList = () => {
  return (
    <div className="bg-slate-100 border-b-2  flex flex-col">
      {/* 1 */}
      <div className="card px-10 py-5 border-b-2">
        <p className="font-bold my-1">Merchant Type</p>
        <p>
          {" "}
          <input
            type="radio"
            name="os"
            id="Os"
            className="my-3"
            value="Official Store"
          />{" "}
          Official Store
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="rs"
            id="Os"
            className="my-3"
            value="Recommeded Merchant"
          />{" "}
          Recommeded Merchant
        </p>
        <p>
          <input
            type="radio"
            name="tm"
            id="Os"
            className="my-3"
            value="Top Merchant"
          />{" "}
          Top Merchant
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="ds"
            id="Os"
            className="my-3"
            value="Dropshiper"
          />{" "}
          Dropshiper
        </p>
      </div>
      {/* 2 */}
      <div className="card px-10 py-5 border-b-2">
        <p className="font-bold my-1">Location</p>
        <p>
          {" "}
          <input
            type="radio"
            name="dki"
            id="dki"
            className="my-3"
            value="DKI Jakarta"
          />{" "}
          DKI Jakarta
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="yk"
            id="yk"
            className="my-3"
            value="Yogyakarta"
          />{" "}
          Yogyakarta
        </p>
        <p>
          <input
            type="radio"
            name="sby"
            id="sby"
            className="my-3"
            value="Surabaya"
          />{" "}
          Surabaya
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="jdk"
            id="jdk"
            className="my-3"
            value="Jabodetabek"
          />{" "}
          Jabodetabek
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="bdg"
            id="bdg"
            className="my-3"
            value="Bandung"
          />{" "}
          Bandung
        </p>
        <p>
          {" "}
          <input
            type="radio"
            name="srt"
            id="srt"
            className="my-3"
            value="Surakarta"
          />{" "}
          Surakarta
        </p>
      </div>
      <div className="card px-10 py-5 border-b-2">
        
      </div>
    </div>
  );
};

export default TypeList;
