import { TypeAnimation } from 'react-type-animation'

export default function TypeWritter() {
    return (
        <>
            <TypeAnimation
                className='text-neutral-500 dark:text-neutral-300 font-bold inline-block text-md'
                sequence={[
                    'JavaScript',
                    2500,
                    'TypeScript',
                    2500,
                    'Node.js',
                    2500,
                    'Next.js',
                    2500,
                ]}
                wrapper='span'
                speed={75}
                repeat={Infinity}
            />
        </>
    )
}
