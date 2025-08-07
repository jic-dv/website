import Footer from '@/components/footer'
import TopMenu from '@/components/menu/top-menu'
import ScrollToTop from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'
import { geistMono, geistSans } from '@/fonts'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'

// SEO helper
function generateSeoMetadata({
    title,
    description,
    locale,
    url = `https://jic-dv.com/${locale}`,
    image = 'https://jic-dv.com/opengraph-image.jpg',
}: {
    title: string
    description: string
    locale: string
    url?: string
    image?: string
}): Metadata {
    return {
        title,
        description,
        keywords:
            'Desarrollador Web, Frontend, React.js, Next.js, TypeScript, José Ignacio Contreras, Portafolio',
        metadataBase: new URL('https://jic-dv.com'),
        openGraph: {
            title,
            description,
            url,
            siteName: 'José Ignacio Contreras',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: 'Imagen del portafolio',
                },
            ],
            locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
        },
        authors: [
            {
                name: 'José Ignacio Contreras',
                url: 'https://jic-dv.com',
            },
        ],
        publisher: 'José Ignacio Contreras',
    }
}

// SEO para cada locale
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const messages = await getMessages({ locale })

    const metadata = messages?.Metadata

    return generateSeoMetadata({
        title: metadata.title,
        description: metadata.description,
        locale,
    })
}

// Layout principal
export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} suppressHydrationWarning data-scroll-behavior='smooth'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
            >
                <NextIntlClientProvider locale={locale}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TopMenu />
                        <main className='container relative mx-auto px-4'>
                            <Separator orientation='horizontal' />
                            {children}
                        </main>
                        <Footer />
                        <ScrollToTop />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
