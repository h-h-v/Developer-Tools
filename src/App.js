import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ToolListingPage from './components/ToolListingPage'; // Import the ToolListingPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Update the route path for the Tool Listing Page */}
        <Route path="/ToolListingPage" element={<ToolListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
