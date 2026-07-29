import "./MyProperty.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import PropertyHero from "../../../components/tenant/PropertyHero/PropertyHero";
import PropertyGallery from "../../../components/tenant/PropertyGallery/PropertyGallery";
import PropertyDetails from "../../../components/tenant/PropertyDetails/PropertyDetails";
import LandlordCard from "../../../components/tenant/LandlordCard/LandlordCard";
import LeaseCard from "../../../components/tenant/LeaseCard/LeaseCard";
import Amenities from "../../../components/tenant/Amenities/Amenities";
import HouseRules from "../../../components/tenant/HouseRules/HouseRules";
import PropertyMap from "../../../components/tenant/PropertyMap/PropertyMap";
import NearbyPlaces from "../../../components/tenant/NearbyPlaces/NearbyPlaces";
import LeaseDownload from "../../../components/tenant/LeaseDownload/LeaseDownload";

export default function MyProperty() {
  return (
    <DashboardLayout role="tenant">
      <div className="my-property-page">

        <PropertyHero />

        <PropertyGallery />

        <div className="property-grid">

          <div className="property-left">

            <PropertyDetails />

            <Amenities />

            <HouseRules />

            <PropertyMap />

            <NearbyPlaces />

          </div>

          <div className="property-right">

            <LandlordCard />

            <LeaseCard />

            <LeaseDownload />

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}