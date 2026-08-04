import "./PaymentHistory.css";

import {
  Download,
  CheckCircle,
  Clock,
  CreditCard,
} from "lucide-react";

export default function PaymentHistory({
  payments = [],
  loading = false,
}) {
  const records = payments.map((payment) => ({
    id: payment._id,
    receipt: payment.reference || payment._id,
    date: payment.createdAt
      ? new Date(payment.createdAt).toLocaleDateString()
      : "—",
    amount: Number(payment.amount || 0),
    method: payment.method || "Card",
    status: payment.status === "paid" || payment.status === "Paid" ? "Paid" : "Pending",
  }));

  return (
    <section className="payment-history">

      <div className="history-header">

        <div>

          <h2>Payment History</h2>

          <p>
            View all your rent payment records.
          </p>

        </div>

      </div>

      <div className="history-table">

        <table>

          <thead>

            <tr>

              <th>Receipt</th>

              <th>Date</th>

              <th>Amount</th>

              <th>Method</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan="6"
                  className="empty"
                >
                  Loading payments...
                </td>

              </tr>

            ) : records.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="empty"
                >
                  No payment history found.
                </td>

              </tr>

            ) : (

              records.map((payment) => (

                <tr key={payment.id}>

                  <td>{payment.receipt}</td>

                  <td>{payment.date}</td>

                  <td>
                    ₦
                    {payment.amount.toLocaleString()}
                  </td>

                  <td>

                    <span className="method">

                      <CreditCard size={16} />

                      {payment.method}

                    </span>

                  </td>

                  <td>

                    {payment.status ===
                    "Paid" ? (

                      <span className="status paid">

                        <CheckCircle
                          size={16}
                        />

                        Paid

                      </span>

                    ) : (

                      <span className="status pending">

                        <Clock size={16} />

                        Pending

                      </span>

                    )}

                  </td>

                  <td>

                    <button className="download-btn">

                      <Download size={16} />

                      Receipt

                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}