'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [deferred, setDeferred] = useState<any>(null)
  useEffect(() => {
    const handler = (e: any) => { e.preventDefault(); setDeferred(e) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])
  const installApp = async () => {
    if (deferred) { deferred.prompt(); await deferred.userChoice; setDeferred(null) }
    else { alert('On iPhone: Tap Share > Add to Home Screen. On Android: Tap Menu (3 dots) > Add to Home Screen / Install App') }
  }
  const wa = 'https://wa.me/237651438848?text=Hello%20KHALIFA%20Tech%20Business%20Empire!%20I%20want%20a%20website/webapp'
  const green = '#00A651', dark = '#064E2B'
  const card: any = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 18, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }

  return (
    <div>
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#fff', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid #eee' }}>
        <b style={{ color: green, fontSize: 18 }}>KHALIFA <span style={{ color: '#111' }}>Tech Business Empire</span></b>
        <a href={wa} style={{ background: green, color: '#fff', padding: '8px 14px', borderRadius: 20, textDecoration: 'none', fontWeight: 'bold', fontSize: 13 }}>WhatsApp Us</a>
      </div>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${dark}, ${green})`, color: '#fff', padding: '35px 20px', textAlign: 'center', borderRadius: '0 0 28px 28px' }}>
        <span style={{ background: '#fff', color: green, padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 'bold' }}>⭐ PREMIUM • BUEA, CAMEROON • TRUSTED</span>
        <h1 style={{ fontSize: 34, lineHeight: 1.1, margin: '16px 0 8px' }}>We Build Websites & Webapps That Sell.</h1>
        <p style={{ opacity: 0.9 }}>For businesses in Cameroon & Africa. With or without MTN MoMo / Orange Money. Plus SEO to rank on Google.</p>
        <button onClick={installApp} style={{ background: '#fff', color: dark, padding: '14px 20px', border: 'none', borderRadius: 12, fontWeight: 'bold', width: '100%', marginTop: 15, fontSize: 15 }}>📱 ADD TO HOME SCREEN - INSTALL APP</button>
        <a href={wa}><button style={{ background: '#25D366', color: '#fff', padding: '14px 20px', border: 'none', borderRadius: 12, fontWeight: 'bold', width: '100%', marginTop: 10, fontSize: 15 }}>💬 Order on WhatsApp: 651 438 848</button></a>
        <p style={{ fontSize: 12, marginTop: 10 }}>📞 Call / WhatsApp: +237 651 438 848</p>
      </div>

      {/* SERVICES */}
      <div style={{ padding: 18 }}>
        <h2>What We Sell</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={card}><h3>🌐 Business Website</h3><p>For shops, churches, schools, hotels, lawyers. Fast, premium, Google-ready.</p><b style={{ color: green }}>From 75,000 FCFA</b></div>
          <div style={card}><h3>📱 Webapp / Business App</h3><p>Dashboard, login, orders, customers. Works like an app on phone.</p><b style={{ color: green }}>From 150,000 FCFA</b></div>
          <div style={card}><h3>💰 With MoMo Integration</h3><p>MTN MoMo + Orange Money payment inside your website/app. Auto receive money.</p><b style={{ color: green }}>+ 50,000 FCFA Add-on</b></div>
          <div style={card}><h3>🚀 SEO - Rank on Google</h3><p>We make your business appear when people search in Buea, Douala, Yaoundé.</p><b style={{ color: green }}>From 35,000 FCFA / month</b></div>
        </div>

        {/* PRICING */}
        <h2 style={{ marginTop: 25 }}>Simple Pricing</h2>
        <div style={{ background: green, color: '#fff', borderRadius: 18, padding: 20 }}>
          <h3 style={{ margin: 0 }}>STARTER - 75,000 FCFA</h3><p>1-5 Pages Website • WhatsApp Button • 7 Days Delivery • Free Domain Setup</p>
          <a href={wa}><button style={{ background: '#fff', color: green, width: '100%', padding: 12, border: 'none', borderRadius: 10, fontWeight: 'bold' }}>Choose Starter</button></a>
        </div>
        <div style={{ background: '#111', color: '#fff', borderRadius: 18, padding: 20, marginTop: 12 }}>
          <h3 style={{ margin: 0 }}>EMPIRE - 250,000 FCFA ⭐ MOST POPULAR</h3><p>Full Webapp + MoMo Payment + SEO + Admin Dashboard + 1 Year Support</p>
          <a href={wa}><button style={{ background: green, color: '#fff', width: '100%', padding: 12, border: 'none', borderRadius: 10, fontWeight: 'bold' }}>Choose Empire</button></a>
        </div>

        {/* WHY US */}
        <h2 style={{ marginTop: 25 }}>Why KHALIFA?</h2>
        <p>✅ Pay in Installments • ✅ MoMo / Orange Money Accepted • ✅ Fast Delivery 7-14 Days • ✅ You Own Everything • ✅ Support in English & French</p>

        <Link href="/dashboard"><button style={{ background: '#fff', border: `2px solid ${green}`, color: green, width: '100%', padding: 13, borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>View Client Dashboard Demo →</button></Link>
        <Link href="/login"><button style={{ background: '#F3F4F6', border: 'none', width: '100%', padding: 13, borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>Client Login</button></Link>
      </div>

      {/* FOOTER */}
      <div style={{ background: dark, color: '#fff', padding: 20, textAlign: 'center' }}>
        <b>KHALIFA Tech Business Empire</b><p style={{ fontSize: 13, opacity: 0.85 }}>Buea, Southwest Region, Cameroon<br />WhatsApp / Tel: +237 651 438 848<br />CEO: Khalifa James</p>
        <a href={wa} style={{ color: '#fff' }}>Chat on WhatsApp →</a>
      </div>

      {/* FLOATING WHATSAPP */}
      <a href={wa} style={{ position: 'fixed', bottom: 20, right: 20, background: '#25D366', color: '#fff', width: 58, height: 58, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>💬</a>
    </div>
  )
}
