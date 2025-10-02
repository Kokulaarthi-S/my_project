import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import Home from "./components/Home";

import FormPage from "./pages/FormPage";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/signup";
import RegistrationPage from "./pages/RegistrationForm";
import ArtistPage from "./pages/Album";
import { AuthProvider } from './Auth';



const App = () => {
  return (
     <AuthProvider>
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RegistrationForm" element={<RegistrationPage />} /> 
       <Route path="/Album" element={<ArtistPage />} />

      </Routes>

   
    </>
    </AuthProvider>
  );
};

export default App;
