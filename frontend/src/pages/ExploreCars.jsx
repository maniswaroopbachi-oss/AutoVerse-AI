import { useState } from "react";
import "./ExploreCars.css";
import { Link } from "react-router-dom";
import cars from "../data/cars";

function ExploreCars() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All Brands");
  const [fuel, setFuel] = useState("All Fuel Types");

  

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.model.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase());

    const matchesBrand =
      brand === "All Brands" || car.brand === brand;

    const matchesFuel =
      fuel === "All Fuel Types" || car.fuel === fuel;

    return matchesSearch && matchesBrand && matchesFuel;
  });

  return (
    <div className="explore-page">

      <div className="explore-header">
        <p>EXPLORE</p>
        <h1>Find Your Perfect Car</h1>
        <span>
          Search and filter cars based on your preferences.
        </span>
      </div>

      {/* Filters */}
      <div className="filters">

        <input
          type="text"
          placeholder="🔍 Search car or brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option>All Brands</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Audi</option>
          <option>Tesla</option>
        </select>

        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
          <option>All Fuel Types</option>
          <option>Petrol</option>
          <option>Electric</option>
        </select>

      </div>

      {/* Cars */}
      <div className="explore-grid">

        {filteredCars.map((car) => (
          <div className="explore-card" key={car.model}>

            <div className="explore-image">
              <img src={car.image} alt={car.model} />
            </div>

            <div className="explore-info">

              <p>{car.brand}</p>

              <h2>{car.model}</h2>

              <div className="explore-specs">
                <span>⚡ {car.fuel}</span>
                <span>⚙ {car.transmission}</span>
              </div>

              <div className="explore-bottom">
                <strong>{car.price}</strong>

               <Link
                  to={`/car/${car.id}`}
                  className="view-details"
              >
                View Details →
               </Link>
              </div>

            </div>

          </div>
        ))}

      </div>

      {filteredCars.length === 0 && (
        <div className="no-results">
          <h2>No cars found</h2>
          <p>Try changing your search or filters.</p>
        </div>
      )}

    </div>
  );
}

export default ExploreCars;