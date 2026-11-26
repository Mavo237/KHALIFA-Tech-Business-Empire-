export async function POST(req: Request) {
  try {
    const { phone, amount } = await req.json()
    const subKey = process.env.MOMO_SUBSCRIPTION_KEY
    const apiUser = process.env.MOMO_API_USER
    const apiKey = process.env.MOMO_API_KEY
    if (!subKey || !apiUser || !apiKey) {
      return Response.json({ error: 'MoMo keys never set for Render Environment' }, { status: 500 })
    }
    let cleanPhone = phone.replace(/\s+/g, '')
    if (cleanPhone.startsWith('0')) cleanPhone = cleanPhone.slice(1)
    if (!cleanPhone.startsWith('237')) cleanPhone = '237' + cleanPhone
    const auth = Buffer.from(`${apiUser}:${apiKey}`).toString('base64')
    const tokenRes = await fetch('https://sandbox.momodeveloper.mtn.com/collection/token/', {
      method: 'POST',
      headers: { 'Authorization': `Basic ${auth}`, 'Ocp-Apim-Subscription-Key': subKey, 'Content-Type': 'application/json' }
    })
    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) {
      return Response.json({ error: 'MTN Token failed', detail: tokenData }, { status: 500 })
    }
    const token = tokenData.access_token
    const referenceId = crypto.randomUUID()
    const payRes = await fetch('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'X-Reference-Id': referenceId, 'X-Target-Environment': 'sandbox', 'Ocp-Apim-Subscription-Key': subKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: String(amount),
        currency: 'XAF',
        externalId: `KHALIFA-${Date.now()}`,
        payer: { partyIdType: 'MSISDN', partyId: cleanPhone },
        payerMessage: 'Payment to KHALIFA Tech Business Empire',
        payeeNote: 'KHALIFA Website/Webapp Payment'
      })
    })
    if (payRes.status !== 202) {
      const err = await payRes.text()
      return Response.json({ error: 'RequestToPay failed', detail: err }, { status: 500 })
    }
    return Response.json({ success: true, referenceId, message: 'Check your phone, approve MoMo PIN prompt' })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const referenceId = searchParams.get('ref')
    const subKey = process.env.MOMO_SUBSCRIPTION_KEY
    const apiUser = process.env.MOMO_API_USER
    const apiKey = process.env.MOMO_API_KEY
    const auth = Buffer.from(`${apiUser}:${apiKey}`).toString('base64')
    const tokenRes = await fetch('https://sandbox.momodeveloper.mtn.com/collection/token/', {
      method: 'POST',
      headers: { 'Authorization': `Basic ${auth}`, 'Ocp-Apim-Subscription-Key': subKey!, 'Content-Type': 'application/json' }
    })
    const tokenData = await tokenRes.json()
    const statusRes = await fetch(`https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${referenceId}`, {
      headers: { 'Authorization': `Bearer ${tokenData.access_token}`, 'X-Target-Environment': 'sandbox', 'Ocp-Apim-Subscription-Key': subKey! }
    })
    const data = await statusRes.json()
    return Response.json(data)
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
