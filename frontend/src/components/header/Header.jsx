import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const encodedToken = "";
const wishlistList = [];
const cartList = [];
const handleChange = () => {};

const Header = () => {
  const [text, setText] = useState("'");
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          {/* FLAT MATE */}
          RENT MOJO
        </Link>
        <ul className="nav-list">
          <li className="nav-list-items desktop-cta">
            {encodedToken ? (
              <Link to="/login">
                <button className="btn btn-primary-outline  nav-cta">
                  <i class="fas fa-user"></i>
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary-outline  nav-cta">
                  Login
                </button>
              </Link>
            )}
          </li>
          <li className="nav-list-items">
            <div>
              <Link to="/wishlist">
                {" "}
                <i className="badge-icon fas fa-heart nav-icon"></i>
              </Link>
              {wishlistList.length > 0 && (
                <div className="badge-text">{wishlistList.length}</div>
              )}
            </div>
          </li>
          <li className="nav-list-items">
            <div>
              <Link to="/cart">
                <i className="badge-icon fas fa-shopping-cart nav-icon"></i>
              </Link>
              {cartList.length > 0 && (
                <div className="badge-text">{cartList.length}</div>
              )}
            </div>
          </li>
          <li className="nav-list-items login mobile-cta">
            <div>
              <Link to="/login">
                <i className="fas fa-user nav-icon"></i>
              </Link>
            </div>
          </li>
        </ul>
        <div className="nav-search-container">
          <input
            className="nav-search-text"
            type="text"
            onChange={handleChange}
            // value={text}
          />
          <button className="nav-search-button">
            {text?.length > 0 ? (
              <i
                className="fas fa-times"
                onClick={() => {
                  setText("");
                }}
              ></i>
            ) : (
              <i className="fas fa-search"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
