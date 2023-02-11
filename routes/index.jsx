import config from '../flu.config.ts'
import { Provider } from '../components/provider.jsx'
import { TwitterIcon, GithubIcon, LinkIcon } from '../components/icons.jsx'

export const handler = async (_, c) => {
    let articles = []

    for (const [plugin, ...args] of config.plugins) {
        const result = await plugin(args)
        articles.push(...result)
    }

    return c.render(articles)
}

export default (props) => (
    <Provider>
        <div className='text-center py-10 border-b border-gray-300'>
            <img
                src={config.icon}
                style='width: 150px;'
                className='block rounded-md mx-auto mb-5'
            />
            <h1 className='text-4xl font-bold'>{config.username}</h1>
            <p className='w-1/2 mx-auto pt-5 text-gray-500'>
                {config.description}
            </p>
            <div className='mt-10 flex items-center align-middle justify-center'>
                {Object.entries(config.links).map((entry) => {
                    switch (entry[0]) {
                        case 'twitter':
                            return (
                                <a
                                    href={entry[1]}
                                    target='_blank'
                                    className='p-3 mx-1 transition hover:bg-gray-200 rounded-md'
                                >
                                    <TwitterIcon className='w-7' />
                                </a>
                            )

                        case 'github':
                            return (
                                <a
                                    href={entry[1]}
                                    target='_blank'
                                    className='p-3 mx-1 transition hover:bg-gray-200 rounded-md'
                                >
                                    <GithubIcon className='w-7' />
                                </a>
                            )

                        case 'others':
                            return entry[1].map((link) => (
                                <a
                                    href={link}
                                    target='_blank'
                                    className='p-3 mx-1 transition hover:bg-gray-200 rounded-md'
                                >
                                    <LinkIcon className='w-7' />
                                </a>
                            ))

                        default:
                            break
                    }
                })}
            </div>
        </div>
        <div>
            {props.data.map((article) => (
                <a
                    href={article.href}
                    target='_blank'
                    className='block border-b py-10 border-gray-300'
                >
                    <div className='flex items-center align-middle'>
                        <span
                            className={`bg-${article.color}-200 text-${article.color}-600 font-bold text-sm inline-block px-2 py-1 rounded-full`}
                        >
                            {article.where}
                        </span>
                        <h1 className='ml-5 inline-block text-xl font-bold'>
                            {article.title}
                        </h1>
                    </div>
                    <p className='mt-5 text-gray-500'>{article.description}</p>
                </a>
            ))}
        </div>
    </Provider>
)
