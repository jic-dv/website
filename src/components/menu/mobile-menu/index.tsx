'use client'
import Logo from '@/components/logo'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useNavigation } from '@/data//navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { IoMenuSharp } from 'react-icons/io5'
import ExtarnalLinks from '../top-menu/extarnal-links'
import { MenuItem } from '../top-menu/menu-list'
import SubMenuLink from '../top-menu/submenu-link'

function renderMobileMenuItem(item: MenuItem) {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className='border-b-0'>
                <AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className='mt-2'>
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} className='w-full' />
                    ))}
                </AccordionContent>
            </AccordionItem>
        )
    }

    return (
        <Link key={item.title} href={item.url} title={item.title} className='text-md font-semibold'>
            {item.title}
        </Link>
    )
}

export default function MobileMenu() {
    const t = useTranslations('Sheet')

    const navigation = useNavigation()
    return (
        <div className='block lg:hidden'>
            <div className='flex items-center justify-between'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant='outline' size='icon' className='cursor-pointer'>
                            <IoMenuSharp />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='overflow-y-auto' aria-describedby='sheet-content'>
                        <SheetHeader>
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                            <SheetDescription>
                                {/* José Contreras | Frontend Developer */}
                                {t('title')}
                            </SheetDescription>
                        </SheetHeader>

                        <div className='flex flex-col gap-6 p-4'>
                            <Accordion
                                type='single'
                                collapsible
                                className='flex w-full flex-col gap-4'
                            >
                                {navigation.map((item) => renderMobileMenuItem(item))}
                            </Accordion>
                            <div className='flex flex-col gap-3'>
                                <ExtarnalLinks />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
