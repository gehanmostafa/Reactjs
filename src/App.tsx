import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./component/Gallery";
import About from "./component/About";
import "./App.css";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Navbar from "./component/NavBar";
import Doors from "./component/Gallery/Doors";
import IntroDesign from "./component/Gallery/IntroDesign";
import DressingRoom from "./component/Gallery/DressingRoom";
import Kitchens from "./component/Gallery/kitchens";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery/Doors" element={<Doors />} />
          <Route path="/gallery/Interior Design" element={<IntroDesign />} />
          <Route path="/gallery/Dressing Room" element={<DressingRoom />} />
          <Route path="/gallery/Kitchens" element={<Kitchens />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
