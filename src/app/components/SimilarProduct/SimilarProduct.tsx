import React from "react";

const SimilarProduct = () => {
  const products = [
    {
      id: 1,
      name: "Okazaki House",
      location: "C-193 Near M block, Delhi",
      price: "₹18,000/mo*",
      features: ["Elevator", "Free Wifi", "Geyser", "+ 7 more"],
      roomTypes: ["Single", "Double"],
      image: "/images/hostelimage2.png", // Replace with actual image URL
      tag: "Male",
    },
    {
      id: 2,
      name: "Okazaki House",
      location: "C-193 Near M block, Delhi",
      price: "₹18,000/mo*",
      features: ["Elevator", "Free Wifi", "Geyser", "+ 7 more"],
      roomTypes: ["Single", "Double"],
      image: "/images/hostelimage2.png", // Replace with actual image URL
      tag: "Male",
    },
    {
      id: 3,
      name: "Okazaki House",
      location: "C-193 Near M block, Delhi",
      price: "₹18,000/mo*",
      features: ["Elevator", "Free Wifi", "Geyser", "+ 7 more"],
      roomTypes: ["Single", "Double"],
      image: "/images/hostelimage2.png", // Replace with actual image URL
      tag: "Male",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Other Similar Properties
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-80"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-white text-black text-xs px-3 py-1 rounded shadow">
                {product.tag}
              </span>
              {/* <button className="absolute top-10 right-2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100">
                ❤️
              </button> */}
            </div>
            <div className="p-4">
              {/* Product name and price */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-green-600">
                  {product.price}
                </p>
              </div>
              <p className="text-sm text-gray-600">{product.location}</p>
              <div className="flex gap-2 mt-4 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-building"></i> Elevator
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-wifi"></i> Wi-Fi
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-hot-tub-person"></i> Geyser
                </span>
                <span>+7 more</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.roomTypes.map((type, index) => (
                  <button
                    key={index}
                    className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-600"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t p-4 text-center">
              <button className="px-6 py-2 text-blue-600 font-semibold border border-blue-600 rounded-full hover:bg-blue-50">
                Explore Residence
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
