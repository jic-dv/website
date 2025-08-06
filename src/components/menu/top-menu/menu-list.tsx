'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useNavigation } from '@/data/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import SubMenuLink from './submenu-link'

export interface MenuItem {
    title: string
    url: string
    description?: string
    icon?: React.ReactNode
    items?: MenuItem[]
}

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className='cursor-pointer'>
                    {item.title}
                    {item.items && (
                        <span className='text-foreground ml-1'>
                            <i>
                                <IoIosArrowDown />
                            </i>
                        </span>
                    )}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-popover text-popover-foreground'>
                    {item.items.map((subItem) => (
                        <NavigationMenuLink
                            asChild
                            key={subItem.title}
                            className='w-80 cursor-pointer'
                        >
                            <SubMenuLink item={subItem} className='lg:max-w-64 lg:w-64' />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground'
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}

export default function MenuList() {
    const navigation = useNavigation()
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navigation.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
