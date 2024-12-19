import LandingBottomPage from "./components/Home/LandingBottomPage";
import LandingPage from "./components/Home/LandingPage";
import Reviews from "./components/Home/Reviews";


export default function Home() {
  return (
    <div className=" bg-gradient-to-l from-slate-50 to-green-100">
     <LandingPage/>
     <LandingBottomPage/>
     <Reviews/>
    </div>
   );

}
