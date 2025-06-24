import React, { useEffect, useState } from "react";

function Category() {
  const reasons = [
    {
      id: 1,
      title: "New Release",
      description: "We use only premium materials for durability and comfort.",
      image:
        "https://i.pinimg.com/736x/da/48/ef/da48efe62578f0aa7ddba75045e7dc69.jpg",
    },
    {
      id: 2,
      title: "Men",
      description: "Modern styles that blend performance with aesthetics.",
      image:
        "https://i.pinimg.com/736x/04/54/21/0454218032f91dc89f346f95552f3222.jpg",
    },
    {
      id: 3,
      title: "Women",
      description: "Our customers love the fit and feel of our shoes.",
      image:
        "https://i.pinimg.com/736x/cc/40/50/cc4050d1b730b7903d614f021c3f74e2.jpg",
    },
  ];

  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    const cards = document.querySelectorAll(".category-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="relative px-6 py-16 mx-auto max-w-full text-black">
      <h1 className="mb-12 text-4xl font-bold text-center">Categories</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {reasons.map(({ id, title, description, image }) => (
          <div
            key={id}
            data-id={id}
            className={`category-card overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out transform
              ${
                visible[id]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } cursor-pointer hover:shadow-2xl`}
          >
            <img src={image} alt={title} className="object-cover w-full h-48" />
            <div className="p-6 bg-white">
              <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
