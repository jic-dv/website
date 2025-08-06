import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { MenuItem } from '../top-menu/menu-list'
import SubMenuLink from '../top-menu/submenu-link'

export default function MobileMenuItem(item: MenuItem) {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className='border-b-0'>
                <AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className='mt-2'>
                    {item.items.map((subItem) => (
                        <SubMenuLink
                            key={subItem.title}
                            item={subItem}
                            className='lg:max-w-64 lg:w-64'
                        />
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
