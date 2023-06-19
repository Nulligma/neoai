"use client";

import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg mb-sm-4 p-0">
      <div className="container border-bottom">
        <span className="navbar-brand h1 fs-2">NeoAI.wiki</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-2">
            <li className="navbar-item">news</li>
            <li className="navbar-item">libraries</li>
            <li className="navbar-item">playground</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
