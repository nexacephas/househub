import { useEffect, useState } from "react";

import PaymentStats from "../../../components/admin/PaymentStats/PaymentStats";
import PaymentFilters from "../../../components/admin/PaymentFilters/PaymentFilters";
import PaymentTable from "../../../components/admin/PaymentTable/PaymentTable";
import PaymentDetails from "../../../components/admin/PaymentDetails/PaymentDetails";
import RefundPaymentModal from "../../../components/admin/RefundPaymentModal/RefundPaymentModal";

import paymentService from "../../../services/payment.service";

import "./Payments.css";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [showRefund, setShowRefund] =
    useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    method: "",
    date: "",
  });

  async function loadPayments() {
    try {
      setLoading(true);

      const { data } =
        await paymentService.getPayments();

      setPayments(data.payments || []);
    } catch (error) {
      console.error(error);
      setPayments([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPayments();
  }, []);

  return (
    <div className="admin-payments-page">

      <div className="page-header">

        <div>

          <h1>Payments</h1>

          <p>
            Manage all payments and transactions.
          </p>

        </div>

      </div>

      <PaymentStats />

      <PaymentFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="payments-content">

        <div className="payments-table">

          <PaymentTable
            payments={payments}
            loading={loading}
            onSelect={setSelectedPayment}
            onRefund={(payment) => {
              setSelectedPayment(payment);
              setShowRefund(true);
            }}
          />

        </div>

        {selectedPayment && (

          <div className="payment-details-panel">

            <PaymentDetails
              payment={selectedPayment}
            />

          </div>

        )}

      </div>

      {showRefund && (

        <RefundPaymentModal
          payment={selectedPayment}
          onClose={() => setShowRefund(false)}
        />

      )}

    </div>
  );
}

export default Payments;