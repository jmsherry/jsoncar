import React from "react";
import "./header.css";
import BasicDatePicker from "./BasicDatePicker/BasicDatePicker";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Header() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="headerSearch">
        <div className="background-image-container"></div>
        <div className="header-master-container">
          <div className="header-container">
            <div>
              <h1 className="header-title">Car hire made simple.</h1>
              <h1 className="header-title second">
                The best way to search for car rental.
              </h1>
            </div>
            <div className="search-control-master-container">
              <div className="search-control-inner-container">
                <div className="input-container">
                  <div className="search-control-location-container">
                    <div className="search-Control-title title">
                      Pick-up Location:
                    </div>
                    <div className="search-Control-input">
                      <input
                        type="text"
                        placeholder="Enter a city or airport"
                        className="headerSearchInput"
                      />
                    </div>
                  </div>
                  <div className="search-control-date-container">
                    <div className="search-Control-title title">
                      Pickup and Return Date:
                    </div>
                    <div className="search-control-input">
                      <BasicDatePicker />
                    </div>
                  </div>
                </div>

                <div className="search-control-bottom-container">
                  <div className="search-control-age  title">
                    <Checkbox {...label} defaultChecked />
                    Driver aged between 25-75
                  </div>
                  <Button
                    variant="contained"
                    size="large"
                    className="search-button"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
