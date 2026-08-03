import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── London Waitlist API Route ─────────────────────────────────────────────────
//
// Sends waitlist entries to cheriethairj@gmail.com via Gmail SMTP.
//
// Required Vercel environment variables:
//   GMAIL_USER  — the Gmail address used to send (e.g. cheriethairj@gmail.com)
//   GMAIL_PASS  — a Gmail App Password (NOT your regular Gmail password)
//
// How to create a Gmail App Password:
//   1. Go to myaccount.google.com → Security → 2-Step Verification (enable if needed)
//   2. Then go to myaccount.google.com → Security → App passwords
//   3. Select "Mail" + "Other (custom name)" → name it "CherieThai Waitlist"
//   4. Copy the 16-character password shown
//   5. Add it as GMAIL_PASS in Vercel → Project → Settings → Environment Variables

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, area, interest, message } = body


    // Server-side validation
    if (!firstName || !lastName || !email || !area || !interest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ─── Send email ────────────────────────────────────────────────────────────
    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_PASS

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      })

      await transporter.sendMail({
        from: `"CherieThai London Waitlist" <${gmailUser}>`,
        to: 'cheriethairj@gmail.com',
        replyTo: email,
        subject: `New London Waitlist — ${firstName} ${lastName}`,
        text: `
New London Waitlist Submission
────────────────────────────────

Name:             ${firstName} ${lastName}
Email:            ${email}
London area:      ${area}
Primary interest: ${interest}
Message:          ${message || '(none)'}

Submitted:        ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
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
    .header h1 { color: #F5F0E8; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: -0.01em; }
    .body { padding: 36px 40px; }
    .row { display: flex; padding: 12px 0; border-bottom: 1px solid #f0ebe3; }
    .label { font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: #AAB6A2; min-width: 140px; padding-top: 2px; }
    .value { font-size: 14px; color: #3D4A40; font-weight: 400; flex: 1; }
    .message-block { margin-top: 20px; padding: 16px 20px; background: #FAF8F4; border-left: 2px solid #DCC9A0; }
    .message-block .label { margin-bottom: 8px; display: block; }
    .message-block .value { font-size: 14px; line-height: 1.7; }
    .footer { padding: 20px 40px; border-top: 1px solid #f0ebe3; }
    .footer p { font-family: Arial, sans-serif; font-size: 9px; color: #AAB6A2; letter-spacing: 0.12em; margin: 0; }
    a { color: #4B5A4F; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p>CherieThai · London Chapter</p>
      <h1>New Waitlist Submission</h1>
    </div>
    <div class="body">
      <div class="row">
        <span class="label">Name</span>
        <span class="value">${firstName} ${lastName}</span>
      </div>
      <div class="row">
        <span class="label">Email</span>
        <span class="value"><a href="mailto:${email}">${email}</a></span>
      </div>
      <div class="row">
        <span class="label">London area</span>
        <span class="value">${area}</span>
      </div>
      <div class="row">
        <span class="label">Primary interest</span>
        <span class="value">${interest}</span>
      </div>
      ${message ? `
      <div class="message-block">
        <span class="label">Message</span>
        <span class="value">${message.replace(/\n/g, '<br />')}</span>
      </div>` : ''}
    </div>
    <div class="footer">
      <p>Submitted ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} · cheriethai.com.br/london</p>
    </div>
  </div>
</body>
</html>
        `.trim(),
      })
    } else {
      // Credentials not yet configured — log to Vercel console in the meantime
      console.warn('[London Waitlist] GMAIL_USER / GMAIL_PASS not set. Entry logged only.')
    }

    // Always log to Vercel console as a backup record
    console.log('[London Waitlist]', {
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      email,
      area,
      interest,
      message: message || null,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[London Waitlist] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
