import { MetadataRoute } from 'next'
import { students } from '@/data/students'

const BASE = 'https://cheriethai.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Core ───────────────────────────────────────────────
    { url: BASE,                              priority: 1.0,  changeFrequency: 'monthly' },

    // ── About cluster ──────────────────────────────────────
    { url: `${BASE}/about`,                   priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/philosophy`,              priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE}/story`,                   priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE}/cherie`,                  priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE}/karl`,                    priority: 0.75, changeFrequency: 'monthly' },

    // ── Clinics cluster ────────────────────────────────────
    { url: `${BASE}/saopaulo`,                priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/riodejaneiro`,            priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/results`,                 priority: 0.85, changeFrequency: 'monthly' },

    // ── Practitioners ──────────────────────────────────────
    { url: `${BASE}/therapists`,              priority: 0.85, changeFrequency: 'monthly' },

    // ── To Embody ──────────────────────────────────────────
    { url: `${BASE}/toembody`,                priority: 0.7,  changeFrequency: 'monthly' },

    // ── Institute cluster ──────────────────────────────────
    { url: `${BASE}/institute`,               priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/courses`,                 priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE}/retreats`,                priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE}/workshop`,                priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE}/alunos`,                  priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE}/thailand2027`,            priority: 0.85, changeFrequency: 'monthly' },
  ]

  // Dynamic student profiles
  const studentRoutes: MetadataRoute.Sitemap = students.map((s) => ({
    url: `${BASE}/instituto/${s.id}`,
    priority: 0.65,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...studentRoutes]
}
