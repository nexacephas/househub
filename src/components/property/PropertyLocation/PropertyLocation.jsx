import "./PropertyLocation.css";

import {
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  Fuel,
  Church,
  Bus,
  Clock3,
} from "lucide-react";

const nearbyPlaces = [
  {
    icon: <School size={20} />,
    title: "Schools",
    place: "Loyola Jesuit College",
    distance: "1.2 km",
    time: "4 mins",
  },
  {
    icon: <Hospital size={20} />,
    title: "Hospital",
    place: "Nisa Premier Hospital",
    distance: "2.5 km",
    time: "7 mins",
  },
  {
    icon: <ShoppingBag size={20} />,
    title: "Shopping Mall",
    place: "Jabi Lake Mall",
    distance: "6.4 km",
    time: "15 mins",
  },
  {
    icon: <Fuel size={20} />,
    title: "Fuel Station",
    place: "NNPC Mega Station",
    distance: "800 m",
    time: "2 mins",
  },
  {
    icon: <Church size={20} />,
    title: "Place of Worship",
    place: "Nearby Churches & Mosques",
    distance: "1.5 km",
    time: "5 mins",
  },
  {
    icon: <Bus size={20} />,
    title: "Transport",
    place: "Major Bus Stop",
    distance: "500 m",
    time: "2 mins",
  },
];

export default function PropertyLocation() {
  return (
    <section className="property-location">

      <div className="container">

        <div className="location-header">

          <span>Location</span>

          <h2>Neighborhood & Accessibility</h2>

          <p>
            Explore the surrounding area and discover nearby
            schools, hospitals, shopping centers, transport,
            and other essential services.
          </p>

        </div>

        <div className="location-layout">

          {/* Map */}

          <div className="map-card">

            <div className="map-placeholder">

              <MapPin size={48} />

              <h3>Interactive Map</h3>

              <p>
                Google Maps / Mapbox integration will appear here.
              </p>

            </div>

          </div>

          {/* Nearby */}

          <div className="nearby-card">

            <h3>Nearby Places</h3>

            {nearbyPlaces.map((place, index) => (

              <div
                key={index}
                className="nearby-item"
              >

                <div className="nearby-icon">

                  {place.icon}

                </div>

                <div className="nearby-info">

                  <strong>{place.title}</strong>

                  <p>{place.place}</p>

                </div>

                <div className="nearby-distance">

                  <span>{place.distance}</span>

                  <small>

                    <Clock3 size={14} />

                    {place.time}

                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}