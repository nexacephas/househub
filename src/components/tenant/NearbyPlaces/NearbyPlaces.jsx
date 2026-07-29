import "./NearbyPlaces.css";

import {
  School,
  Hospital,
  ShoppingBag,
  UtensilsCrossed,
  Bus,
  Fuel,
  Landmark,
  Shield,
} from "lucide-react";

export default function NearbyPlaces() {
  const places = [
    {
      icon: School,
      title: "Greenfield International School",
      distance: "450 m",
    },
    {
      icon: Hospital,
      title: "Evercare Hospital",
      distance: "1.8 km",
    },
    {
      icon: ShoppingBag,
      title: "Lekki Mall",
      distance: "2.1 km",
    },
    {
      icon: UtensilsCrossed,
      title: "The Patio Restaurant",
      distance: "600 m",
    },
    {
      icon: Bus,
      title: "Bus Terminal",
      distance: "300 m",
    },
    {
      icon: Fuel,
      title: "Mobil Filling Station",
      distance: "700 m",
    },
    {
      icon: Landmark,
      title: "First Bank",
      distance: "900 m",
    },
    {
      icon: Shield,
      title: "Police Station",
      distance: "1.5 km",
    },
  ];

  return (
    <section className="nearby-places">

      <div className="nearby-header">

        <div>

          <h2>Nearby Places</h2>

          <p>
            Essential services and places around
            your property.
          </p>

        </div>

      </div>

      <div className="places-grid">

        {places.map((place) => {

          const Icon = place.icon;

          return (

            <div
              key={place.title}
              className="place-card"
            >

              <div className="place-icon">

                <Icon size={24} />

              </div>

              <div className="place-info">

                <h4>{place.title}</h4>

                <span>{place.distance}</span>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}