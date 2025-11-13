export const metadata = {
  title: {
    template: '%s | Juan Silva',
    default: 'Juan Silva - Full-Stack Developer',
  },
  description: 'Living my dream while building it!',
  metadataBase: new URL('https://dev.juanpablosilva.com.br'),
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dev.juanpablosilva.com.br',
    siteName: 'Juan Silva',
    title: 'Juan Silva - Full-Stack Developer',
    description: 'Living my dream while building it!',
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
    description: 'Living my dream while building it!',
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
