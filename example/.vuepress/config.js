module.exports = {
  title: "花点时间",
  description: '',
  dest: 'example/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["script", { src: "/scripts/mouseClick.js" }],
    ["script", { src: "/scripts/noConsole.js" }],
    ["script", { src: "/scripts/fairyDustCursor.js" }]
  ],
  base: '/',
  theme: 'reco',
  // theme: require.resolve('../../packages/vuepress-theme-reco'),
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '前端技术栈', link: '/views/front/' },
      // { text: '后端技术栈', link: '/views/web/' }
    ],
    noFoundPageByTencent: false,
    sidebar: {
      '/views/front/': [
        '',
        'bar1',
        'bar2'
      ],
      '/views/web/': [
        {
          title: '基础',
          collapsable: true,
          children: [
            '',
            'bar1'
          ]
        },
        {
          title: '进阶',
          collapsable: true,
          children: [
            'bar2'
          ]
        },
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '' // 默认 “标签”
      }
    },
    logo: '/head.png',
    authorAvatar: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: '最后更新于 >>',
    // 作者
    author: 'pengfei.shao',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2020',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'C1QftJERODGumPjT0jYf4lU1-gzGzoHsz',// your appId
      appKey: 'ArQ4h9IPpKU31g1XkDRgmX0n', // your appKey
      placeholder: '请务必填写联系方式，方便及时回复！',
      pageSize: 20,
      enableQQ: true
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
  },
  plugins: [
    // 打赏插件
    ["vuepress-plugin-sponsor", {
      
    }],
    // 文章头部名人名言
    ["vuepress-plugin-boxx"],
    // 网页标题
    ['dynamic-title', {
        showIcon: "/favicon.ico",
        showText: "Welcome Back！",
        hideIcon: "/favicon.ico",
        hideText: "Wait ...",
        recoverTime: 2000
      }
    ]
  ]
}
