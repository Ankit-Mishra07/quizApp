import React from "react";
import {TextField} from '@material-ui/core'
import "./Home.css";
const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
      
        <div className="settings__select">
          <TextField label="Enter Your Name" variant="outlined" 
          style={{marginBottom:25}}
          />
        </div>

      </div>
      <img
        src="./home.png"
        className="banner"
        alt="quiz img"
      />
    </div>
  );
};

export default Home;
