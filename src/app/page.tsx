import LandingBottomPage from "./components/Home/LandingBottomPage";
import LandingPage from "./components/Home/LandingPage";
import Reviews from "./components/Home/Reviews";

export default function Home() {
  return (
    <div className=" bg-gradient-to-l from-slate-50 to-green-100">
      <LandingPage />
      <LandingBottomPage />
      <div className="py-16 px-6 sm:px-12 lg:px-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Words from our <span className="text-green-400">Customers</span>
          <span className="ml-2 text-2xl">✱</span>
        </h2>
        <Reviews />
      </div>
    </div>
  );
}
