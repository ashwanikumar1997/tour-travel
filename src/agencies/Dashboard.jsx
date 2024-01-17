import React from 'react';
import { useTheme } from './ThemeContext';
import './Dashboard.css'; // Import your CSS for styling

const Dashboard = () => {
  const { theme, updateTheme } = useTheme();

  const handleProfileImageChange = (e) => {
    updateTheme({ profileImage: e.target.value });
  };

  const handleBannerImageChange = (e) => {
    updateTheme({ bannerImage: e.target.value });
  };

  return (
    <div className="dashboard">
      <div className="banner" style={{ backgroundImage: `url(${theme.bannerImage})` }}>
        <img className="profile-image" src={theme.profileImage} alt="Profile" />
        <h1>Welcome to Your Dashboard</h1>
        <button className="primary-button">Button 1</button>
        <button className="secondary-button">Button 2</button>
      </div>
    </div>
  );
};

export default Dashboard;