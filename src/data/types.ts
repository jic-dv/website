export interface IProyect {
    title: string
    description: string
    image: string
    alt: string
    technologies: string[]
    links: {
        websiteUrl: string
        deploymentUrl: string
        title: string
    }
}
