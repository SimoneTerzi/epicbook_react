import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Page/HomePage";
import Errorpage from "./Page/ErrorPage";
import Contact from "./Page/Contact";
import Bookdetails from "./Page/BookDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Bookdetails />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default App;
