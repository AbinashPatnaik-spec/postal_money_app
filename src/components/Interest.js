import React from "react";

export default function Interest({ balance }) {
  const interestRate = 5; // 5% annual interest rate
  const interestEarned = (balance * interestRate) / 100;
  return (
    <div className="container my-3">
      <div className="card text-bg-danger">
        <h5 className="card-header">Interest Calculator</h5>
        <div className="card-body">
          <p className="card-text"><strong>Current Balance:</strong> Rs.{balance.toFixed(2)}</p>
          <p className="card-text"><strong>Annual Interest Rate:</strong> {interestRate}%</p>
          <p className="card-text">
            <strong>Interest Earned:</strong> Rs.{interestEarned.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
