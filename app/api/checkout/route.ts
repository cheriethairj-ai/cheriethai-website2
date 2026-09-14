import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-08-26.dahlia',
})

const ROOM_PRICES: Record<string, { amount: number; label: string }> = {
  'harmony':          { amount: 87000,  label: 'Harmony House — Shared Dormitory' },
  'hill-private':     { amount: 145000, label: 'Hill Haven — Private Room' },
  'hill-shared':      { amount: 100000, label: 'Hill Haven — Shared Room (per person)' },
  'earth-private':    { amount: 215000, label: 'Earth Lodge — Private Room' },
  'earth-shared':     { amount: 140000, label: 'Earth Lodge — Shared Room (per person)' },
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, room } = await req.json()

    if (!name || !email || !whatsapp || !room) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const roomOption = ROOM_PRICES[room]
    if (!roomOption) {
      return NextResponse.json({ error: 'Invalid room selection' }, { status: 400 })
    }

    const origin = req.headers.get('origin') || 'https://cheriethai.com.br'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `CherieThai Thailand Retreat 2027 — ${roomOption.label}`,
              description: '11–14 January 2027 · VOASIS Valley · Krabi · Thailand · 22h Intensive Training',
            },
            unit_amount: roomOption.amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        participant_name: name,
        whatsapp,
        room: roomOption.label,
      },
      payment_intent_data: {
        metadata: {
          participant_name: name,
          whatsapp,
          room: roomOption.label,
        },
      },
      success_url: `${origin}/thailand2027/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/thailand2027#accommodation`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Stripe error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
