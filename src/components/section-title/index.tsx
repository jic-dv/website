'use client'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
    title: string
    subtitle?: string
    alignment?: 'start' | 'center' | 'end'
}

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
    const alignmentClasses = {
        start: 'text-left items-start',
        center: 'text-center items-center',
        end: 'text-right items-end',
    }

    return (
        <div className={cn('flex flex-col gap-2 mb-8', alignmentClasses[alignment])}>
            <h2 className='text-lg lg:text-3xl font-bold tracking-tight'>{title}</h2>
            {subtitle && (
                <p className='text-muted-foreground max-w-prose text-sm sm:text-base'>{subtitle}</p>
            )}
        </div>
    )
}
