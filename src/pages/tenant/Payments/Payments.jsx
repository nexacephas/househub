import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import PaymentSummary from "../../../components/tenant/PaymentSummary/PaymentSummary";
import UpcomingPayment from "../../../components/tenant/UpcomingPayment/UpcomingPayment";
import PaymentChart from "../../../components/tenant/PaymentChart/PaymentChart";
import PaymentHistory from "../../../components/tenant/PaymentHistory/PaymentHistory";
import PaymentMethods from "../../../components/tenant/PaymentMethods/PaymentMethods";
import MakePayment from "../../../components/tenant/MakePayment/MakePayment";

import "./Payments.css";

export default function Payments() {
  const [payments] = useState([]);

  const [loading] = useState(false);

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

        <PaymentSummary />

        <div className="payment-grid">

          <UpcomingPayment />

          <PaymentMethods />

        </div>

        <PaymentChart />

        <PaymentHistory
          payments={payments}
          loading={loading}
        />

        <MakePayment />

      </div>
    </DashboardLayout>
  );
}