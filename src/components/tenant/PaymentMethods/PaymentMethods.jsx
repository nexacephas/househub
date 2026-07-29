import "./PaymentMethods.css";

import {
  CreditCard,
  Landmark,
  Wallet,
  Star,
  Plus,
} from "lucide-react";

export default function PaymentMethods() {
  const methods = [
    {
      id: 1,
      type: "Visa Card",
      details: "**** **** **** 4589",
      icon: CreditCard,
      default: true,
    },
    {
      id: 2,
      type: "Bank Account",
      details: "GTBank •••• 2189",
      icon: Landmark,
      default: false,
    },
    {
      id: 3,
      type: "Paystack",
      details: "Linked Account",
      icon: Wallet,
      default: false,
    },
  ];

  return (
    <section className="payment-methods">

      <div className="methods-header">

        <div>

          <h2>Payment Methods</h2>

          <p>
            Manage your saved payment options.
          </p>

        </div>

      </div>

      <div className="methods-list">

        {methods.map((method) => {

          const Icon = method.icon;

          return (

            <div
              key={method.id}
              className="method-card"
            >

              <div className="method-left">

                <div className="method-icon">

                  <Icon size={22} />

                </div>

                <div>

                  <h4>{method.type}</h4>

                  <span>{method.details}</span>

                </div>

              </div>

              {method.default && (

                <div className="default-badge">

                  <Star size={14} />

                  Default

                </div>

              )}

            </div>

          );

        })}

      </div>

      <button className="add-method-btn">

        <Plus size={18} />

        Add Payment Method

      </button>

    </section>
  );
}