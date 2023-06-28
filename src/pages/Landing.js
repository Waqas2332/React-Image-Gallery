import React from "react";
import Nav from "../components/Nav";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <main className="d-flex flex-column justify-content-center align-items-center h-75">
        <h2 className="text-dark text-center">
          Unleash the Beauty
          <span className="d-block">
            Your Ultimate Image Gallery Experience!
          </span>
        </h2>
        <button className="btn btn-dark mt-4 p-2">
          <Link
            className="text-decoration-none text-white p-2"
            to="/categories/all"
          >
            Browse Categories
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Landing;
