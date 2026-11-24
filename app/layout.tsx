export const metadata = { title: 'KHALIFA Tech Business Empire', description: 'Premium Websites, Webapps, MoMo & SEO', manifest: '/manifest.json', themeColor: '#00A651' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, fontFamily: 'sans-serif', background: '#fff', color: '#111' }}>{children}</body></html>)
}
