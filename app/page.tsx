'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Home() {
  const [deferred, setDeferred] = useState<any>(null)
  const [installed, setInstalled] = useState(false)
  useEffect(() => {
    const handler = (e: any) => { e.preventDefault(); setDeferred(e) }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => setInstalled(true))
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])
  const installApp = async () => {
    if (deferred) { deferred.prompt(); await deferred.userChoice; setDeferred(null) }
    else { alert('To Download App:\n\nAndroid: Tap Menu (3 dots) > Add to Home Screen / Install App\n\niPhone: Tap Share > Add to Home Screen') }
  }
  const wa = 'https://wa.me/237651438848?text=Hello%20KHALIFA%20Tech%20Business%20Empire!%20I%20want%20a%20website/webapp'
  const tel = 'tel:+237651438848'
  const green = '#00A651', dark = '#064E2B'
  const card: any = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 18, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }
  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#fff', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid #eee' }}>
        <b style={{ color: green, fontSize: 18 }}>KHALIFA <span style={{ color: '#111' }}>Tech Business Empire</span></b>
        <a href={tel} style={{ background: '#111', color: '#fff', padding: '8px 14px', borderRadius: 20, textDecoration: 'none', fontWeight: 'bold', fontSize: 13 }}>📞 Call Now</a>
      </div>
      <div style={{ background: `linear-gradient(135deg, ${dark}, ${green})`, color: '#fff', padding: '35px 20px', textAlign: 'center', borderRadius: '0 0 28px 28px' }}>
        <span style={{ background: '#fff', color: green, padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 'bold' }}>⭐ PREMIUM • BUEA, CAMEROON • TRUSTED</span>
        <h1 style={{ fontSize: 34, lineHeight: 1.1, margin: '16px 0 8px' }}>We Build Websites & Webapps That Sell.</h1>
        <p style={{ opacity: 0.9 }}>For businesses in Cameroon & Africa. With or without MTN MoMo / Orange Money. Plus SEO to rank on Google.</p>
        <button onClick={installApp} style={{ background: '#fff', color: dark, padding: '14px 20px', border: 'none', borderRadius: 12, fontWeight: 'bold', width: '100%', marginTop: 15, fontSize: 15 }}>📱 {installed ? '✅ App Installed!' : 'DOWNLOAD APP - ADD TO HOME SCREEN'}</button>
        <a href={tel}><button style={{ background: '#111', color: '#fff', padding: '14px 20px', border: 'none', borderRadius: 12, fontWeight: 'bold', width: '100%', marginTop: 10, fontSize: 15 }}>📞 CALL NOW: 651 438 848</button></a>
        <a href={wa}><button style={{ background: '#25D366', color: '#fff', padding: '14px 20px', border: 'none', borderRadius: 12, fontWeight: 'bold', width: '100%', marginTop: 10, fontSize: 15 }}>💬 Order on WhatsApp</button></a>
      </div>
      <div style={{ padding: 18 }}>
        <h2>What We Sell</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={card}><h3>🌐 Business Website</h3><p>For shops, churches, schools, hotels. Fast, premium, Google-ready.</p><b style={{ color: green }}>From 75,000 FCFA</b></div>
          <div style={card}><h3>📱 Webapp / Business App</h3><p>Dashboard, login, orders, customers. Works like an app.</p><b style={{ color: green }}>From 150,000 FCFA</b></div>
          <div style={card}><h3>💰 With MoMo Integration</h3><p>MTN MoMo + Orange Money payment inside your website/app.</p><b style={{ color: green }}>+ 50,000 FCFA Add-on</b></div>
          <div style={card}><h3>🚀 SEO - Rank on Google</h3><p>Appear when people search in Buea, Douala, Yaoundé.</p><b style={{ color: green }}>From 35,000 FCFA / month</b></div>
        </div>
        <Link href="/dashboard"><button style={{ background: '#fff', border: `2px solid ${green}`, color: green, width: '100%', padding: 13, borderRadius: 12, fontWeight: 'bold', marginTop: 20 }}>View REAL Client Dashboard →</button></Link>
        <Link href="/pay"><button style={{ background: green, color: '#fff', width: '100%', padding: 13, border: 'none', borderRadius: 12, fontWeight: 'bold', marginTop: 10 }}>💰 Pay with MoMo (Sandbox)</button></Link>
      </div>
      <div style={{ background: dark, color: '#fff', padding: 20, textAlign: 'center' }}>
        <b>KHALIFA Tech Business Empire</b><p style={{ fontSize: 13, opacity: 0.85 }}>Buea, Cameroon<br/>WhatsApp / Tel: +237 651 438 848<br/>CEO: Khalifa James</p>
      </div>
      <div style={{ position: 'fixed', bottom: 15, left: 15, right: 15, display: 'flex', gap: 10, zIndex: 99 }}>
        <a href={tel} style={{ flex: 1, background: '#111', color: '#fff', textAlign: 'center', padding: '13px', borderRadius: 50, textDecoration: 'none', fontWeight: 'bold' }}>📞 Call</a>
        <button onClick={installApp} style={{ flex: 1, background: '#fff', color: '#111', border: '2px solid #111', padding: '13px', borderRadius: 50, fontWeight: 'bold' }}>📱 Download App</button>
        <a href={wa} style={{ flex: 1, background: '#25D366', color: '#fff', textAlign: 'center', padding: '13px', borderRadius: 50, textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp</a>
      </div>
    </div>
  )
}
