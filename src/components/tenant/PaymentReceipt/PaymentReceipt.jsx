import "./PaymentReceipt.css";

import {
  X,
  Download,
  Printer,
  CheckCircle2,
} from "lucide-react";

export default function PaymentReceipt({
  open = true,
  onClose = () => {},
  payment = {
    receipt: "HH-2026-001",
    tenant: "Cephas Johnson",
    property: "Luxury 3 Bedroom Apartment",
    date: "01 January 2026",
    amount: 750000,
    method: "Paystack",
    reference: "PSK-98237827382",
    status: "Paid",
  },
}) {
  if (!open) return null;

  return (
    <div className="receipt-overlay">

      <div className="receipt-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="receipt-header">

          <h1>HouseHub</h1>

          <p>Payment Receipt</p>

        </div>

        <div className="receipt-success">

          <CheckCircle2 size={60} />

          <h2>Payment Successful</h2>

        </div>

        <div className="receipt-info">

          <div className="receipt-row">
            <span>Receipt No.</span>
            <strong>{payment.receipt}</strong>
          </div>

          <div className="receipt-row">
            <span>Tenant</span>
            <strong>{payment.tenant}</strong>
          </div>

          <div className="receipt-row">
            <span>Property</span>
            <strong>{payment.property}</strong>
          </div>

          <div className="receipt-row">
            <span>Payment Date</span>
            <strong>{payment.date}</strong>
          </div>

          <div className="receipt-row">
            <span>Payment Method</span>
            <strong>{payment.method}</strong>
          </div>

          <div className="receipt-row">
            <span>Reference</span>
            <strong>{payment.reference}</strong>
          </div>

          <div className="receipt-row total">
            <span>Amount Paid</span>
            <strong>
              ₦{payment.amount.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="receipt-actions">

          <button className="download-receipt">

            <Download size={18} />

            Download PDF

          </button>

          <button
            className="print-receipt"
            onClick={() => window.print()}
          >

            <Printer size={18} />

            Print

          </button>

        </div>

      </div>

    </div>
  );
}