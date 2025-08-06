'use client'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

export default function AnimatedGreetingBadge() {
    const t = useTranslations('Hero')

    return (
        <div className='mb-4 flex justify-center text-center'>
            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.2,
                    delay: 0.4,
                }}
                className='relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400'
            >
                <HoverBorderGradient
                    containerClassName='rounded-full'
                    as='button'
                    className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
                >
                    <span className='text-sm'>{t('greeting')}</span>
                </HoverBorderGradient>
            </motion.p>
        </div>
    )
}
