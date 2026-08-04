import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import PaymentSummary from "../../../components/tenant/PaymentSummary/PaymentSummary";
import UpcomingPayment from "../../../components/tenant/UpcomingPayment/UpcomingPayment";
import PaymentChart from "../../../components/tenant/PaymentChart/PaymentChart";
import PaymentHistory from "../../../components/tenant/PaymentHistory/PaymentHistory";
import PaymentMethods from "../../../components/tenant/PaymentMethods/PaymentMethods";
import MakePayment from "../../../components/tenant/MakePayment/MakePayment";
import StatePanel from "../../../components/common/StatePanel";
import paymentService from "../../../services/payment.service";

import "./Payments.css";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPayments() {
      try {
        setLoading(true);
        setError("");
        const { data } = await paymentService.getPayments();

        if (!isMounted) return;
        setPayments(data.payments || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load payments.");
        setPayments([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPayments();

    return () => {
      isMounted = false;
    };
  }, []);

  const summary = useMemo(() => {
    const total = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
    const paid = payments.filter((payment) => payment.status === "paid" || payment.status === "Paid").length;
    return {
      total,
      paid,
      outstanding: payments.filter((payment) => payment.status !== "paid" && payment.status !== "Paid").length,
    };
  }, [payments]);

  return (
    <DashboardLayout role="tenant">
      <div className="tenant-payments-page">

        <div className="page-header">

          <div>

            <h1>My Payments</h1>

            <p>
              Manage your rent payments,
              receipts and payment methods.
            </p>

          </div>

        </div>

        {loading ? (
          <StatePanel status="loading" title="Loading payments" message="Fetching your wallet activity." />
        ) : error ? (
          <StatePanel status="error" title="Unable to load payments" message={error} onRetry={() => window.location.reload()} />
        ) : (
          <PaymentSummary stats={summary} />
        )}

        <div className="payment-grid">

<UpcomingPayment payments={payments} />

          <PaymentMethods />

        </div>

        <PaymentChart payments={payments} />

        <PaymentHistory
          payments={payments}
          loading={loading}
        />

        <MakePayment payments={payments} />

      </div>
    </DashboardLayout>
  );
}