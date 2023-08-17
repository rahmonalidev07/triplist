// CSS
import "./TripList.css";
// react
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);
  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && <div>LOADING...</div>}
      {error && (
        <div>
          ERROR :( <span>{error}</span>
        </div>
      )}
      <ul>
        {trips &&
          trips.map((trip) => {
            return (
              <li key={trip.title}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          Europe
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All
        </button>
      </div>
    </div>
  );
}

export default TripList;
