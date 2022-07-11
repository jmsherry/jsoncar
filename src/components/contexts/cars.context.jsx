import { createContext, useState } from "react";
import carsData from "./../../data/cars.json";

export const CarsContext = createContext({
  cars: [],
  setCars: () => {}, // Not implemented yet
  filterCity: "",
  setFilterCity: () => {},
  filteredCars: [],
  availableCities: [],
});

export const CarsContextProvider = (props) => {
  const [cars, setCars] = useState(() => {
    return carsData.map((car) => (car.City ? car : { ...car, City: "" }));
  });

  const [filterCity, setFilterCity] = useState("");

  const availableCities = Array.from(new Set(cars.filter((car) => car.City).map((car) => car.City)));
  console.log(availableCities);
  
  const filteredCars = filterCity
    ? cars.filter((car) =>
        car.City.toLowerCase().includes(filterCity.toLowerCase())
      )
    : cars;

  return (
    <CarsContext.Provider
      value={{
        availableCities,
        cars,
        setCars,
        filterCity,
        setFilterCity,
        filteredCars,
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};
