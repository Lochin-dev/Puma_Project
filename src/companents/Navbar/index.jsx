import React, { useState } from "react";

import "./index.scss";
import Puma from "../../assets/images/puma.png";

const index = () => {
  const [num, setNum] = useState(false);

  const nav_link = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "feature",
      title: "Feature",
    },
    {
      id: "gallary",
      title: "Gallary",
    },
  ];

  const [active, setActive] = useState("home");
  const activeHandler = (id) => setActive(id);

  return (
    <>
      <header>
        <div className="">
          <nav className="nav">
            <span className="nav__span">
              <img src={Puma} alt="puma" />
            </span>
            <ul className="nav__ul">
              {nav_link.map((links, idx) => (
                <li
                  key={idx}
                  className={`nav__ul_list opacity-50 ${
                    active === links.id ? "opacity-100" : "opacity-75"
                  }`}
                  onClick={() => activeHandler(links.id)}
                >
                  <a href={`#${links.id}`} className="nav__ul_list--link">
                    {links.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="nav__btn position_btn">Buy Now</button>

            <span
              style={{ zIndex: 300 }}
              onClick={() => setNum(!num)}
              className="nav__div_span "
            >
              <i onClick={() => setNum(!num)} className="bi bi-list"></i>
            </span>

            <div className={`nav__div ${num ? "d-block" : "d-none"}`}>
              <div className="wrap_div">
                <ul className="nav__div_ul">
                  <li className="nav__div_ul--list">
                    <a href="#" className="nav__div_ul--list-link">
                      Menu
                    </a>
                  </li>
                  <li className="nav__div_ul--list">
                    <a href="#" className="nav__div_ul--list-link">
                      About
                    </a>
                  </li>
                  <li className="nav__div_ul--list">
                    <a href="#" className="nav__div_ul--list-link">
                      Feature
                    </a>
                  </li>
                  <li className="nav__div_ul--list">
                    <a href="#" className="nav__div_ul--list-link">
                      Gallary
                    </a>
                  </li>
                </ul>
                <button className="nav__div_btn">Buy Now</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
