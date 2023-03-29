export const Site = {
    title: 'Documentation',
    description: 'Your website description.',
    homepage: '/docs/introduction',
} as const

export const Open_Graph = {
    image: {
        src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
        alt:
            'astro logo on a starry expanse of space,' +
            ' with a purple saturn-like planet floating in the right foreground',
    },
    twitter: 'astrodotbuild',
}

export const Github_Edit_URL = `https://github.com/withastro/astro/tree/main/examples/docs`

export const Community_Invite_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const Algolia = {
    indexName: 'XXXXXXXXXX',
    appId: 'XXXXXXXXXX',
    apiKey: 'XXXXXXXXXX',
}

export type Sidebar = Record<
    string,
    Record<string, { text: string; link: string }[]>
>

export const Sidebar: Sidebar = {
    'Tab Name': {
        'Section Header': [
            { text: 'Introduction', link: 'docs/introduction' },
            { text: 'Page 2', link: 'docs/page-2' },
            { text: 'Page 3', link: 'docs/page-3' },
        ],
    },
    'One More Tab': {
        'Another Section': [{ text: 'Page 4', link: 'docs/page-4' }],
    },
}
