import { Button } from '@/components/ui/button'
import { redirects } from '@/constants/redirects'
import { FaGithub } from 'react-icons/fa'

export default function ExtarnalLinks() {
    return (
        <>
            <a
                href={redirects.github.href}
                target={redirects.github.target}
                rel='noopener noreferrer'
                title='GitHub'
            >
                <Button variant='outline' className='cursor-pointer w-full'>
                    <i>
                        <FaGithub />
                    </i>
                    <span>GitHub</span>
                </Button>
            </a>
        </>
    )
}
