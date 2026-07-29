import { useState } from "react";
import "./MakePayment.css";

import {
  CreditCard,
  ShieldCheck,
  Wallet,
  TicketPercent,
} from "lucide-react";

export default function MakePayment() {
  const [method, setMethod] = useState("Paystack");
  const [promoCode, setPromoCode] = useState("");

  return (
    <section className="make-payment">

      <div className="payment-header">

        <h2>Make Payment</h2>

        <p>
          Pay your rent securely using your preferred
          payment method.
        </p>

      </div>

      <div className="amount-card">

        <small>Amount Due</small>

        <h1>₦750,000</h1>

        <span>Due on August 15, 2026</span>

      </div>

      <div className="payment-field">

        <label>

          <Wallet size={18} />

          Payment Method

        </label>

        <select
          value={method}
          onChange={(e) =>
            setMethod(e.target.value)
          }
        >

          <option>Paystack</option>

          <option>Visa Card</option>

          <option>Mastercard</option>

          <option>Bank Transfer</option>

        </select>

      </div>

      <div className="payment-field">

        <label>

          <TicketPercent size={18} />

          Promo Code

        </label>

        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) =>
            setPromoCode(e.target.value)
          }
        />

      </div>

      <button className="pay-button">

        <CreditCard size={20} />

        Pay with {method}

      </button>

      <div className="payment-security">

        <ShieldCheck size={18} />

        <span>
          Payments are securely processed using
          encrypted technology.
        </span>

      </div>

    </section>
  );
}