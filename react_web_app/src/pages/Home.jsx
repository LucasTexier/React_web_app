import React from "react";
import "../assets/scss/Home.scss";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Home() {
  return (
    <div className="calendar-container">
      Calendar
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="calendar" />
      </LocalizationProvider>
    </div>
  );
}

export default Home;
