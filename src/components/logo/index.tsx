import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex items-center gap-2' title='href-logo'>
            <Image
                src={'/images/logo/jic-dv-logo.png'}
                width={40}
                height={40}
                alt='jic-dv-logo'
                priority
                title='logo'
            ></Image>
        </Link>
    )
}
