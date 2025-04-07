// TODO:KEYFRAMES also in css
import { useState, useEffect } from "react";
import "./LoadingScreen.css";
// import styled, { keyframes } from 'styled-components';
import SiteBrand from "../brand/SiteBrand.jsx";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div
      className="loading-screen-container"
      style={{ display: loading ? "flex" : "none" }}
    >
      {loading ? (
        <div className="loading-container">
          <div className="loading-content">
            <SiteBrand className="loading-logo" />
            <h1 className="loading-content-title">
              <span className="primary">&lt;</span>{" "}
              <span className="primary">Eric</span>{" "}
              <span className="secondary">Dollinger</span>{" "}
              <span className="primary">/&gt;</span>
            </h1>
          </div>
          <div className="loading-bar"></div>
          <span className="loading-text"></span>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
