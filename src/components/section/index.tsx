import clsx from 'clsx'
import React from 'react'

interface SectionProps {
    id: string | '#'
    className?: string
    children: React.ReactNode
}

const Section = ({ id = '#', className = '', children }: SectionProps) => {
    return (
        <section id={id} className={clsx(className, '')}>
            {children}
        </section>
    )
}

export default Section
