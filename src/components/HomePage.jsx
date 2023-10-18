import React from "react";
import "./HomePageStyles.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleit1 = () => {
    navigate("/task1");
  };
  const handleit2 = () => {
    navigate("/task2");
  };
  return (
    <div className="outer">
      <button className="button" onClick={() => handleit1()}>
        Task1 <i class="fa-solid fa-right-to-bracket"></i>{" "}
      </button>
      <button className="button" onClick={() => handleit2()}>
        Task2 <i class="fa-solid fa-right-to-bracket"></i>{" "}
      </button>
    </div>
  );
};

export default HomePage;
