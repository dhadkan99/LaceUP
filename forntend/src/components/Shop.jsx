import React, { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const thumbnails = [
  "https://i.pinimg.com/736x/4a/74/b2/4a74b2d2251e270b8383582a32bdaa72.jpg",
  "https://i.pinimg.com/736x/4a/74/b2/4a74b2d2251e270b8383582a32bdaa72.jpg",
  "https://i.pinimg.com/736x/4a/74/b2/4a74b2d2251e270b8383582a32bdaa72.jpg",
  "https://i.pinimg.com/736x/4a/74/b2/4a74b2d2251e270b8383582a32bdaa72.jpg",
  "https://i.pinimg.com/736x/4a/74/b2/4a74b2d2251e270b8383582a32bdaa72.jpg",
];

function Shop() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col gap-10 p-8 pt-28 min-h-screen bg-gray-50 lg:flex-row">
      {/* Left: Images */}
      <div className="flex flex-col gap-6 w-full lg:flex-row lg:w-1/2">
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3 overflow-auto max-h-[500px]">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`thumb-${index}`}
              className={`object-cover w-16 h-20 rounded border cursor-pointer transition ring-black hover:ring-2 ${
                selectedImg === index ? "ring-2" : ""
              }`}
              onClick={() => setSelectedImg(index)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={thumbnails[selectedImg]}
            alt="Main Product"
            className="object-cover w-full max-w-md rounded-xl shadow-lg border"
          />
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-semibold">Nike After Dark Tour</h1>
          <p className="mt-1 text-sm text-gray-500">
            Women's Oversized Graphic Hoodie
          </p>
          <p className="mt-2 text-lg font-semibold">$110</p>

          {/* Sizes */}
          <div className="mt-4">
            <p className="mb-2 text-sm font-medium">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded border transition font-medium ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <button className="px-6 py-3 w-full text-white bg-black rounded-full transition hover:bg-gray-900 sm:w-auto flex items-center justify-center gap-2">
              <span>Add to Bag</span>
            </button>
            <button className="px-6 py-3 w-full text-black rounded-full border border-gray-300 transition hover:bg-gray-100 sm:w-auto flex items-center justify-center gap-2">
              <span>❤️ Favourite</span>
            </button>
          </div>

          {/* Description */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              To celebrate the Nike After Dark Tour, we gave this oversized
              hoodie a glow-up with reflective design graphics. Fleece that's
              smooth on the outside and extra soft on the inside helps keep you
              comfy well into the night.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Colour Shown: Black</li>
              <li>Style: IF4137-010</li>
            </ul>
          </div>

          <button
            className="mt-4 text-sm font-medium text-black underline hover:text-gray-800"
            onClick={() => alert("Show product details modal or navigate!")}
          >
            View Product Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
