export const metadata = {
  title: {
    template: '%s | Juan Silva',
    default: 'Juan Silva - Full-Stack Developer',
  },
  description: '',
  metadataBase: new URL('https://juansilva.is-a.dev'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://juansilva.is-a.dev',
    siteName: 'Juan Silva',
    title: 'Juan Silva - Full-Stack Developer',
    description: '',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Juan Silva - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Silva - Full-Stack Developer',
    description: '',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
