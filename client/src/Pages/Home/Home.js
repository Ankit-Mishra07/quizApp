import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import "./Home.css";
import Categories from "../../CatData/Categories";
const Home = ({name, setName}) => {
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState("")

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings__select">
          <TextField
            label="Enter Your Name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
          select
          label='Select Difficulty'
          variant="outlined"
          style={{marginBottom : 30}}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
          variant="contained"
          color="primary"
          size='large'
          onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="./home.png" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
