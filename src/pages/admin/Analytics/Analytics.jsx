import { useEffect, useState } from "react";

import AnalyticsStats from "../../../components/admin/AnalyticsStats/AnalyticsStats";
import RevenueChart from "../../../components/admin/RevenueChart/RevenueChart";
import BookingChart from "../../../components/admin/BookingChart/BookingChart";
import PropertyTypeChart from "../../../components/admin/PropertyTypeChart/PropertyTypeChart";
import RecentActivity from "../../../components/admin/RecentActivity/RecentActivity";

import dashboardService from "../../../services/dashboard.service";

import "./Analytics.css";

function Analytics() {
  const [stats, setStats] = useState({});
  const [revenueData, setRevenueData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [propertyTypeData, setPropertyTypeData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const { data } = await dashboardService.getDashboard();

      setStats(
        data.stats || {
          revenue: 25000000,
          users: 540,
          properties: 128,
          bookings: 72,
          growth: 18,
        }
      );

      setRevenueData(
        data.revenue || [
          { month: "Jan", revenue: 420000 },
          { month: "Feb", revenue: 580000 },
          { month: "Mar", revenue: 650000 },
          { month: "Apr", revenue: 720000 },
          { month: "May", revenue: 690000 },
          { month: "Jun", revenue: 810000 },
          { month: "Jul", revenue: 930000 },
          { month: "Aug", revenue: 870000 },
          { month: "Sep", revenue: 980000 },
          { month: "Oct", revenue: 1100000 },
          { month: "Nov", revenue: 1260000 },
          { month: "Dec", revenue: 1450000 },
        ]
      );

      setBookingData(
        data.bookings || [
          { month: "Jan", bookings: 24 },
          { month: "Feb", bookings: 31 },
          { month: "Mar", bookings: 40 },
          { month: "Apr", bookings: 35 },
          { month: "May", bookings: 48 },
          { month: "Jun", bookings: 52 },
          { month: "Jul", bookings: 60 },
          { month: "Aug", bookings: 58 },
          { month: "Sep", bookings: 65 },
          { month: "Oct", bookings: 72 },
          { month: "Nov", bookings: 80 },
          { month: "Dec", bookings: 92 },
        ]
      );

      setPropertyTypeData(
        data.propertyTypes || [
          { name: "Apartment", value: 35 },
          { name: "House", value: 28 },
          { name: "Villa", value: 14 },
          { name: "Office", value: 10 },
          { name: "Land", value: 8 },
          { name: "Commercial", value: 5 },
        ]
      );

      setActivities(
        data.activities || [
          {
            type: "user",
            title: "New user registered",
            description: "John Doe created an account",
            time: "5 minutes ago",
          },
          {
            type: "property",
            title: "New property added",
            description: "Luxury apartment added",
            time: "20 minutes ago",
          },
          {
            type: "booking",
            title: "Booking confirmed",
            description: "Apartment 203 booked",
            time: "1 hour ago",
          },
          {
            type: "payment",
            title: "Payment received",
            description: "₦250,000 payment",
            time: "2 hours ago",
          },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>Analytics</h1>
        <p>Platform insights and business performance.</p>
      </div>

      <AnalyticsStats stats={stats} />

      <RevenueChart data={revenueData} />

      <BookingChart data={bookingData} />

      <div className="analytics-bottom">

        <PropertyTypeChart
          data={propertyTypeData}
        />

        <RecentActivity
          activities={activities}
        />

      </div>

    </div>
  );
}

export default Analytics;