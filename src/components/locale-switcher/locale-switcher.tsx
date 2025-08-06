import { routing } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { MdLanguage } from 'react-icons/md'
import LocaleSwitcherSelect from './locale-switcher-select'

export default function LocaleSwitcher() {
    const locale = useLocale()

    return (
        <div className='flex items-center gap-2'>
            <MdLanguage className='h-5 w-5 text-muted-foreground cursor-pointer' />
            <LocaleSwitcherSelect defaultValue={locale} label='select...'>
                {routing.locales.map((loc) => (
                    <option key={loc} value={loc} className='cursor-pointer'>
                        {loc}
                    </option>
                ))}
            </LocaleSwitcherSelect>
        </div>
    )
}
