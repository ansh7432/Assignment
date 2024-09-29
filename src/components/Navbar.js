import React, { useState } from "react";
import citiesData from "./data.json";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import DateRangeSelector from "./DateRangeSelector";
import GuestCounter from "./GuestCounter";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("Anywhere");
  const [filteredCities, setFilteredCities] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const filtered = [];

      Object.keys(citiesData).forEach((state) => {
        citiesData[state].forEach((city) => {
          if (
            city.toLowerCase().includes(term) ||
            state.toLowerCase().includes(term)
          ) {
            filtered.push({ city, state });
          }
        });
      });

      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCityClick = (city, state) => {
    setSearchTerm(`${city}, ${state}`);
    setFilteredCities([]);
  };

  const handleSubmit = () => {
    const formattedStartDate = startDate
      ? startDate.toISOString().split("T")[0]
      : "";
    const formattedEndDate = endDate ? endDate.toISOString().split("T")[0] : "";

    navigate(
      `/search?location=${encodeURIComponent(
        searchTerm
      )}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&adults=${adults}&children=${children}&pets=${pets}`
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">bnbIndia</div>

      {/* Search Bar */}
      <div className="search-container">
        <label className="search-label">Where</label>
        <input
          type="text"
          placeholder="Search city or state..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        {filteredCities.length > 0 && (
          <ul className="dropdown">
            {filteredCities.map((item, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleCityClick(item.city, item.state)}
              >
                {item.city}, {item.state}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Date */}
      <div className="date-range">
        <DateRangeSelector
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>

      {/* Guest Counter */}
      <div>
        <GuestCounter
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          pets={pets}
          setPets={setPets}
        />
      </div>

      {/* Search Button */}
      <button className="search__button" onClick={handleSubmit}>
        Search
      </button>
    </nav>
  );
};

export default Navbar;
