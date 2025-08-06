'use client'

import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FaCalendarAlt, FaRegBuilding } from 'react-icons/fa'

export default function Timeline() {
    const t = useTranslations()
    const experiences = t.raw('About') as {
        company: {
            name: string
            role: string
            years: string
            description: string[]
            stack: string[]
        }
    }[]

    return (
        <div
            className={clsx(
                'z-20 p-4 rounded-xl border backdrop-blur shadow-none lg:shadow-md',
                'border lg:border-white/40 dark:lg:border-white/20 lg:bg-white/10 dark:bg-neutral-900/40',
                'relative w-full max-w-full',
                'lg:absolute lg:top-32 lg:left-6 lg:w-[40%] h-auto xl:h-[540px] 2xl:h-auto lg:overflow-y-auto mb-2 lg:mb-0     [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-600 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full',
            )}
        >
            <div className='relative ml-4'>
                <div className='absolute left-0 inset-y-0 border-l-2 border-white/40' />
                {experiences?.map(({ company }, index) => (
                    <div key={index} className='relative pl-10 pb-12 last:pb-0'>
                        {/* Icono */}
                        <div className='absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full ring-2 ring-background backdrop-filter bg-opacity-10 bg-white'>
                            <FaRegBuilding className='h-5 w-5 text-neutral-700' />
                        </div>

                        {/* Contenido */}
                        <div className='pt-2 sm:pt-1 space-y-3'>
                            <p className='text-base sm:text-lg font-semibold text-accent-foreground lg:text-white'>
                                {company.name}
                            </p>
                            <div>
                                <h3 className='text-lg sm:text-xl font-medium text-accent-foreground lg:text-white/80'>
                                    {company.role}
                                </h3>
                                <div className='flex items-center gap-2 mt-1 text-sm text-accent-foreground lg:text-neutral-300'>
                                    <FaCalendarAlt className='h-4 w-4' />
                                    <span>{company.years}</span>
                                </div>
                            </div>
                            <ul className='list-disc pl-4 text-sm sm:text-base text-neutral-400'>
                                {company.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className='flex flex-wrap gap-2'>
                                {company.stack.map((tech) => (
                                    <Badge key={tech} variant='secondary' className='rounded-full'>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// 'use client'

// import { Badge } from '@/components/ui/badge'
// import clsx from 'clsx'
// import { FaCalendarAlt, FaRegBuilding } from 'react-icons/fa'

// const experiences = [
//     {
//         title: 'Analista Programador de Proyectos de Control y Gestión',
//         company: 'Bidata SPA.',
//         period: '2022 - Present',
//         description:
//             'Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.',
//         technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
//         icon: FaRegBuilding,
//     },
// ]

// export default function Timeline() {
//     return (
//         <div
//             className={clsx(
//                 'z-20 p-4 rounded-xl border backdrop-blur shadow-none lg:shadow-md',
//                 'border  lg:border-white/40 dark:lg:border-white/20 lg:bg-white/10 dark:bg-neutral-900/40',
//                 'relative w-full max-w-full',
//                 'lg:absolute lg:top-32 lg:left-6 lg:w-[40%] lg:h-auto lg:overflow-y-auto mb-2 lg:mb-0',
//             )}
//         >
//             <div className='relative ml-4'>
//                 <div className='absolute left-0 inset-y-0 border-l-2 border-white/40' />
//                 {experiences.map(
//                     ({ company, description, period, technologies, title, icon: Icon }, index) => (
//                         <div key={index} className='relative pl-10 pb-12 last:pb-0'>
//                             <div className='absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full ring-2 ring-background backdrop-filter bg-opacity-10 bg-white'>
//                                 <Icon className='h-5 w-5 text-neutral-700' />
//                             </div>

//                             {/* Content */}
//                             <div className='pt-2 sm:pt-1 space-y-3'>
//                                 <p className='text-base sm:text-lg font-semibold text-accent-foreground lg:text-white'>
//                                     {company}
//                                 </p>
//                                 <div>
//                                     <h3 className='text-lg sm:text-xl font-medium text-accent-foreground lg:text-white/80'>
//                                         {title}
//                                     </h3>
//                                     <div className='flex items-center gap-2 mt-1 text-sm text-accent-foreground lg:text-neutral-300'>
//                                         <FaCalendarAlt className='h-4 w-4' />
//                                         <span>{period}</span>
//                                     </div>
//                                 </div>
//                                 <p className='text-sm sm:text-base text-neutral-400'>
//                                     {description}
//                                 </p>
//                                 <div className='flex flex-wrap gap-2'>
//                                     {technologies.map((tech) => (
//                                         <Badge
//                                             key={tech}
//                                             variant='secondary'
//                                             className='rounded-full'
//                                         >
//                                             {tech}
//                                         </Badge>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ),
//                 )}
//             </div>
//         </div>
//     )
// }
