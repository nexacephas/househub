import "./PaymentTable.css";

import { Link } from "react-router-dom";

import {
  Eye,
  Download,
  Trash2,
  CreditCard,
} from "lucide-react";

export default function PaymentTable({
  payments = [],
  loading = false,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="payment-loading">
        Loading payments...
      </div>
    );
  }

  if (!payments.length) {
    return (
      <div className="payment-empty">

        <CreditCard size={60} />

        <h2>No Payments Found</h2>

        <p>
          There are no payment records yet.
        </p>

      </div>
    );
  }

  return (
    <div className="payment-table-wrapper">

      <table className="payment-table">

        <thead>

          <tr>

            <th>Receipt</th>

            <th>Tenant</th>

            <th>Property</th>

            <th>Amount</th>

            <th>Method</th>

            <th>Status</th>

            <th>Date</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr key={payment._id}>

              <td>
                #{payment.receiptNumber}
              </td>

              <td>
                {payment.tenant?.fullName}
              </td>

              <td>
                {payment.property?.title}
              </td>

              <td>
                ₦{Number(
                  payment.amount
                ).toLocaleString()}
              </td>

              <td>
                {payment.method}
              </td>

              <td>

                <span
                  className={`payment-status ${payment.status}`}
                >
                  {payment.status}
                </span>

              </td>

              <td>
                {new Date(
                  payment.createdAt
                ).toLocaleDateString()}
              </td>

              <td>

                <div className="payment-actions">

                  <Link
                    to={`/landlord/payments/${payment._id}`}
                  >
                    <Eye size={18} />
                  </Link>

                  <button
                    type="button"
                  >
                    <Download size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onDelete(payment)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

