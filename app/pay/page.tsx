"use client";
import { useState } from "react";

export default function PayPage() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  async function payWithMoMo() {
    if (!phone || !amount) {
      alert("Put phone number and amount first");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/momo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount }),
      });
      const data = await res.json();
      alert(data.message || "Check your phone to approve MoMo payment");
    } catch (e) {
      alert("Payment failed, try again");
    }
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 20 }}>
      <h1>Pay with MoMo</h1>
      <p>KHALIFA Tech Business Empire</p>
      <input
        placeholder="MTN MoMo Number e.g 651438848"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: 12, marginBottom: 12 }}
      />
      <input
        placeholder="Amount in XAF e.g 5000"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: "100%", padding: 12, marginBottom: 12 }}
      />
      <button
        onClick={payWithMoMo}
        disabled={loading}
        style={{ width: "100%", padding: 14, background: "#FFCC00", fontWeight: "bold", border: "none" }}
      >
        {loading ? "Processing..." : "Pay with MoMo"}
      </button>
      <br /><br />
      <a href="/">← Back to Home</a>
    </div>
  );
}
