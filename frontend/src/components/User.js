import React, { useState } from "react";
import axios from "axios";

export default function User() {
  const [username, setUsername] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");
  const handleDeposit = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/users/deposit`, {
        username,
        depositAmount: parseFloat(depositAmount),
      });
      setBalance(response.data.balance);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleGetBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/balance/${username}`
      );
      setBalance(response.data.balance);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card text-bg-primary">
            <div className="card-header">
              <h4>Deposit Money</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                (Note: Please enter the username and click on "Show Balance" to
                check the balance. If that username already exists or deposited
                money. Interest Rate=5%.)
              </p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="form-control my-2"
                type="number"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                required
              />
              <button className="btn btn-warning my-2" onClick={handleDeposit}>
                Deposit
              </button>
              <button
                className="btn btn-warning my-2 mx-2"
                onClick={handleGetBalance}
              >
                Show Balance
              </button>
            </div>
          </div>
          {balance !== null && (
            <div className="card text-bg-primary my-3">
              <div className="card-header">
                <h4>Available Balance</h4>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Username:</strong> {username}</p>
                <p className="card-text">
                  <strong>Total Balance(with interest):</strong> Rs.{balance.toFixed(2)}
                </p>
              </div>
            </div>
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
