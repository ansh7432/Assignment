import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangeSelector.css";

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 

  const handleStartDateChange = (date) => {
    setStartDate(date);
 
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="date-range-selector">
      <div className="date-picker-container">
        <label>Check In:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()} 
          placeholderText="Select start date"
          className="date-picker"
    
        />
      </div>
      <div className="date-picker-container">
        <label>Check Out:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()} 
          placeholderText="Select end date"
          className="date-picker"
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;
