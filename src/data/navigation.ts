'use client'
import { useTranslations } from 'next-intl'

export function useNavigation() {
    const t = useTranslations()

    return [
        { title: t('Navigation.home'), url: '/' },
        {
            title: t('Navigation.projects'),
            url: '#',
            items: [
                {
                    title: t('Navigation.projectsCompany.title'),
                    description: t('Navigation.projectsCompany.description'),
                    url: '#proyectos',
                },
            ],
        },
        {
            title: t('Navigation.technologies'),
            url: '#',
            items: [
                {
                    title: t('Navigation.frontend.title'),
                    description: t('Navigation.frontend.description'),
                    url: '#frontend',
                },
            ],
        },
    ]
}
