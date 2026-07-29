import "./PaymentReceipt.css";

import {
  Building2,
  Calendar,
  CreditCard,
  Home,
  User,
  BadgeCheck,
  Printer,
  Download,
} from "lucide-react";

export default function PaymentReceipt({
  payment,
}) {
  if (!payment) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="receipt-page">

      <div className="receipt-card">

        <div className="receipt-header">

          <div>

            <h1>HouseHub</h1>

            <p>
              Property Management Platform
            </p>

          </div>

          <BadgeCheck
            size={55}
            className="paid-icon"
          />

        </div>

        <div className="receipt-title">

          <h2>PAYMENT RECEIPT</h2>

          <span>
            Receipt No:
            {" "}
            #{payment.receiptNumber}
          </span>

        </div>

        <div className="receipt-grid">

          <div>

            <h4>

              <User size={18} />

              Tenant

            </h4>

            <p>
              {payment.tenant?.fullName}
            </p>

            <small>
              {payment.tenant?.email}
            </small>

          </div>

          <div>

            <h4>

              <Home size={18} />

              Property

            </h4>

            <p>
              {payment.property?.title}
            </p>

            <small>
              {payment.property?.address}
            </small>

          </div>

        </div>

        <div className="receipt-details">

          <div>

            <Calendar size={18} />

            <span>Date</span>

            <strong>
              {new Date(
                payment.createdAt
              ).toLocaleDateString()}
            </strong>

          </div>

          <div>

            <CreditCard size={18} />

            <span>Method</span>

            <strong>
              {payment.method}
            </strong>

          </div>

          <div>

            <Building2 size={18} />

            <span>Status</span>

            <strong className="paid">

              {payment.status}

            </strong>

          </div>

        </div>

        <div className="amount-box">

          <small>Total Paid</small>

          <h1>

            ₦
            {Number(
              payment.amount
            ).toLocaleString()}

          </h1>

        </div>

        <table className="receipt-table">

          <thead>

            <tr>

              <th>Description</th>

              <th>Amount</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>
                Monthly Rent
              </td>

              <td>
                ₦
                {Number(
                  payment.amount
                ).toLocaleString()}
              </td>

            </tr>

            {payment.securityDeposit && (

              <tr>

                <td>
                  Security Deposit
                </td>

                <td>
                  ₦
                  {Number(
                    payment.securityDeposit
                  ).toLocaleString()}
                </td>

              </tr>

            )}

          </tbody>

        </table>

        <div className="receipt-footer">

          <p>

            Thank you for your payment.

          </p>

          <p>

            This receipt was generated automatically by HouseHub.

          </p>

        </div>

        <div className="receipt-buttons">

          <button
            onClick={handlePrint}
          >

            <Printer size={18} />

            Print

          </button>

          <button>

            <Download size={18} />

            Download PDF

          </button>

        </div>

      </div>

    </div>
  );
}