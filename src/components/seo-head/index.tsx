import { Metadata } from 'next'

type SeoHeadProps = {
    title: string
    description: string
    keywords?: string
    url?: string
    image?: string
}

export function generateSeoMetadata({
    title,
    description,
    keywords = 'José Ignacio Contreras, desarrollador frontend, React.js, Next.js, TypeScript, desarrollador web en Chile, frontend developer Chile, portafolio profesional, desarrollador en Santiago, desarrollador React Chile',
    url = 'https://jic-dv.com',
    image = 'https://jic-dv.com/images/logo/jic-dv-meta-logo.png',
}: SeoHeadProps): Metadata {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            siteName: 'Portafolio José Ignacio Contreras',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: 'José Ignacio - Desarrollador Frontend',
                },
            ],
            locale: 'es_CL',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        metadataBase: new URL('https://jic-dv.com'),
        alternates: {
            canonical: url,
        },
    }
}
