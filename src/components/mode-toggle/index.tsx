'use client'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { THEMES } from '@/constants/themes'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { AiOutlineMoon } from 'react-icons/ai'
import { IoSunnyOutline } from 'react-icons/io5'

export default function ModeToggle() {
    const t = useTranslations('Theme')
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='cursor-pointer'>
                    <IoSunnyOutline className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <AiOutlineMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>{t('toggle')}</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='start' sideOffset={4} className='absolute z-50'>
                {THEMES.map((mode) => (
                    <DropdownMenuItem
                        key={mode}
                        onClick={() => setTheme(mode)}
                        className={theme === mode ? 'bg-neutral-100 dark:bg-neutral-700' : ''}
                    >
                        {t(mode)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
