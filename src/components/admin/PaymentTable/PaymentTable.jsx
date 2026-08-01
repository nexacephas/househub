import "./PaymentTable.css";

import {
  Eye,
  RotateCcw,
  CreditCard,
} from "lucide-react";

export default function PaymentTable({
  payments = [],
  loading,
  onSelect,
  onRefund,
}) {

  if (loading) {
    return (
      <div className="payment-table-loading">
        Loading payments...
      </div>
    );
  }


  if (!payments.length) {
    return (
      <div className="payment-table-loading">
        No payments found.
      </div>
    );
  }


  return (
    <div className="payment-table-wrapper">

      <table className="payment-table">

        <thead>

          <tr>

            <th>Transaction</th>

            <th>User</th>

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

                <div className="transaction-cell">

                  <CreditCard size={16}/>

                  <span>
                    {payment.transactionId ||
                     payment._id?.slice(-8)}
                  </span>

                </div>

              </td>



              <td>

                {payment.user?.fullName ||
                 payment.user?.name ||
                 "-"}

              </td>



              <td>

                {payment.property?.title ||
                 "-"}

              </td>



              <td>

                <strong>
                  ₦
                  {(payment.amount || 0)
                    .toLocaleString()}
                </strong>

              </td>



              <td>

                {payment.method || "-"}

              </td>



              <td>

                <span
                  className={
                    `payment-status ${
                    (payment.status || "")
                    .toLowerCase()
                    }`
                  }
                >

                  {payment.status}

                </span>

              </td>



              <td>

                {payment.createdAt
                  ? new Date(
                      payment.createdAt
                    ).toLocaleDateString()
                  : "-"
                }

              </td>



              <td>

                <div className="payment-actions">


                  <button
                    className="view-payment-btn"
                    onClick={() =>
                      onSelect(payment)
                    }
                  >

                    <Eye size={17}/>

                  </button>



                  {payment.status === "Successful" && (

                    <button
                      className="refund-payment-btn"
                      onClick={() =>
                        onRefund(payment)
                      }
                    >

                      <RotateCcw size={17}/>

                    </button>

                  )}


                </div>


              </td>


            </tr>

          ))}


        </tbody>


      </table>


    </div>
  );
}