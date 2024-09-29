import React, { useState } from "react";
import "./GuestCounter.css";

const GuestCounter = () => {
  const [adults, setAdults] = useState(1); 
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0); 
  const [showDropdown, setShowDropdown] = useState(false);

  const increment = (category) => {
    if (category === "adults") setAdults(adults + 1);
    if (category === "children") setChildren(children + 1);
    if (category === "pets") setPets(pets + 1);
  };

  const decrement = (category) => {
    if (category === "adults" && adults > 1) setAdults(adults - 1);
    if (category === "children" && children > 0) setChildren(children - 1);
    if (category === "pets" && pets > 0) setPets(pets - 1);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const totalGuests = adults + children;

  return (
    <div className="guest-counter">
 
      <label>Who</label>
      <div className="counter-input" onClick={toggleDropdown}>
        {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="dropdown-menu">
          {/* Adults Counter */}
          <div className="counter-row">
            <span>Adults (13+)</span>
            <div className="counter-controls">
              <button onClick={() => decrement("adults")}>−</button>
              <span>{adults}</span>
              <button onClick={() => increment("adults")}>+</button>
            </div>
          </div>

          <div className="counter-row">
            <span>Children (2-12)</span>
            <div className="counter-controls">
              <button onClick={() => decrement("children")}>−</button>
              <span>{children}</span>
              <button onClick={() => increment("children")}>+</button>
            </div>
          </div>

          <div className="counter-row">
            <span>Pets</span>
            <div className="counter-controls">
              <button onClick={() => decrement("pets")}>−</button>
              <span>{pets}</span>
              <button onClick={() => increment("pets")}>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestCounter;
