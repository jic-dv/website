'use client'
import { Badge } from '@/components/ui/badge'
import { CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { IProyect } from '@/data/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { LuExternalLink } from 'react-icons/lu'
import { TbWorldSearch } from 'react-icons/tb'

export default function ProjectCard({ project }: { project: IProyect }) {
    const { title, description, image, alt, technologies, links } = project
    const locale = useLocale()

    return (
        <TooltipProvider>
            <div className='relative group rounded-2xl bg-gradient-to-r hover:from-purple-500 hover:via-fuchsia-500 hover:to-purple-700 p-[1px] transition-all duration-300 hover:shadow-lg'>
                <div className='rounded-2xl overflow-hidden border border-border bg-background transition-colors duration-300 hover:border-purple-500'>
                    <div className='relative w-full h-52'>
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            className='object-cover'
                            sizes='(max-width: 768px) 100vw, 400px'
                            priority
                        />
                    </div>
                    <CardContent className='p-4 space-y-3'>
                        <h3 className='text-lg font-semibold tracking-tight'>{title}</h3>
                        <p className='text-muted-foreground text-sm leading-snug'>{description}</p>

                        <div className='flex flex-wrap gap-2 mt-2'>
                            {technologies.map((tech, idx) => (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Badge variant='secondary' className='cursor-default'>
                                            {tech}
                                        </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent>{tech}</TooltipContent>
                                </Tooltip>
                            ))}
                        </div>

                        <Separator className='my-4' />

                        <div className='flex justify-end gap-6 py-1'>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={links.websiteUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-muted-foreground hover:text-primary transition'
                                        aria-label={`Ver Empresa`}
                                    >
                                        <TbWorldSearch className='h-5 w-5' />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {locale === 'es' ? 'Ver Empresa' : 'View Company'}
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={links.deploymentUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-muted-foreground hover:text-primary transition'
                                        aria-label={`Ver ${title} en producción`}
                                    >
                                        <LuExternalLink className='h-5 w-5' />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {locale === 'es' ? 'Ver Proyecto' : 'View Project'}
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardContent>
                </div>
            </div>
        </TooltipProvider>
    )
}
