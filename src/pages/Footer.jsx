import React from "react";

function Footer() {
  return (
    <div
      className="absolute z-50 cursor-pointer text-white font-semibold bg-black text-lg w-full flex justify-center items-center overflow-hidden"
      onClick={() =>
        window.open("https://www.linkedin.com/in/enessirn/", "_blank")
      }
    >
      <div className=" animate-bounce w-full text-center bg-black text-white pointer-events-none">I AM ENES ŞİRİN | CLICK TO MY LINKEDIN ADDRESS</div>
    </div>
  );
}

export default Footer;
