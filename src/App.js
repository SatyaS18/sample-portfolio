import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Timeline from "./components/Timeline.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
