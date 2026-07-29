import "./PropertyDetails.css";

import {
  Home,
  BedDouble,
  Bath,
  Toilet,
  Car,
  Ruler,
  Calendar,
  CheckCircle,
  Sofa,
} from "lucide-react";

export default function PropertyDetails() {
  const details = [
    {
      icon: Home,
      label: "Property Type",
      value: "Detached Duplex",
    },
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: "4",
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: "5",
    },
    {
      icon: Toilet,
      label: "Toilets",
      value: "6",
    },
    {
      icon: Car,
      label: "Parking Spaces",
      value: "4",
    },
    {
      icon: Ruler,
      label: "Property Size",
      value: "650 sqm",
    },
    {
      icon: Sofa,
      label: "Furnished",
      value: "Yes",
    },
    {
      icon: Calendar,
      label: "Year Built",
      value: "2024",
    },
    {
      icon: CheckCircle,
      label: "Status",
      value: "Occupied",
    },
  ];

  return (
    <section className="property-details">

      <div className="details-header">

        <h2>Property Details</h2>

        <span>Complete Property Information</span>

      </div>

      <p className="property-description">

        Experience luxury living in this beautifully designed
        4-bedroom detached duplex located in Lekki Phase 1.
        The property features spacious ensuite bedrooms,
        a modern fitted kitchen, family lounge,
        private parking, uninterrupted water supply,
        CCTV surveillance, and 24-hour estate security.
        It is situated in a serene neighborhood with
        quick access to schools, shopping malls,
        hospitals, restaurants, and major roads.

      </p>

      <div className="details-grid">

        {details.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.label}
              className="detail-card"
            >

              <div className="detail-icon">

                <Icon size={24} />

              </div>

              <div>

                <span>{item.label}</span>

                <h4>{item.value}</h4>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}