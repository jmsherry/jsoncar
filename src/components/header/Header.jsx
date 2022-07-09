import React, { useState, useContext } from "react";
import "./header.css";
import BasicDatePicker from "./BasicDatePicker/BasicDatePicker";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../searchContext/SearchContext";

function Header() {
  const { value, setValue } = useContext(SearchContext);
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const submit = () => {
    navigate("../carhire", { replace: true });
  };

  setValue(search);
  // const mySearch = (search) => {
  //   if (search !== "") {
  //     const newSearch = data.filter((item) => {
  //       return Object.values(item)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(search.toLowerCase());
  //     });
  //     setSearchResults(newSearch);
  //   } else {
  //     setSearchResults(data);
  //   }
  // };

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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                    onClick={submit}
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
