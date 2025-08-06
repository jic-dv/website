import { FaBootstrap, FaChrome, FaGitAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export const skills = [
    {
        name: 'React.js',
        icon: <FaReact className='text-sky-400' />,
        url: 'https://reactjs.org',
        title: 'reactjs',
    },
    {
        name: 'Redux',
        icon: <SiRedux className='text-purple-500' />,
        url: 'https://redux.js.org',
        title: 'redux',
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs className='text-black dark:text-white' />,
        url: 'https://nextjs.org',
        title: 'nextjs',
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript className='text-blue-600' />,
        url: 'https://www.typescriptlang.org',
        title: 'typescript',
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className='text-yellow-400' />,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        title: 'javascript',
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs className='text-green-500' />,
        url: 'https://nodejs.org/',
        title: 'nodejs',
    },
    {
        name: 'API RESTful',
        icon: <TbApi className='text-green-600' />,
        url: 'https://restfulapi.net',
        title: 'apirestful',
    },
    {
        name: 'SEO',
        icon: <FaChrome className='text-neutral-300' />,
        url: 'https://developers.google.com/search?hl=es',
        title: 'seo',
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className='text-teal-400' />,
        url: 'https://tailwindcss.com',
        title: 'tailwindcss',
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap className='text-[#7E11F9]' />,
        url: 'https://getbootstrap.com/',
        title: 'bootstrap',
    },
    {
        name: 'Git',
        icon: <FaGitAlt className='text-[#F15535]' />,
        url: 'https://git-scm.com/',
        title: 'git',
    },
    {
        name: 'GitHub',
        icon: <FaGithub className='text-[#ffffff]' />,
        url: 'https://github.com/',
        title: 'github',
    },
]
