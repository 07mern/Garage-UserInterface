
import React, { useState } from 'react';
import './Home.css'
import { garageData } from './garageData';
const Home = () => {
  return (
    <>
        <div className="home-container">

          {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome Back, User!</h1>
          <p>Explore nearby garages, book services, and enjoy hassle-free car maintenance.</p>
          <button className="btn btn-explore" >Explore Garages</button>
        </div>
      </section>

      {/* Garages List Section */}
      <section className="garages-list" >
        <h2>Featured Garages</h2>
        <div className="garage-cards-container">
          {garageData.map((garage, index) => (
            <GarageCard key={index} {...garage} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Garage@24. All rights reserved.</p>
      </footer>
    
        </div>
    </>
  )
};

const GarageCard = ({ name, location, image, rating, description, price }) => {
  return (
    <div className="card shadow-0 border rounded-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
            <div className="bg-image hover-zoom ripple rounded ripple-surface">
              <img src={image} className="w-100" alt={name} />
              <a href="#!">
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <h5>{name}</h5>
            <div className="d-flex flex-row">
              
              <span>{rating }</span>
            </div>
            <div className="mt-1 mb-0 text-muted small">
              <span>{location}</span>
            </div>
            <p className="description mb-4 mb-md-0">{description}</p>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
            {/* <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">{price}</h4>
            </div> */}
            <button className="btn btn-primary btn-sm mt-2">Book Now</button>
            <button className="btn btn-wishlist btn-sm mt-2">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
