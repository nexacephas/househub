import "./BankSettings.css";

import { useState } from "react";
import { Landmark } from "lucide-react";
import toast from "react-hot-toast";

export default function BankSettings() {
  const [bank, setBank] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "Savings",
    swiftCode: "",
    routingNumber: "",
    payoutMethod: "Bank Transfer",
    defaultAccount: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } =
      e.target;

    setBank((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Future:
    // await settingsService.updateBank(bank);

    toast.success(
      "Bank details updated successfully."
    );
  }

  return (
    <form
      className="bank-settings"
      onSubmit={handleSubmit}
    >
      <div className="bank-header">

        <Landmark size={55} />

        <div>

          <h2>Bank Information</h2>

          <p>
            Update the account used for rent
            payouts and withdrawals.
          </p>

        </div>

      </div>

      <div className="bank-grid">

        <div className="form-group">

          <label>Bank Name</label>

          <input
            name="bankName"
            value={bank.bankName}
            onChange={handleChange}
            placeholder="GTBank"
          />

        </div>

        <div className="form-group">

          <label>Account Name</label>

          <input
            name="accountName"
            value={bank.accountName}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Account Number</label>

          <input
            name="accountNumber"
            value={bank.accountNumber}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Account Type</label>

          <select
            name="accountType"
            value={bank.accountType}
            onChange={handleChange}
          >
            <option>Savings</option>
            <option>Current</option>
            <option>Business</option>
          </select>

        </div>

        <div className="form-group">

          <label>SWIFT Code</label>

          <input
            name="swiftCode"
            value={bank.swiftCode}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Routing Number</label>

          <input
            name="routingNumber"
            value={bank.routingNumber}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="form-group">

        <label>Preferred Payout Method</label>

        <select
          name="payoutMethod"
          value={bank.payoutMethod}
          onChange={handleChange}
        >
          <option>Bank Transfer</option>
          <option>Paystack</option>
          <option>Flutterwave</option>
        </select>

      </div>

      <div className="checkbox-row">

        <input
          type="checkbox"
          id="defaultAccount"
          name="defaultAccount"
          checked={bank.defaultAccount}
          onChange={handleChange}
        />

        <label htmlFor="defaultAccount">
          Make this my default payout account
        </label>

      </div>

      <button
        type="submit"
        className="save-btn"
      >
        Save Bank Information
      </button>

    </form>
  );
}