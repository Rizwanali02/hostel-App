import LandingBottomPage from "./components/Home/LandingBottomPage";
import LandingPage from "./components/Home/LandingPage";
import Reviews from "./components/Home/Reviews";


export default function Home() {
  return (
    <div className=" bg-gradient-to-l from-green-100 to-custom-landing-page">
     <LandingPage/>
     <LandingBottomPage/>
     <Reviews/>
    </div>
   );

}
