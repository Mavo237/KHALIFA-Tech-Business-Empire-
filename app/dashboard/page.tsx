'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { db } from '../../lib/firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
export default function Dashboard() {
  const [payments, setPayments] = useState<any[]>([])
  const [name, setName] = useState('Client')
  useEffect(() => {
    const n = localStorage.getItem('khalifa_name') || 'Client'
    setName(n)
    const q = query(collection(db, 'khalifa_payments'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      setPayments(list)
    })
    return () => unsub()
  }, [])
  const totalPaid = payments.reduce((s, p) => s + Number(p.amount || 0), 0)
  const totalProject = 250000
  const balance = totalProject - totalPaid
  const progress = Math.min(100, Math.round((totalPaid / totalProject) * 100))
  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <h2>Welcome back, {name} 👋</h2>
      <p style={{ color: '#00A651', fontWeight: 'bold' }}>🔥 FIREBASE LIVE DASHBOARD - Real Cloud</p>
      <div style={{ background: '#00A651', color: '#fff', padding: 20, borderRadius: 16 }}>
        <p>Your Project: Business Website + MoMo</p>
        <h1>{progress}% Paid</h1>
        <div style={{ background: 'rgba(255,255,255,0.3)', height: 10, borderRadius: 5 }}><div style={{ background: '#fff', width: `${progress}%`, height: 10, borderRadius: 5 }}></div></div>
        <p style={{ marginTop: 10 }}>Paid: {totalPaid.toLocaleString()} FCFA • Balance: {balance.toLocaleString()} FCFA • Total: {payments.length}</p>
      </div>
      <h3 style={{ marginTop: 20 }}>💰 Payment History (FIREBASE - REAL)</h3>
      {payments.length === 0 ? (
        <p style={{ background: '#F9FAFB', padding: 15, borderRadius: 12 }}>No payment yet for Firebase. Press Pay below to test.</p>
      ) : payments.map((p) => (
        <div key={p.id} style={{ background: '#fff', border: '1px solid #eee', padding: 14, borderRadius: 12, marginBottom: 10 }}>
          <b>{p.amount} FCFA - {p.method}</b><br/>
          <span style={{ fontSize: 13 }}>📱 {p.phone} • {p.status} • {p.date}</span><br/>
          {p.ref && <span style={{ fontSize: 11, color: '#666' }}>Ref: {p.ref}</span>}
        </div>
      ))}
      <Link href="/pay"><button style={{ background: '#00A651', color: '#fff', padding: 14, width: '100%', border: 'none', borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>Pay Balance with MoMo</button></Link>
      <a href="tel:+237651438848"><button style={{ background: '#111', color: '#fff', padding: 14, width: '100%', border: 'none', borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>📞 Call Khalifa: 651 438 848</button></a>
      <Link href="/"><button style={{ background: '#F3F4F6', padding: 13, width: '100%', border: 'none', borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>← Back Home</button></Link>
    </div>
  )
}
