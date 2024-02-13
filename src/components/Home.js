import React from 'react';
import { Link } from 'react-router-dom';
import ToolListingPage from './ToolListingPage'; // Make sure to import the ToolListingPage component
import './Home.css';
import pandaImage from './panda.png'; // Import the panda.png file

const Home = () => {
  return (
    <div className="home-container">
      {/* Add the image above the header */}
      <img src={pandaImage} alt="Panda Image" style={{ width: '200px' }} />
      
      <header>
        {/* Change the page name here */}
        <h1>Developer Toolbox</h1>
      </header>
      <section className="main-content">
        <p>
          Welcome to the Developer Toolbox! This is a collection of tools and resources curated specifically for developers.
        </p>
        <Link to="/ToolListingPage">
          <button>Explore Tools</button>
        </Link>
      </section>
      <footer>
        Start exploring now and enhance your development journey!
      </footer>
    </div>
  );
};

export default Home;
