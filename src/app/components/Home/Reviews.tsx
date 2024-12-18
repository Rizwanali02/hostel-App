import React from "react";

const Reviews = () => {
  // Array of review data
  const reviews = [
    {
      id: 1,
      content:
        "My parents were scared about sending me alone to Kota. The most important issue was the quality of food and safety issue. After we found Homversity, everything became clearer and they helped me find the safest hostel with delicious food.",
      rating: 5,
      name: "Sahil Jain",
      location: "Delhi",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
    {
      id: 2,
      content:
        "Homversity helped me find the best hostel in Kota. The quality of food and safety provided by the hostel is exceptional, making me feel completely at ease.",
      rating: 5,
      name: "Riya Sharma",
      location: "Mumbai",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
    {
      id: 3,
      content:
        "My experience at Homversity has been amazing! The staff is friendly, and the food is delicious. I feel like I am at home, even when I'm far away from my family.",
      rating: 5,
      name: "Amit Yadav",
      location: "Kolkata",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
    {
      id: 4,
      content:
        "I had a fantastic experience! Homversity made my stay in Kota extremely comfortable, and I highly recommend it to everyone.",
      rating: 4,
      name: "Vikram Singh",
      location: "Pune",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
    {
      id: 5,
      content:
        "I was initially hesitant about staying away from home, but Homversity made the entire experience smooth and enjoyable. The food and safety were top-notch!",
      rating: 5,
      name: "Neha Verma",
      location: "Bangalore",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
    {
      id: 6,
      content:
        "Homversity helped me find the perfect hostel for my studies. The facilities are great, and the food is amazing. I would definitely recommend it.",
      rating: 4,
      name: "Rajesh Kumar",
      location: "Chennai",
      image: "/images/homescholars.png", // Avatar image path
      backgroundImage: "/images/reviewImage.png", // Background image path
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Words from our <span className="text-green-400">Customers</span>
        <span className="ml-2 text-2xl">✱</span>
      </h2>

      {/* Loop through reviews and display them */}
      <div className="flex gap-5 flex-wrap justify-center">
        {reviews.map((review) => (
          <div key={review.id}>
            <div
              className="reviewBackgrounfColor relative bg-cover bg-center rounded-[40px] p-5 text-black min-h-[200px] max-h-[250px] w-[350px] sm:w-[400px] lg:w-[450px] xl:w-[500px]"
            //   style={{
            //     backgroundImage: `url(${review.backgroundImage})`,
            //   }}
            >
              {/* Content on the card */}
              <div className="relative z-10">
                <div className="h-[140px]">
                  <p className="text-sm sm:text-base mb-4">{review.content}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex space-x-1 text-yellow-500">
                    {/* Rating Icons */}
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-[-2px]">
            <span className="">
              <svg
                width="31"
                height="39"
                viewBox="0 0 31 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 39L30.6554 0.75H0.344556L15.5 39Z"
                  fill="#C5F9EC"
                />
              </svg>
            </span>
            <span></span>
            </div>
            {/* User Info displayed outside the card */}
            <div className="sm:ml-[7rem] mt-1 flex items-center space-x-4">
              <img
                src={review.image} // Use first review avatar
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <p className="text-sm">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
