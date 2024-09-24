import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
// import NotFound from './pages/NotFound'; 

function App() {
  return(
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
