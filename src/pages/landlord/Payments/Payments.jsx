import "./Payments.css";

import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import PaymentStats from "../../../components/landlord/PaymentStats/PaymentStats";
import PaymentFilters from "../../../components/landlord/PaymentFilters/PaymentFilters";
import PaymentTable from "../../../components/landlord/PaymentTable/PaymentTable";
import DeletePaymentModal from "../../../components/landlord/DeletePaymentModal/DeletePaymentModal";
import RevenueChart from "../../../components/landlord/RevenueChart/RevenueChart";

import paymentService from "../../../services/payment.service";

export default function Payments() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    month: "",
    year: "",
  });

  const [payments, setPayments] = useState([]);

  const [stats, setStats] = useState({
    totalRevenue: 0,
    monthRevenue: 0,
    outstanding: 0,
    collectionRate: 0,
  });

  const [loading, setLoading] = useState(true);

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [showDelete, setShowDelete] =
    useState(false);

  useEffect(() => {
    loadPayments();
    loadStats();
  }, []);

  async function loadPayments() {
    try {
      setLoading(true);

      const { data } =
        await paymentService.getPayments();

      setPayments(data.payments || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadStats() {
    try {
      const { data } =
        await paymentService.getPaymentStats();

      setStats(
        data.stats || {
          totalRevenue: 0,
          monthRevenue: 0,
          outstanding: 0,
          collectionRate: 0,
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  const filteredPayments = payments.filter(
    (payment) => {
      const searchMatch =
        !filters.search ||
        payment.tenant?.fullName
          ?.toLowerCase()
          .includes(
            filters.search.toLowerCase()
          );

      const statusMatch =
        !filters.status ||
        payment.status === filters.status;

      return searchMatch && statusMatch;
    }
  );

  return (
    <DashboardLayout role="landlord">
      <div className="payments-page">

        <div className="page-header">

          <h1>Payments</h1>

          <p>
            Track rent payments, invoices,
            and revenue.
          </p>

        </div>

        <PaymentStats
          loading={loading}
          stats={stats}
        />

        <RevenueChart />

        <PaymentFilters
          filters={filters}
          setFilters={setFilters}
        />

        <PaymentTable
          payments={filteredPayments}
          loading={loading}
          onDelete={(payment) => {
            setSelectedPayment(payment);
            setShowDelete(true);
          }}
        />

        <DeletePaymentModal
          open={showDelete}
          payment={selectedPayment}
          reload={loadPayments}
          onClose={() => {
            setShowDelete(false);
            setSelectedPayment(null);
          }}
        />

      </div>
    </DashboardLayout>
  );
}