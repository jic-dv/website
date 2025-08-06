import Footer from '@/components/footer'
import TopMenu from '@/components/menu/top-menu'
import ScrollToTop from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'
import { geistMono, geistSans } from '@/fonts'
import { Locale, routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import { seo } from './seo'

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
    const { locale } = await params
    const messages = await getMessages({ locale })
    const metadata = messages?.Metadata

    return seo({
        title: metadata.title,
        description: metadata.description,
        url: `https://jic-dv.com/${locale}`,
        locale,
    })
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: Locale }
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} data-scroll-behavior='smooth' suppressHydrationWarning>
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

// import Footer from '@/components/footer'
// import TopMenu from '@/components/menu/top-menu'
// import ScrollToTop from '@/components/scroll-to-top'
// import { ThemeProvider } from '@/components/theme-provider'
// import { Separator } from '@/components/ui/separator'
// import { geistMono, geistSans } from '@/fonts'
// import { Locale, routing } from '@/i18n/routing'
// import { Metadata } from 'next'
// import { NextIntlClientProvider, hasLocale } from 'next-intl'
// import { getMessages } from 'next-intl/server'
// import { notFound } from 'next/navigation'
// import './globals.css'

// export async function generateMetadata({
//     params,
// }: {
//     params: { locale: Locale }
// }): Promise<Metadata> {
//     const { locale } = params

//     if (!routing.locales.includes(locale)) {
//         return {
//             title: 'Not Found',
//             description: 'Página no encontrada',
//         }
//     }

//     const messages = await getMessages({ locale })
//     const metadata = messages?.Metadata

//     return {
//         title: metadata?.title,
//         description: metadata?.description,
//         keywords: [
//             'React.js',
//             'Next.js',
//             'TypeScript',
//             'Frontend Developer',
//             'Portafolio',
//             'Desarrollador Web',
//             'José Ignacio Contreras',
//         ],
//         authors: [{ name: 'José Ignacio Contreras', url: 'https://jicdv.com' }],
//         creator: 'José Ignacio Contreras',
//         publisher: 'José Ignacio Contreras',
//         robots: {
//             index: true,
//             follow: true,
//         },
//         alternates: {
//             canonical: `https://jicdv.com/${locale}`,
//         },
//         openGraph: {
//             title: metadata?.title,
//             description: metadata?.description,
//             url: `https://jicdv.com/${locale}`,
//             siteName: 'José Ignacio Contreras',
//             locale,
//             type: 'website',
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: metadata?.title,
//             description: metadata?.description,
//         },
//     }
// }

// export default async function LocaleLayout({
//     children,
//     params,
// }: {
//     children: React.ReactNode
//     params: Promise<{ locale: string }>
// }) {
//     const { locale } = await params

//     if (!hasLocale(routing.locales, locale)) {
//         notFound()
//     }

//     return (
//         <html lang={locale} suppressHydrationWarning data-scroll-behavior='smooth'>
//             <body
//                 className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
//             >
//                 <NextIntlClientProvider>
//                     <ThemeProvider
//                         attribute='class'
//                         defaultTheme='dark'
//                         enableSystem
//                         disableTransitionOnChange
//                     >
//                         <TopMenu />
//                         <main className='container relative mx-auto px-4'>
//                             <Separator orientation='horizontal' />
//                             {children}
//                         </main>
//                         <Footer />
//                         <ScrollToTop />
//                     </ThemeProvider>
//                 </NextIntlClientProvider>
//             </body>
//         </html>
//     )
// }
