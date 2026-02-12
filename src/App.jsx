import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("15");
  const [output, setOutput] = useState("");

  function calculate(balance, rate, term) {
    const P = Number(balance);
    const annualRate = Number(rate);

    if (!P || !annualRate || !term) {
      setOutput("");
      return;
    }

    const r = annualRate / 100 / 12;
    const n = Number(term) * 12;

    const M = P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

    setOutput(`$${M.toFixed(2)} is your payment`);
  }

  return (
    <main className="app-shell">
      <section className="calculator-card" aria-label="Mortgage calculator form">
        <h1>Mortgage Calculator</h1>

        <div className="form-field">
          <label>Loan Balance</label>
          <input
            type="number"
            data-testid="balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            data-testid="rate"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Loan Term (years)</label>
          <select
            data-testid="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </div>

        <button data-testid="submit" onClick={() => calculate(balance, rate, term)}>
          Calculate
        </button>

        <div id="output" data-testid="output">
          {output}
        </div>
      </section>
    </main>
  );
}

export default App;
