'use client'

import Section from '@/components/section'
import SectionTitle from '@/components/section-title'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { IProyect } from '@/data/types'
import { useTranslations } from 'next-intl'
import ProjectCard from './components/project-card'

export default function ProjectsSection() {
    const t = useTranslations()
    const rawProjects = t.raw('Projects.list') as IProyect[]

    return (
        <Section id='projects' className='mt-14 lg:mt-20'>
            <SectionTitle
                title={t('Projects.title')}
                subtitle={t('Projects.subtitle', {
                    default: 'Lista de proyectos destacados en producción.',
                })}
                alignment='start'
            />
            <Carousel className='w-full select-none'>
                <CarouselContent className='-ml-1'>
                    {rawProjects.map((project, index) => (
                        <CarouselItem
                            key={index}
                            className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                        >
                            <div className='p-1'>
                                <ProjectCard project={project} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className='hidden md:flex'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </Section>
    )
}
