import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import ServicesCarousel from "./components/ServicesCarousel";
import WhyUs from "./components/WhyUs";
import Globally from "./components/Globally";
import VehicleAdmin from "./components/VehicleAdmin";
import Logistics from "./components/Logistics";
import Footer from "./components/Footer";
import StayInformed from "./components/StayInformed";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Body />
      <ServicesCarousel />
      <WhyUs />
      <StayInformed/>
      {/* <Globally/> */}
      {/* <VehicleAdmin/> */}
      {/* <Logistics/> */}
      <Footer/>

    </main>
  );
}
