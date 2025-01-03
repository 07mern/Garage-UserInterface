import React, { useState } from 'react';
import './Password.css';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match!');
      return;
    }
    alert('Password Changed Successfully!');
  };

  const margin = {
    marginTop:'20px',
    fontSize:'0.9rem'
  }

  return (
    <div className="password-modal-container">
      

      {/* Modal */}
      <div
        className="modal fade"
        id="passwordModal"
        tabIndex="-1"
        aria-labelledby="passwordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog pass-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="passwordModalLabel">Change Password</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Current Password */}
                <div className="form-group">
                  <label>Current Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword.current ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter Current Password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('current')}
                    >
                      {showPassword.current ? 'Hide' : 'Show'}
                    </span>
                  </div>
                </div>

                {/* New Password */}
                <div className="form-group pass-form">
                  <label style={margin}>New Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword.new ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter New Password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('new')}
                    >
                      {showPassword.new ? 'Hide' : 'Show'}
                    </span>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword.confirm ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm New Password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('confirm')}
                    >
                      {showPassword.confirm ? 'Hide' : 'Show'}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
