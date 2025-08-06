import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Logo from '../logo'

export default function Footer() {
    const t = useTranslations('Footer')

    return (
        <footer className='w-full border-t bg-background container mx-auto'>
            <div className='flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
                <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
                    <Logo />
                    <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                        {t('author.message')}{' '}
                        <Link
                            href='https://www.linkedin.com/in/jic-dv/'
                            target='_blank'
                            rel='noreferrer'
                            className='font-medium underline underline-offset-4'
                            title='author'
                        >
                            {t('author.name')}
                        </Link>{' '}
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4 md:flex-row md:gap-6'>
                    <p className='text-center text-sm text-muted-foreground md:text-left'>
                        &copy; {new Date().getFullYear()} {t('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    )
}
