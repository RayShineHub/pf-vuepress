module.exports = {
  title: "花点时间",
  description: 'A simple and beautiful vuepress blog theme.',
  dest: 'example/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/',
  theme: 'reco',
  // theme: require.resolve('../../packages/vuepress-theme-reco'),
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '前端技术栈', link: '/views/front/' },
      { text: '后端技术栈', link: '/views/web/' }
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
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'pengfei.shao',
    // 备案号
    record: 'xxxx',
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

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
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
  // plugins: [
  //   ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
  //     body: [
  //       {
  //         type: 'title',
  //         content: '欢迎加入QQ交流群 🎉🎉🎉',
  //         style: 'text-aligin: center;'
  //       },
  //       {
  //         type: 'image',
  //         src: '/rvcode_qq.png'
  //       }
  //     ],
  //     footer: [
  //       {
  //         type: 'button',
  //         text: '打赏',
  //         link: '/donate'
  //       },
  //       {
  //         type: 'button',
  //         text: '打赏',
  //         link: '/donate'
  //       }
  //     ]
  //   }]
  // ]
}
