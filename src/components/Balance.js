import React from "react";

export default function Balance({ balance }) {
  return (
    <div className="container my-3">
      <div className="card text-bg-danger">
        <h5 className="card-header">Current Balance</h5>
        <div className="card-body">
          <p className="card-text">Rs.{balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
