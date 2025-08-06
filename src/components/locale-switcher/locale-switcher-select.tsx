'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing'
import clsx from 'clsx'
// import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    defaultValue: string
    label: string
    className?: string
}

export default function LocaleSwitcherSelect({ defaultValue, label, className = 'w-auto' }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    // const params = useParams()

    const onSelectChange = (nextLocale: string) => {
        router.replace({ pathname }, { locale: nextLocale as Locale })
    }

    return (
        <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
            <SelectTrigger
                className={clsx(
                    className,
                    'w-auto border h-8 bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer',
                )}
                aria-label={label}
            >
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {routing.locales.map((locale) => (
                    <SelectItem key={locale} value={locale} className='cursor-pointer'>
                        {locale.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
