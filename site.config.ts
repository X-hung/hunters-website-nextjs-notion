import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd75f86cc9d434ac795dfc77ebac3f5d0',
  aboutPageId: 'afd830e4de444577b5d0844111e5f4e0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hunter Xu\'s Personal Website',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Hunter Xu',
  location: 'Sydney, Australia',
  profileAvatar: "/portrait.png",
  address: `
          233 J12 Building,
          School of Computer Science
          Camperdown, NSW 2006
          Australia
  `,
  memo: "Most of my GitHub repositories are set private, never mind :)",
  media: "/media/temple_of_time_repentance.mp3",

  // open graph metadata (optional)
  description: 'Hunter Xu\'s personal website, made with Next.js and Notion APIs',

  // social usernames (optional)
  twitter: 'x.hung.chn',
  github: 'x-hung',
  linkedin: 'hunter-xu',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    // to set default index page, please go to /lib/resolve-notion-page.ts
    // {
    //   title: 'About',
    //   pageId: 'afd830e4de444577b5d0844111e5f4e0'
    // },
    {
      title: 'Blog',
      pageId: '31b81f602f724d5a8855dec61029ce7e'
    },
    {
      title: '观点',
      pageId: '30adb5a5038d4df1907296cb4da794ed'
    },
    {
      title: 'Porfolio',
      pageId: 'd791c8a13e3f421db78bde2bdb81283e'
    },
    {
      title: 'Teaching',
      pageId: 'e20210175ed8414ab2795ded75e53976'
    },
    {
      title: 'Learning',
      pageId: '587c5c7cc8944f45bddd6a2281ab1e1f'
    },
    {
      title: 'Roadmap',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: 'Disclaimer',
      pageId: 'b475ec051515430dab4533bdb0482ac2'
    }
  ]
})
