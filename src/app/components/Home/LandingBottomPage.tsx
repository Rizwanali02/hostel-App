import React from "react";

const LandingBottomPage = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Homes for Scholars Section */}
          <div className="bg-gradient-to-r from-green-400 to-custom-landing-page h-48 sm:h-56 md:h-40 rounded-2xl p-4 flex flex-col justify-start relative">
            <h2 className="text-lg sm:text-xl font-medium">
              Homes for Scholars
            </h2>
            <span className="text-sm sm:text-base font-medium">Scholars</span>
            <div className="absolute bottom-0 right-0 h-full w-1/2">
              <img
                src="/images/homescholars.png"
                alt="Sleeping illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-custom-landing-page h-48 sm:h-56 md:h-40 rounded-2xl p-4 flex flex-col justify-start relative">
            <h2 className="text-lg sm:text-xl font-medium">
              Where Professionals
            </h2>
            <span className="text-sm sm:text-base font-medium">Belong</span>
            <div className="absolute bottom-0 right-0 h-full w-1/2">
              <img
                src="/images/professionals.png"
                alt="Sleeping illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-custom-landing-page h-48 sm:h-56 md:h-40 rounded-2xl p-4 flex flex-col justify-start relative">
            <h2 className="text-lg sm:text-xl font-medium">Managed</h2>
            <span className="text-sm sm:text-base font-medium">Apartments</span>
            <div className="absolute bottom-0 right-0 h-full w-1/2">
              <img
                src="/images/managedapartments.png"
                alt="Sleeping illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 px-4 sm:px-8 lg:px-16">
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
          <span className="text-green-600">More Than</span> Just a Place to
          Stay.
        </div>
        <div className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Step in and see how living can be more than just a place to stay.
        </div>
      </div>

      <div className="flex justify-center gap-10 p-5 flex-wrap">
        <div className="flex gap-3">
          <div>
            <img
              src="/images/hostelimage1.jpg"
              alt="Image 1"
              className="w-[155px] h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <img
                src="/images/hostelimage2.jpg"
                alt="Image 2"
                className="w-[220px] h-[140px] object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/hostelimage3.jpg"
                alt="Image 4"
                className="w-[220px] h-[140px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center max-w-sm text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            <span className="text-green-500">Live your</span> best life,
            starting from day one.
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Just bring what matters most: your dreams and belongings. Everything
            else is ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingBottomPage;
