import { pluginHello } from './plugins.js'

export const defineConfig = (config = {}) => {
    const defaultConfig = {
        title: 'Flu Hub',
        description: 'Hello!',
        username: 'flume',
        icon: 'https://i.pravatar.cc/300',
        links: {
            twitter: 'https://twitter.com/404',
            github: 'https://github.com/404',
            others: ['https://reddit.com/404']
        },
        plugins: [[pluginHello]]
    }

    for (const configName in defaultConfig) {
        if (!(configName in config)) {
            config[configName] = defaultConfig[configName]
        }
    }

    return config
}
