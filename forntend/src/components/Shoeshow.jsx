import React, { useRef, useEffect, useState } from "react";

function Shoeshow() {
  const shoes = [
    {
      id: 1,
      name: "Air Max Pro",
      description: "Lightweight Comfort",
      price: "$120",
      image:
        "https://i.pinimg.com/736x/32/11/9d/32119db71567da96205f17b0a3e19b65.jpg",
    },
    {
      id: 2,
      name: "Urban Runner",
      description: "Sleek Design",
      price: "$95",
      image:
        "https://i.pinimg.com/736x/24/c6/7d/24c67d264ff96bf164d227c8838f5dc4.jpg",
    },
    {
      id: 3,
      name: "Trail Blazer",
      description: "Rugged Durability",
      price: "$110",
      image:
        "https://i.pinimg.com/736x/5d/ec/89/5dec89869d16c208753d0202bfc45034.jpg",
    },
    {
      id: 4,
      name: "Classic Sneaker",
      description: "Timeless Style",
      price: "$85",
      image:
        "https://i.pinimg.com/736x/79/55/bc/7955bc91b197a441b007e8585e74b2a0.jpg",
    },
    {
      id: 5,
      name: "Modern Sport",
      description: "Dynamic Performance",
      price: "$130",
      image:
        "https://i.pinimg.com/736x/ad/a1/a0/ada1a013d7954cbf669b1eef96c4ad17.jpg",
    },
    {
      id: 6,
      name: "Street Flex",
      description: "Urban Comfort",
      price: "$105",
      image:
        "https://i.pinimg.com/736x/a9/4a/b5/a94ab5830a563af1b89a9fe1ae40d424.jpg",
    },
    {
      id: 7,
      name: "Speed Runner",
      description: "Fast Fit",
      price: "$115",
      image:
        "https://i.pinimg.com/736x/2f/99/32/2f9932925b12a3085b56b2cda7734a1e.jpg",
    },
    {
      id: 8,
      name: "Comfort Glide",
      description: "Smooth Ride",
      price: "$90",
      image:
        "https://i.pinimg.com/736x/76/78/6a/76786a45fb398a0f5c0e03ae11a22b14.jpg",
    },
    {
      id: 9,
      name: "Flex Runner",
      description: "Agile Support",
      price: "$125",
      image:
        "https://i.pinimg.com/736x/b5/a2/98/b5a298e3bf82d500eec0c54764f53a56.jpg",
    },
    {
      id: 10,
      name: "Peak Performance",
      description: "Ultimate Grip",
      price: "$140",
      image:
        "https://i.pinimg.com/736x/54/a5/37/54a5373a93564103b2a6953f26b7a9ef.jpg",
    },
  ];

  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    if (shoes.length > 4) {
      setShowArrows(true);
    }
  }, [shoes.length]);

  // Auto scroll every 4 seconds
  useEffect(() => {
    if (!showArrows) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollRef.current.scrollLeft >= maxScrollLeft) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({
          left: clientWidth / 2,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [showArrows]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
      }
    );

    const cards = document.querySelectorAll(".shoe-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth / 2;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 py-16 mx-auto w-full">
      <h2 className="mb-4 text-3xl font-semibold text-center text-gray-900">
        Featured Collection
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-gray-600">
        Explore our exclusive range of shoes designed for comfort, style, and
        performance.
      </p>

      {showArrows && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 z-20 p-2 bg-white rounded-full shadow -translate-y-1/2 hover:bg-gray-100"
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 z-20 p-2 bg-white rounded-full shadow -translate-y-1/2 hover:bg-gray-100"
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
      >
        {shoes.map(({ id, name, image, description, price }) => (
          <div
            key={id}
            data-id={id}
            className={`shoe-card relative flex-shrink-0 w-64 rounded-lg shadow-lg cursor-pointer group transition-all duration-700 ease-out 
              ${
                visibleCards[id]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-64 rounded-t-lg"
              loading="lazy"
            />
            <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-40 rounded-t-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="px-6 py-2 font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-200">
                Shop Now
              </button>
            </div>
            <div className="p-4 text-center bg-white rounded-b-lg">
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
              <p className="mt-2 text-base font-semibold text-gray-900">
                {price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shoeshow;
