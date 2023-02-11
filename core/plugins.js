import { DOMParser } from 'deno_dom'

const resize = (text, max = 60) =>
    text.length < max ? text.body : text.slice(0, max) + '...'

export const pluginHello = () => {
    return [
        {
            where: 'hello.world',
            color: 'blue',
            title: 'Hello, world!',
            description: '[this is a test post]',
            href: 'https://example.com'
        }
    ]
}

export const pluginNote = async (username) => {
    const data = await (
        await fetch(
            `https://note.com/api/v2/creators/${username}/contents?kind=note&page=1`
        )
    ).json()

    let articles = []

    for (const article of data.data.contents) {
        if (article.status === 'published') {
            articles.push({
                where: 'note.com',
                color: 'green',
                title: article.name,
                href: article.noteUrl,
                description: resize(article.body)
            })
        }
    }

    return articles
}

export const pluginZenn = async (username) => {
    const raw = await (await fetch(`https://zenn.dev/${username}/feed`)).text()
    const dom = new DOMParser().parseFromString(raw, 'text/html')

    let articles = []
    for (const item of dom.body.querySelectorAll('item')) {
        console.log(item.querySelector('description').textContent)
        articles.push({
            where: 'zenn.dev',
            color: 'blue',
            title: item.querySelector('title').textContent.slice(9, -3),
            description: resize(
                item.querySelector('description').innerHTML.slice(11, -5)
            ),
            href: item.querySelector('guid').textContent
        })
    }

    return articles
}
