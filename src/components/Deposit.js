import React, { useState } from "react";

export default function Deposit({ onDeposit }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      onDeposit(Number(amount));
      setAmount("");
    }
  };
  return (
    <div className="container">
      <div className="card text-bg-danger">
        <h5 className="card-header">Deposit Money</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to deposit"
                required
              />
            <button className="btn btn-warning my-2" type="submit">Deposit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
