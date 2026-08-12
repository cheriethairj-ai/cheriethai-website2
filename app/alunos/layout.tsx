import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Students',
  description:
    'Graduates of the CherieThai Institute — certified practitioners around the world trained in clinical Thai bodywork by Cherie T. Charnkul.',
  alternates: { canonical: 'https://cheriethai.com.br/alunos' },
  openGraph: {
    title: 'CherieThai Students — Certified Practitioners',
    description: 'Graduates of the CherieThai Institute, trained in clinical Thai bodywork.',
    url: 'https://cheriethai.com.br/alunos',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Institute Students' }],
  },
}

export default function AlunosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
