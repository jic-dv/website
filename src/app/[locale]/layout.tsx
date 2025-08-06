import Footer from '@/components/footer'
import TopMenu from '@/components/menu/top-menu'
import ScrollToTop from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'
import { geistMono, geistSans } from '@/fonts'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import './globals.css'

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
                <NextIntlClientProvider>
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
