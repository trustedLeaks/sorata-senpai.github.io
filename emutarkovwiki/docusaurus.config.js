module.exports = {
  title: 'EmuTarkov Documentation',
  tagline: 'A complete documentation about EmuTarkov emulator for Escape From Tarkov.',
  url: 'https://sorata.github.io/',
  baseUrl: '/',
  favicon: '',
  organizationName: 'EmuTarkov', // Usually your GitHub org/user name.
  projectName: 'EmuTarkov Wiki', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: 'EmuTarkov Documentation',
      logo: {
        alt: 'EmuTarkov Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/', activeBasePath: 'docs', label: 'Documentation', position: 'left'},
        {to: 'https://discord.gg/3sR4KKS', label: 'Discord', position: 'left'},
        {to: 'docs/faq/FAQ', label: 'FAQ', position: 'left'},
        {to: 'docs/tutorials/index_tutorials', label: 'Tutorials', position: 'left'},
        {to: 'docs/resources/index_mods', label: 'Modders', position: 'left'},
        {to: 'docs/server_functions/index_dev', label: 'Developers', position: 'left'},
        {href: 'https://github.com/TrustedSourceLeaks', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {label: 'EmuTarkov github', href: 'https://github.com/TrustedSourceLeaks'},
            {label: 'Download EmuTarkov', to: 'docs/faq/FAQ#where-can-i-download-the-last-version-of-emutarkov-'},
            {label: 'About EmuTarkov', to: 'docs/about'},
          ],
        },
        {
          title: 'Escape from Tarkov',
          items: [
            {label: 'Escape From Tarkov Official', href: 'https://www.escapefromtarkov.com'},
            {label: 'Buy Escape From Tarkov', href: 'https://www.escapefromtarkov.com/preorder-page'},
            {label: 'Escape From Tarkov Wiki', href: 'https://escapefromtarkov.gamepedia.com/Escape_from_Tarkov_Wiki'}
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EmuTarkov, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'Homepage',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sorata/sorata.github.io/tree/master/emutarkovwiki',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    //'@aldridged/docusaurus-plugin-lunr'
  ],
  themes: ['@docusaurus/theme-live-codeblock','docusaurus-theme-search-algolia'],
};
