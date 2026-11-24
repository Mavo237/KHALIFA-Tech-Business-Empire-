'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login() {
  const [email, setEmail] = useState('')
  const router = useRouter()
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ color: '#00A651' }}>Client Login</h2>
      <p>KHALIFA Tech Business Empire</p>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" style={{ width: '100%', padding: 12, borderRadius: 10, marginBottom: 10, border: '1px solid #ddd' }} />
      <button onClick={() => router.push('/dashboard')} style={{ width: '100%', background: '#00A651', color: '#fff', padding: 13, border: 'none', borderRadius: 10, fontWeight: 'bold' }}>Login</button>
      <a href="https://wa.me/237651438848"><p style={{ textAlign: 'center', marginTop: 15 }}>Need help? WhatsApp 651 438 848</p></a>
    </div>
  )
}
