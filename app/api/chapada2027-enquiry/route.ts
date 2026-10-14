import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── Chapada 2027 Enquiry API Route ───────────────────────────────────────────
//
// Sends enquiry submissions to cheriethairj@gmail.com via Gmail SMTP.
//
// Required Vercel environment variables:
//   GMAIL_USER  — the Gmail address used to send
//   GMAIL_PASS  — a Gmail App Password

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, whatsapp, country, message } = body

    if (!name || !email || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_PASS

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      })

      await transporter.sendMail({
        from: `"CherieThai Chapada 2027" <${gmailUser}>`,
        to: 'cheriethairj@gmail.com',
        replyTo: email,
        subject: `Chapada 2027 Enquiry — ${name}`,
        text: `
Chapada Diamantina Thai Bodywork 2027
5th Edition · 26 Sept – 3 Oct 2027
────────────────────────────────────

Name:       ${name}
Email:      ${email}
WhatsApp:   ${whatsapp || '(not provided)'}
Country:    ${country}
Message:    ${message || '(none)'}

Submitted:  ${new Date().toISOString()}
        `.trim(),
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; color: #2A3329; background: #FAF8F4; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: #ffffff; border: 1px solid #e8e0d4; }
    .header { background: #2A3329; padding: 32px 40px; }
    .header p { color: rgba(220,201,160,0.7); font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 8px; }
    .header h1 { color: #F5F0E8; font-size: 22px; font-weight: 300; margin: 0; }
    .header small { color: rgba(220,201,160,0.5); font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; }
    .body { padding: 36px 40px; }
    .row { display: flex; padding: 12px 0; border-bottom: 1px solid #f0ebe3; }
    .label { font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: #AAB6A2; min-width: 130px; padding-top: 2px; }
    .value { font-size: 14px; color: #3D4A40; flex: 1; }
    .message-block { margin-top: 20px; padding: 16px 20px; background: #FAF8F4; border-left: 2px solid #DCC9A0; }
    .footer { padding: 20px 40px; border-top: 1px solid #f0ebe3; }
    .footer p { font-family: Arial, sans-serif; font-size: 9px; color: #AAB6A2; letter-spacing: 0.12em; margin: 0; }
    a { color: #4B5A4F; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p>CherieThai Institute · 5th Edition</p>
      <h1>Chapada 2027 Enquiry</h1>
      <small>26 Sept – 3 Oct 2027 · Canto da Seriema · Bahia</small>
    </div>
    <div class="body">
      <div class="row">
        <span class="label">Name</span>
        <span class="value">${name}</span>
      </div>
      <div class="row">
        <span class="label">Email</span>
        <span class="value"><a href="mailto:${email}">${email}</a></span>
      </div>
      <div class="row">
        <span class="label">WhatsApp</span>
        <span class="value">${whatsapp || '—'}</span>
      </div>
      <div class="row">
        <span class="label">Country</span>
        <span class="value">${country}</span>
      </div>
      ${message ? `
      <div class="message-block">
        <span class="label" style="display:block;margin-bottom:8px;">Message</span>
        <span class="value">${message.replace(/\n/g, '<br />')}</span>
      </div>` : ''}
    </div>
    <div class="footer">
      <p>Submitted ${new Date().toLocaleString('en-GB', { timeZone: 'America/Sao_Paulo' })} · cheriethai.com.br/chapada2027</p>
    </div>
  </div>
</body>
</html>
        `.trim(),
      })
    } else {
      console.warn('[Chapada2027] GMAIL_USER / GMAIL_PASS not set. Entry logged only.')
    }

    console.log('[Chapada2027 Enquiry]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      whatsapp: whatsapp || null,
      country,
      message: message || null,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Chapada2027 Enquiry] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
