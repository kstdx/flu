import { Head } from '$fresh/runtime.ts'
import config from '../flu.config.ts'

export const Provider = (props) => (
    <>
        <Head>
            <title>
                {props.title === undefined
                    ? config.title
                    : `${props.title} - ${config.title}`}
            </title>
        </Head>
        <header className='flex align-middle items-center bg-white p-5 border-b border-gray-300 shadow-sm sticky top-0'>
            <a href='/' className='text-xl font-bold'>
                {config.title}
            </a>
        </header>
        <div className='container mx-auto'>
            <main className='p-10'>{props.children}</main>
            <footer></footer>
        </div>
    </>
)
