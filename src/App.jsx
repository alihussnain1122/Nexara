import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Front from "./assets/Front";
import About from "./assets/About";
import Services from "./assets/Services";
import ContactUs from "./assets/ContactUs";
import Company from "./assets/Company";
import HowItWorks from "./assets/HowItWorks";
import VideoSection from "./assets/VideoSection";
import Testimonials from "./assets/Testimonial";
import MoreDetails from "./assets/MoreDetails";
import Booking from "./assets/Booking"; // New Booking Component
import Footer from "./assets/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Company />
      <HowItWorks />
      <VideoSection />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Front />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="more-details" element={<MoreDetails />} />
        <Route path="booking" element={<Booking />} /> {/* New Booking Route */}
      </Route>
    </Routes>
  );
}

export default App;
