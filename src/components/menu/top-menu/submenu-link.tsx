import clsx from 'clsx'
import Link from 'next/link'
import { MenuItem } from './menu-list'

export default function SubMenuLink({ item, className }: { item: MenuItem; className: string }) {
    return (
        <Link
            className={clsx(
                className,
                'flex flex-row cursor-pointer gap-4 w-full rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground',
            )}
            href={item.url}
            title={item.title}
        >
            <div>
                <div className='text-sm font-semibold'>{item.title}</div>
                {item.description && (
                    <p className='text-sm leading-snug text-muted-foreground'>{item.description}</p>
                )}
            </div>
        </Link>
    )
}
