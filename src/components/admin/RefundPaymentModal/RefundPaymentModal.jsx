import { useState } from "react";
import "./RefundPaymentModal.css";

import paymentService from "../../../services/payment.service";

export default function RefundPaymentModal({
  payment,
  onClose,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  async function handleRefund() {
    try {
      setLoading(true);

      await paymentService.refundPayment(payment._id);

      alert("Payment refunded successfully.");

      if (onSuccess) {
        onSuccess();
      }

      onClose();
    } catch (error) {
      console.error(error);
      alert("Unable to refund payment.");
    } finally {
      setLoading(false);
    }
  }

  if (!payment) return null;

  return (
    <div className="refund-modal-overlay">

      <div className="refund-modal">

        <h2>Refund Payment</h2>

        <p>
          Are you sure you want to refund this payment?
        </p>

        <div className="refund-summary">

          <p>
            <strong>Transaction:</strong>{" "}
            {payment.transactionId || payment._id}
          </p>

          <p>
            <strong>User:</strong>{" "}
            {payment.user?.fullName ||
              payment.user?.name ||
              "-"}
          </p>

          <p>
            <strong>Amount:</strong>{" "}
            ₦{(payment.amount || 0).toLocaleString()}
          </p>

        </div>

        <div className="refund-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            className="refund-btn"
            onClick={handleRefund}
            disabled={loading}
          >
            {loading
              ? "Refunding..."
              : "Refund Payment"}
          </button>

        </div>

      </div>

    </div>
  );
}