import Logo from '@/components/logo'
import MobileMenu from '../mobile-menu'
import ExtarnalLinks from './extarnal-links'
import MenuList from './menu-list'
import Tools from './tools'

export default function TopMenu() {
    return (
        <>
            <nav className='flex w-full justify-between items-center gap-2 py-4 px-4 container mx-auto'>
                <div className='w-[33.3%]'>
                    <Logo />
                </div>

                <div className='w-[33.3%] items-center justify-center gap-2 xl:gap-8 hidden lg:flex'>
                    <div className='flex items-center'>
                        <MenuList />
                    </div>
                </div>

                <div className='w-[33.3%] flex items-center justify-end gap-3'>
                    <Tools />
                    <div className='h-auto min-h-[1em] mx-0 lg:mx-2 w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400'></div>
                    <div className='hidden lg:flex gap-3'>
                        <ExtarnalLinks />
                    </div>
                    <MobileMenu />
                </div>
            </nav>
        </>
    )
}
