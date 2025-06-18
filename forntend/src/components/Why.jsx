import React, { useEffect, useState } from "react";

function Why() {
  const reasons = [
    {
      id: 1,
      title: "Quality Materials",
      description: "We use only premium materials for durability and comfort.",
      image:
        "https://i.pinimg.com/736x/4d/40/ba/4d40ba08e996ee04a58ea73289b267b6.jpg",
    },
    {
      id: 2,
      title: "Innovative Design",
      description: "Modern styles that blend performance with aesthetics.",
      image:
        "https://i.pinimg.com/736x/e9/77/cf/e977cf72d3ee4a2fb3938f718a0817e3.jpg",
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description: "Our customers love the fit and feel of our shoes.",
      image:
        "https://i.pinimg.com/736x/0d/15/ac/0d15ac5ba9dbf5760dda14c21e94822d.jpg",
    },
  ];

  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    const cards = document.querySelectorAll(".why-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="relative px-6 py-16 mx-auto max-w-7xl text-black">
      <h1 className="mb-12 text-4xl font-bold text-center">
        Why Choose LaceUP?
      </h1>
      <div className="grid gap-10 md:grid-cols-3">
        {reasons.map(({ id, title, description, image }) => (
          <div
            key={id}
            data-id={id}
            className={`why-card overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out transform 
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

export default Why;
