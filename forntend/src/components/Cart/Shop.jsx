import React, { useState } from "react";
import Header from "../Header";
import { products } from "../Cart/Data.jsx";
import Footer from "../Footer.jsx";
import { useNavigate } from "react-router-dom";

const { featured, men, women } = products;

function Shop() {
  const [featuredOption, setFeaturedOption] = useState("");
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  const handleFeaturedChange = (e) => {
    const value = e.target.value;
    setFeaturedOption(value);
    if (value === "view-all") {
      setShowAllFeatured(true);
    } else if (value === "view-less") {
      setShowAllFeatured(false);
    }
  };

  return (
    <div className="overflow-hidden relative w-screen min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="py-12 mt-16 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">
          Shop the Collection
        </h1>
        <p className="text-gray-500">
          Gear up with the best products for your fitness journey
        </p>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-8 md:px-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Featured</h2>
          <select
            onChange={handleFeaturedChange}
            className="px-3 py-2 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            value={featuredOption}
          >
            <option value="" disabled>
              More Options
            </option>
            <option value="view-all">View More</option>
            <option value="view-less">View Less</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {(showAllFeatured ? featured : featured.slice(0, 4)).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Men's Products */}
      <section className="px-4 py-8 md:px-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Men</h2>
          <select
            className="px-3 py-2 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            defaultValue=""
          >
            <option value="" disabled>
              More Options
            </option>
            <option value="view-all">View More</option>
            <option value="view-less">View Less</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {men.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Women's Products */}
      <section className="px-4 py-8 md:px-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Women</h2>
          <select
            className="px-3 py-2 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            defaultValue=""
          >
            <option value="" disabled>
              More Options
            </option>
            <option value="view-all">View All</option>
            <option value="sort-price">Sort by Price</option>
            <option value="sort-name">Sort by Name</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {women.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white rounded-xl shadow transition hover:shadow-lg animate-fadeIn">
      <img
        src={item.image}
        alt={item.name}
        className="object-cover mb-4 w-full h-48 rounded-md"
      />
      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
      <p className="text-gray-600">{item.price}</p>
      <button
        onClick={() => navigate("/cart")}
        className="px-4 py-2 mt-4 text-white bg-black rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Shop;
