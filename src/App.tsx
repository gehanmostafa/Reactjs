import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./component/Gallery";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/NavBar";
import Main from "./component/Main";


function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Main/>
     
      
    </>
  );
}

export default App;
