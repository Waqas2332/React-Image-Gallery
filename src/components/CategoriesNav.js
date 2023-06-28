import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CategoriesNav = (props) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/image/" + inputRef.current.value);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Image Gallery
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/categories/all">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/nature">
                  Nature
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/drinks">
                  Drinks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/fruits">
                  Fruits
                </Link>
              </li>
            </ul>
            <form
              className="d-flex ms-auto"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={inputRef}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CategoriesNav;
