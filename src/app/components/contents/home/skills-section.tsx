'use client'
import Section from '@/components/section'
import SectionTitle from '@/components/section-title'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { skills } from '@/data/skills'
import { useTranslations } from 'next-intl'

export default function SkillsSection() {
    const t = useTranslations()

    return (
        <Section id='frontend' className='my-14 lg:my-20'>
            <SectionTitle
                title={t('Skills.title')}
                subtitle={t('Skills.subtitle')}
                alignment='start'
            />
            <TooltipProvider>
                <div className='w-full xl:w-4/6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4'>
                    {skills.map((skill) => (
                        <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                                <a
                                    href={skill.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group relative text-center rounded-2xl bg-gradient-to-r p-[1px] hover:from-purple-500 hover:via-fuchsia-500 hover:to-purple-700 transition-all duration-300 hover:shadow-lg'
                                    aria-label={skill.name}
                                >
                                    <div className='flex flex-col items-center justify-center gap-2 h-full w-full rounded-2xl border border-border bg-background p-4 transition-colors duration-300 hover:border-purple-500'>
                                        <span className='text-3xl'>{skill.icon}</span>
                                        <span className='text-sm text-muted-foreground group-hover:text-foreground font-medium'>
                                            {skill.name}
                                        </span>
                                    </div>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </TooltipProvider>
        </Section>
    )
}
