# Stripe Integration TODO

This file is the single source of truth for remaining Stripe setup steps.

---

## Values to Replace

The following `sample_only` parameters in the checkout session creation already have real values and are working correctly. No action needed unless you change them.

**Files:**
- [app/api/checkout/route.ts](app/api/checkout/route.ts)

| Field | Current Value | Notes |
|-------|--------------|-------|
| `mode` | `"payment"` | Correct for a one-time retreat purchase. Change to `"subscription"` only for recurring billing. |
| `success_url` | `{origin}/thailand2027/success?session_id={CHECKOUT_SESSION_ID}` | Points to your existing success page — no change needed. |
| `cancel_url` | `{origin}/thailand2027#accommodation` | Returns to the accommodation section — no change needed. |
| `line_items[].price_data` | dynamic (per room selection) | Uses inline `price_data` rather than a Stripe Price ID — this is fine for dynamic pricing. |

---

## Configured Parameters

These parameters were set by Checkout Studio and are applied correctly.

**Files:**
- [app/api/checkout/route.ts](app/api/checkout/route.ts)

| Parameter | Value |
|-----------|-------|
| `ui_mode` | `"hosted_page"` (SDK ≥ 21.0.0 — your version is 22.6.2 ✓) |
| `billing_address_collection` | `"auto"` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `false` |
| `allow_promotion_codes` | `false` |
| `submit_type` | `"auto"` |
| `saved_payment_method_options.payment_method_save` | `"enabled"` |
| `payment_method_collection` | omitted (correct — only applies to `subscription` mode) |

---

## Important: Participant Data

The previous version of the checkout collected `name`, `whatsapp`, and `room` in Stripe metadata. This was removed as part of the Checkout Studio integration. To restore this:

1. Add `customer_email: email` back to the session params (also required for `saved_payment_method_options` to work correctly).
2. Re-add `metadata: { participant_name: name, whatsapp, room: roomOption.label }` to the session params.
3. Re-add `payment_intent_data: { metadata: { ... } }` if you need the metadata on the PaymentIntent as well.

---

## Environment Variables

Ensure these are set in Vercel → Settings → Environment Variables for **Production**:

| Variable | Where to get it |
|----------|----------------|
| `STRIPE_SECRET_KEY` | [Stripe Dashboard → API Keys](https://dashboard.stripe.com/test/apikeys) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Same page (publishable key) |

> **Current issue:** The `STRIPE_SECRET_KEY` in Vercel showed a "Needs Attention" badge. Delete it and re-add it to resolve the connection error.

---

## Going Live

When ready to accept real payments:

1. Replace `sk_test_...` with your **live** secret key in Vercel env vars.
2. Replace `pk_test_...` with your **live** publishable key.
3. Test with a real card for a small amount first.

---

## Resources

- [Stripe Docs](https://docs.stripe.com)
- [Stripe Support](https://support.stripe.com)
- [Stripe MCP Docs](https://docs.stripe.com/mcp)
- [Test card numbers](https://docs.stripe.com/testing#cards): `4242 4242 4242 4242` (any future date, any CVC)
