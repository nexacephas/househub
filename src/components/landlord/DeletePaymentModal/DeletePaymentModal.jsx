import "./DeletePaymentModal.css";

import { Trash2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import paymentService from "../../../services/payment.service";

export default function DeletePaymentModal({
  open,
  payment,
  onClose,
  reload,
}) {
  const [loading, setLoading] = useState(false);

  if (!open || !payment) return null;

  async function handleDelete() {
    try {
      setLoading(true);

      await paymentService.deletePayment(
        payment._id
      );

      toast.success(
        "Payment deleted successfully."
      );

      reload();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete payment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="delete-payment-overlay">

      <div className="delete-payment-modal">

        <div className="delete-icon">

          <Trash2 size={42} />

        </div>

        <h2>Delete Payment?</h2>

        <p>
          This action cannot be undone.
          <br />
          The payment record for
          <strong>
            {" "}
            {payment.tenant?.fullName}
          </strong>{" "}
          will be permanently deleted.
        </p>

        <div className="delete-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
            disabled={loading}
          >
            <X size={18} />
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
            disabled={loading}
          >
            <Trash2 size={18} />

            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}