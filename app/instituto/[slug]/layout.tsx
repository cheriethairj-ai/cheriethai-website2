import type { Metadata } from 'next'
import { students } from '@/data/students'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const student = students.find((s) => s.id === params.slug)

  if (!student) {
    return {
      title: 'Student Profile — CherieThai Institute',
    }
  }

  const descriptorStr = student.descriptors?.join(' · ') ?? ''
  const description = `${student.bio} ${descriptorStr ? `${descriptorStr}.` : ''}`.trim()

  return {
    title: `${student.name} — CherieThai Institute`,
    description,
    alternates: {
      canonical: `https://cheriethai.com.br/instituto/${student.id}`,
    },
    openGraph: {
      title: `${student.name} — CherieThai Institute`,
      description: student.bio,
      url: `https://cheriethai.com.br/instituto/${student.id}`,
      images: student.photo
        ? [{ url: `/students/${student.photo}`, width: 800, height: 1067, alt: student.name }]
        : [{ url: '/portrait-cherie.jpg', width: 1200, height: 630, alt: `${student.name} — CherieThai Institute` }],
    },
  }
}

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
