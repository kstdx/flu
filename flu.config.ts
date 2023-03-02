import { pluginNote, pluginZenn } from './core/plugins.js'
import { defineConfig } from './core/config.js'

export default defineConfig({
    title: 'My Flu App',
    description:
        'I have uploaded the repository of this web application to GitHub.',
    username: 'kstdx',
    icon: 'https://avatars.githubusercontent.com/u/104671361?v=4',
    links: {
        twitter: 'https://twitter.com/kstdx',
        github: 'https://github.com/kstdx',
        others: ['https://kstdx.com']
    },
    plugins: [
        [pluginNote, 'kstdx'],
        [pluginZenn, 'kstdx']
    ]
})
