import { Metadata } from 'next'

type SeoHeadProps = {
    title: string
    description: string
    keywords?: string
    url?: string
    image?: string
    siteName?: string
    locale?: string
}

export function seo({
    title,
    description,
    keywords = 'Frontend Developer, React.js, Next.js, TypeScript, Portafolio, José Ignacio Contreras',
    url = 'https://jic-dv.com',
    image = 'https://jic-dv.com/jic-dv-meta-logo.png',
    siteName = 'José Ignacio Contreras',
    locale = 'es_CL',
}: SeoHeadProps): Metadata {
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url,
        },
        metadataBase: new URL('https://jicdv.com'),
        openGraph: {
            title,
            description,
            url,
            siteName,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: siteName,
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
        authors: [{ name: 'José Ignacio Contreras', url: 'https://jic-dv.com' }],
        creator: 'José Ignacio Contreras',
        publisher: 'José Ignacio Contreras',
    }
}
