'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { LuChevronUp } from 'react-icons/lu'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Button
            onClick={scrollToTop}
            variant='outline'
            size='icon'
            aria-label='Scroll to top'
            className={clsx(
                'fixed bottom-6 right-6 z-50 transition-opacity cursor-pointer',
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
        >
            <LuChevronUp className='w-5 h-5' />
        </Button>
    )
}
