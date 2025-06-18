import React from "react";

function Hero() {
  return (
    <div className="overflow-hidden relative w-screen h-screen bg-black">
      {/* Background Image Fade-In */}
      <img
        src="https://i.pinimg.com/736x/97/f2/46/97f24658d691af16e8edae13c8478417.jpg"
        alt="Nike shoe"
        className="object-cover absolute inset-0 w-full h-full opacity-80 animate-fadeIn"
      />

      {/* Overlay content with fade and slide animations */}
      <div className="flex relative z-10 flex-col justify-center items-center px-4 mx-auto max-w-lg h-full text-center text-F0EDEE">
        <h1 className="mb-4 text-5xl font-bold tracking-wide delay-100 animate-slideDown">
          Step Into Excellence
        </h1>
        <p className="mb-8 text-lg font-light delay-300 animate-slideUp">
          Discover the perfect fit for your style and performance. Elevate your
          game with every step.
        </p>

        <input
          type="text"
          placeholder="Enter your email"
          className="px-5 py-3 w-full max-w-md bg-transparent rounded-full border transition delay-500 placeholder-F0EDEE text-F0EDEE border-F0EDEE focus:outline-none focus:ring-2 fF0EDEEring-black animate-fadeIn"
        />
      </div>
    </div>
  );
}

export default Hero;
