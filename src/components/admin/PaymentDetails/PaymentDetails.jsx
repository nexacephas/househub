import "./PaymentDetails.css";

import {
  Receipt,
  User,
  Building2,
  CreditCard,
  Calendar,
  BadgeCheck,
} from "lucide-react";


export default function PaymentDetails({
  payment,
}) {

  if (!payment) {
    return (
      <div className="payment-details-empty">
        Select a payment to view details.
      </div>
    );
  }


  return (
    <div className="payment-details">


      <div className="details-header">

        <Receipt size={22}/>

        <h2>
          Payment Details
        </h2>

      </div>



      <div className="detail-section">

        <h3>
          <CreditCard size={18}/>
          Transaction
        </h3>


        <p>
          <strong>ID:</strong>{" "}
          {payment.transactionId ||
            payment._id}
        </p>


        <p>
          <strong>Amount:</strong>{" "}
          ₦
          {(payment.amount || 0)
            .toLocaleString()}
        </p>


        <p>

          <strong>Status:</strong>

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

        </p>


      </div>




      <div className="detail-section">


        <h3>
          <User size={18}/>
          User
        </h3>


        <p>
          <strong>Name:</strong>{" "}
          {payment.user?.fullName ||
            payment.user?.name ||
            "-"}
        </p>


        <p>
          <strong>Email:</strong>{" "}
          {payment.user?.email ||
            "-"}
        </p>


      </div>




      <div className="detail-section">


        <h3>
          <Building2 size={18}/>
          Property
        </h3>


        <p>
          <strong>
            Property:
          </strong>{" "}
          {payment.property?.title ||
            "-"}
        </p>


        <p>
          <strong>
            Address:
          </strong>{" "}
          {payment.property?.address ||
            "-"}
        </p>


      </div>




      <div className="detail-section">


        <h3>
          <BadgeCheck size={18}/>
          Payment Info
        </h3>


        <p>
          <strong>
            Method:
          </strong>{" "}
          {payment.method || "-"}
        </p>


        <p>
          <strong>
            Reference:
          </strong>{" "}
          {payment.reference || "-"}
        </p>


      </div>




      <div className="detail-section">


        <h3>
          <Calendar size={18}/>
          Dates
        </h3>


        <p>

          Created:

          {" "}

          {
            payment.createdAt
            ? new Date(
                payment.createdAt
              ).toLocaleString()
            : "-"
          }

        </p>


        <p>

          Updated:

          {" "}

          {
            payment.updatedAt
            ? new Date(
                payment.updatedAt
              ).toLocaleString()
            : "-"
          }

        </p>


      </div>



    </div>
  );
}