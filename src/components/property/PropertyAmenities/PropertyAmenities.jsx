import "./PropertyAmenities.css";

import {
  ShieldCheck,
  Zap,
  Wifi,
  Car,
  Trees,
  Dumbbell,
  Waves,
  PawPrint,
  Camera,
  Building2,
  CheckCircle2,
  Droplets,
} from "lucide-react";

const amenities = [
  {
    title: "Security",
    icon: <ShieldCheck size={24} />,
    items: [
      "24/7 Security",
      "CCTV Surveillance",
      "Gated Estate",
    ],
  },
  {
    title: "Utilities",
    icon: <Zap size={24} />,
    items: [
      "24 Hours Electricity",
      "Water Treatment",
      "Backup Generator",
    ],
  },
  {
    title: "Connectivity",
    icon: <Wifi size={24} />,
    items: [
      "Fiber Internet",
      "Cable TV",
      "Smart Home Ready",
    ],
  },
  {
    title: "Parking",
    icon: <Car size={24} />,
    items: [
      "2 Parking Spaces",
      "Visitor Parking",
    ],
  },
  {
    title: "Lifestyle",
    icon: <Dumbbell size={24} />,
    items: [
      "Gym",
      "Swimming Pool",
      "Children's Play Area",
    ],
  },
  {
    title: "Outdoor",
    icon: <Trees size={24} />,
    items: [
      "Garden",
      "Balcony",
      "Green Area",
    ],
  },
  {
    title: "Water Features",
    icon: <Droplets size={24} />,
    items: [
      "Borehole",
      "Water Storage",
    ],
  },
  {
    title: "Pet Friendly",
    icon: <PawPrint size={24} />,
    items: [
      "Pets Allowed",
    ],
  },
  {
    title: "Recreation",
    icon: <Waves size={24} />,
    items: [
      "Pool Lounge",
      "Relaxation Area",
    ],
  },
  {
    title: "Building",
    icon: <Building2 size={24} />,
    items: [
      "Elevator",
      "Reception",
    ],
  },
  {
    title: "Monitoring",
    icon: <Camera size={24} />,
    items: [
      "Security Cameras",
      "Access Control",
    ],
  },
];
export default function PropertyAmenities() {
  return (
    <section className="property-amenities">

      <div className="container">

        <div className="section-heading">

          <span>Amenities</span>

          <h2>Everything You Need</h2>

          <p>
            Enjoy modern facilities and premium amenities
            designed to provide comfort, convenience,
            and peace of mind.
          </p>

        </div>

        <div className="amenities-grid">

          {amenities.map((category, index) => (

            <div
              className="amenity-card"
              key={index}
            >

              <div className="amenity-icon">

                {category.icon}

              </div>

              <h3>{category.title}</h3>

              <ul>

                {category.items.map((item, i) => (

                  <li key={i}>

                    <CheckCircle2 size={16} />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}