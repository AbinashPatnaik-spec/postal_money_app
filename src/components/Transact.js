import React, { useState } from "react";
import Deposit from "./Deposit";
import Balance from "./Balance";
import Interest from "./Interest";

export default function Transact() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
    setTransactions([
      ...transactions,
      { type: "deposit", amount, date: new Date().toLocaleDateString() },
    ]);
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6">
          <Deposit onDeposit={handleDeposit} />
          <Balance balance={balance} />
          <Interest balance={balance} />
        </div>
        <div className="col-md-6">
          <div className="card text-bg-danger">
            <h5 className="card-header">Transaction History</h5>
            <div className="card-body">
              <table className="table table-danger">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Amount(Rs.)</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
