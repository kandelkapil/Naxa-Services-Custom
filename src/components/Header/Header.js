import React from "react";
import "./header.css";
import { Link } from "react-scroll";

const Services = () => {
  const nav_items = [
    { id: 1, name: "GIS & Geospatial Technologies" },
    { id: 2, name: "Surveying & Data Collection" },
    { id: 3, name: "Data Visualization & Mapping" },
    { id: 4, name: "Software & Apps Development" },
    { id: 5, name: "Frontier Technologies" },
    { id: 6, name: "Research & Training" },
  ];

  return (
    <div className="container-title">
      <div className="wrapper-title-items">
        {nav_items.map((items) => {
          return (
            <div className="title" key={items.id}>
              <Link to={items.id} smooth={true} duration={1500}>
                {items.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
