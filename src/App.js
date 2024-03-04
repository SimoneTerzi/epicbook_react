import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Page/HomePage"
import Errorpage from ".//Page/ErrorPage";
import Loginpage from "./Page/Loginpage";
import ProtectedRoutes from "./Protection/ProtectedRoutes";
import Contact from "./Page/Contact";
import Bookdetails from "./Page/BookDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Loginpage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/details/:id" element={<Bookdetails />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;