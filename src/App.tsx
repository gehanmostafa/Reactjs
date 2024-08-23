import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./component/Gallery";
import About from "./component/About";

import Main from "./component/Main";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Navbar from "./component/NavBar";

function App() {
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
