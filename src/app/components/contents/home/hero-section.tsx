'use client'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'
import { redirects } from '@/constants/redirects'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import AnimatedGreetingBadge from './components/animated-greeting-badge'
import Timeline from './components/time-line'
import TypeWritter from './components/type-writter'

export default function HeroSection() {
    const t = useTranslations('Hero')
    const tProfile = useTranslations('Profile')

    return (
        <Section id='hero' className='relative'>
            <div className='relative h-full w-full'>
                <div className='absolute bottom-0 right-[35%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
            </div>
            <div className='absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80'>
                <div className='absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent' />
            </div>
            <div className='absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80'>
                <div className='absolute h-40 w-px bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent' />
            </div>
            <div className='absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80'>
                <div className='absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent' />
            </div>
            <div className='px-4 py-10 md:py-20 relative'>
                <AnimatedGreetingBadge />
                <h1 className='relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-700 md:text-4xl lg:text-7xl dark:text-neutral-300'>
                    {t('title')
                        .split(' ')
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: 'easeInOut',
                                }}
                                className='mr-2 inline-block'
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className='relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 my-3 lg:my-5'
                >
                    <TypeWritter />
                </motion.p>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className='relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 lg:mt-5'
                >
                    {t('description')}
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className='relative z-10 flex flex-col md:flex-row md:justify-center md:items-center mt-10 gap-4'
                >
                    <a
                        href={redirects.linkedIn.href}
                        target={redirects.github.target}
                        rel='noopener noreferrer'
                        title='LinkedIn'
                    >
                        <Button
                            variant='default'
                            className='cursor-pointer w-full md:w-38 p-5 lg:p-6'
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                            <span>LinkedIn</span>
                        </Button>
                    </a>
                    <a
                        href={redirects.downloadCV.href}
                        target={redirects.downloadCV.target}
                        rel='noopener noreferrer'
                        title='CV'
                    >
                        <Button
                            variant='outline'
                            className='cursor-pointer w-full md:w-38 p-5 lg:p-6'
                        >
                            <i>
                                <HiDownload />
                            </i>
                            <span>{t('ctaCV')}</span>
                        </Button>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className='relative z-10 mt-20 rounded-2xl border p-4 border-dashed shadow-md bg-transparent'
                >
                    <div className='absolute inset-0 bg-transparent dark:bg-black opacity-40 rounded-2xl z-10' />

                    <Timeline />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.4 }}
                        className='hidden lg:flex absolute top-6 left-6 z-20 w-auto max-w-xs rounded-2xl border-white/20 bg-white/10 backdrop-filter bg-opacity-10 dark:bg-neutral-900/60 backdrop-blur border shadow-md p-4 items-center gap-4'
                    >
                        <Image
                            src='/images/hero/avatar-me.png'
                            alt='José Ignacio Contreras'
                            width={64}
                            height={64}
                            className='rounded-full border border-none dark:border-gray-700'
                            title='avatar'
                        />
                        <div className='text-left'>
                            <h3 className='text-sm font-semibold text-white'>
                                José Ignacio Contreras
                            </h3>
                            <p className='text-xs text-neutral-400'>{tProfile('title')}</p>
                            <p className='text-xs text-neutral-400'>Frontend React.js Developer</p>
                        </div>
                    </motion.div>

                    <div className='relative w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 z-0'>
                        <Image
                            src='/images/hero/hero-cover.webp'
                            alt='hero'
                            width={1536}
                            height={1024}
                            className='aspect-[16/9] w-full h-auto object-cover'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw'
                            priority
                            title='hero'
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
