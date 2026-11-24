export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome back, Client</h2>
      <div style={{ background: '#00A651', color: '#fff', padding: 20, borderRadius: 16 }}>
        <p>Your Project: Business Website + MoMo</p>
        <h1>60% Done</h1>
        <div style={{ background: 'rgba(255,255,255,0.3)', height: 10, borderRadius: 5 }}><div style={{ background: '#fff', width: '60%', height: 10, borderRadius: 5 }}></div></div>
      </div>
      <div style={{ background: '#F9FAFB', padding: 15, borderRadius: 14, marginTop: 15, border: '1px solid #eee' }}>
        <p>Balance to Pay: <b>50,000 FCFA</b></p>
        <a href="https://wa.me/237651438848?text=I%20want%20to%20pay%20my%20balance"><button style={{ background: '#00A651', color: '#fff', padding: 12, width: '100%', border: 'none', borderRadius: 10, fontWeight: 'bold' }}>Pay with MTN MoMo / Orange Money</button></a>
        <p style={{ textAlign: 'center', fontSize: 12 }}>Questions? Call 651 438 848</p>
      </div>
    </div>
  )
}
