import "./Amenities.css";

import {
  Wifi,
  ShieldCheck,
  Car,
  Dumbbell,
  Trees,
  Camera,
  Zap,
  Waves,
  AirVent,
  Building2,
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    {
      icon: Wifi,
      name: "High-Speed WiFi",
    },
    {
      icon: ShieldCheck,
      name: "24/7 Security",
    },
    {
      icon: Car,
      name: "Parking Space",
    },
    {
      icon: Dumbbell,
      name: "Gym",
    },
    {
      icon: Waves,
      name: "Swimming Pool",
    },
    {
      icon: Camera,
      name: "CCTV",
    },
    {
      icon: Zap,
      name: "Backup Generator",
    },
    {
      icon: AirVent,
      name: "Air Conditioning",
    },
    {
      icon: Trees,
      name: "Garden",
    },
    {
      icon: Building2,
      name: "Elevator",
    },
  ];

  return (
    <section className="amenities-card">

      <div className="section-header">

        <h2>Amenities</h2>

        <span>
          Available Facilities
        </span>

      </div>

      <div className="amenities-grid">

        {amenities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.name}
              className="amenity-item"
            >

              <div className="amenity-icon">

                <Icon size={28} />

              </div>

              <span>{item.name}</span>

            </div>

          );

        })}

      </div>

    </section>
  );
}