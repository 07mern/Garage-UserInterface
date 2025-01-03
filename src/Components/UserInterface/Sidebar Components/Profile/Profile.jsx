import React from 'react';
import './Profile.css';
import Password from './Password';

const Profile = () => {
  return (
    
    <div className="form-container">
      <div className="form-header">
        <h2>Personal Information</h2>
      </div>

      <div className="profile-section">
        <div className="avatar">
          <img 
            src="./src/assets/profile-img.jpg" 
            alt="Avatar"
          />
          <button>Change Avatar</button>
        </div>

        <div className="form-fields">
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Enter first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter last name" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" placeholder="Enter state" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter city" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pin">Pin Code</label>
            <input type="text" id="pin" placeholder="Enter pin code" />
          </div>
        </div>
      </div>

      <div className="account">
        <button className="btn btn-warning">Save Profile</button>
        <button className="btn btn-success" data-bs-toggle="modal"
        data-bs-target="#passwordModal">Change Password</button>
        <button className="btn btn-primary">Edit</button>
      </div>
      <Password />
    </div>
    
  );
};

export default Profile;

