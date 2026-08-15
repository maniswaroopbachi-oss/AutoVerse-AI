import { useState } from "react";
import "./ExploreCars.css";

function ExploreCars() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All Brands");
  const [fuel, setFuel] = useState("All Fuel Types");

  const cars = [
    {
      brand: "BMW",
      model: "BMW M4",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "₹1.48 Cr",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    },
    {
      brand: "Mercedes-Benz",
      model: "AMG GT",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "₹2.71 Cr",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      brand: "Audi",
      model: "Audi RS5",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "₹1.13 Cr",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    },
    {
      brand: "Tesla",
      model: "Model S",
      fuel: "Electric",
      transmission: "Automatic",
      price: "₹1.50 Cr",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",
    },
  ];

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

                <button>
                  View Details →
                </button>
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