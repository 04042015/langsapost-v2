import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Langsapost - Portal Berita Langsa Terpercaya',
    template: '%s | Langsapost'
  },
  description: 'Portal berita terpercaya untuk Langsa dan sekitarnya. Dapatkan informasi terkini seputar politik, ekonomi, olahraga, teknologi, dan berita lokal lainnya.',
  keywords: [
    'berita langsa',
    'portal berita',
    'langsa post',
    'berita aceh',
    'berita sumut',
    'berita terkini',
    'breaking news',
    'politik',
    'ekonomi',
    'olahraga'
  ],
  authors: [{ name: 'Tim Redaksi Langsapost', url: 'https://langsapost.com' }],
  creator: 'Langsapost',
  publisher: 'Langsapost',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://langsapost.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Langsapost',
    title: 'Langsapost - Portal Berita Langsa Terpercaya',
    description: 'Portal berita terpercaya untuk Langsa dan sekitarnya. Dapatkan informasi terkini seputar politik, ekonomi, olahraga, teknologi, dan berita lokal lainnya.',
    images: [
      {
        url: '/images/logo/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Langsapost Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Langsapost - Portal Berita Langsa Terpercaya',
    description: 'Portal berita terpercaya untuk Langsa dan sekitarnya',
    images: ['/images/logo/logo-twitter.png'],
    creator: '@langsapost',
    site: '@langsapost',
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    },
  },
  category: 'news',
  classification: 'News Website',
  referrer: 'origin-when-cross-origin',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/icons/manifest.json" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="canonical" href={process.env.SITE_URL} />
        
        {/* Preload important resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Google Analytics */}
        {process.env.GOOGLE_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
                `,
              }}
            />
          </>
        )}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'Langsapost',
              url: process.env.SITE_URL,
              logo: `${process.env.SITE_URL}/images/logo/logo.png`,
              description: 'Portal berita terpercaya untuk Langsa dan sekitarnya',
              sameAs: [
                'https://facebook.com/langsapost',
                'https://twitter.com/langsapost',
                'https://instagram.com/langsapost',
                'https://youtube.com/@langsapost',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Langsa',
                addressRegion: 'Aceh',
                addressCountry: 'ID',
              },
              foundingDate: '2024',
              founder: {
                '@type': 'Person',
                name: 'Tim Langsapost',
              },
              publishingPrinciples: `${process.env.SITE_URL}/tentang/editorial`,
              diversityPolicy: `${process.env.SITE_URL}/tentang/diversity`,
              ethicsPolicy: `${process.env.SITE_URL}/tentang/ethics`,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <div id="root">
          {children}
        </div>
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50"
        >
          Skip to main content
        </a>
        
        {/* Back to top button placeholder */}
        <div id="back-to-top-portal" />
        
        {/* Toast notifications placeholder */}
        <div id="toast-portal" />
        
        {/* Modal portal */}
        <div id="modal-portal" />
      </body>
    </html>
  )
}
