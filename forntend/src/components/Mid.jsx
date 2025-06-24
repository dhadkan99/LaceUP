import React from "react";

function Mid() {
  return (
    <section className="overflow-hidden relative w-screen h-screen">
      {/* Background Image */}
      <div>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/219/323/583/active-adult-athlete-body-wallpaper-preview.jpg"
          alt="An athlete tying their shoelaces"
          className="object-cover absolute w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 mx-auto max-w-2xl text-left text-[#F0EDEE]">
        <h1 className="mb-4 text-3xl font-bold tracking-wide text-white delay-100 sm:text-4xl md:text-5xl animate-slideInLeft">
          Lace Up with Confidence
        </h1>
        <p className="mb-8 text-base font-light font-extrabold text-white delay-300 sm:text-lg md:text-xl animate-slideInLeft">
          Style that speaks. Comfort that moves. Walk your journey with purpose.
        </p>
      </div>
    </section>
  );
}

export default Mid;
