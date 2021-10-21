const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DIMETODOApp Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#14c4bb' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Features',
        prefix: '/features/',
        icon: "info",
        items: [
          { text: "Login", link: "Login/" },
          { text: "Create New List", link: "CreateNewList/" },
          { text: "Add List Entry", link: "AddListEntry/" },
          { text: "Add List Owner", link: "AddListOwner/" },
          { text: "Remove List Owner", link: "RemoveListOwner/" },
          { text: "Delete List Entry", link: "DeleteListEntry/" },
          { text: "Delete List", link: "DeleteList/" }
        ],
      },
      {
        text: 'Cinco SCCE',
        link: 'https://gitlab.com/scce/cinco/-/wikis/home'
      }
    ],
    sidebar: {
      '/features/': [
        {
          title: 'App Features',
          collapsable: false,
          children: [
            '',
            'Login/',
            'CreateNewList/',
            'AddListEntry/',
            'AddListOwner/',
            'RemoveListOwner/',
            'DeleteListEntry/',
            'DeleteList/'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}	
