export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "EmuTarkov Documentation",
      "logo": {
        "alt": "EmuTarkov Logo",
        "src": "https://kandasoranyan.github.io/EmuTarkovWiki/_images/logo.png"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "https://discord.gg/3sR4KKS",
          "label": "Discord",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "EmuTarkov github",
              "href": "https://github.com/TrustedSourceLeaks"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/3sR4KKS"
            },
            {
              "label": "About EmuTarkov",
              "to": "docs/about"
            },
            {
              "label": "Download EmuTarkov",
              "to": "docs/faq/FAQ#where-can-i-download-the-last-version-of-emutarkov-"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 EmuTarkov, Inc. Built with Docusaurus."
    }
  },
  "title": "EmuTarkov Documentation",
  "tagline": "A complete documentation about EmuTarkov emulator for Escape From Tarkov.",
  "url": "https://kandasoranyan.github.io/Docosaurus/",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "EmuTarkov",
  "projectName": "EmuTarkov Wiki",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "Homepage",
          "sidebarPath": "E:\\Github_Repositories\\Docosaurus\\emutarkovwiki\\sidebars.js",
          "editUrl": "https://github.com/KandaSoranyan/Docosaurus/tree/master"
        },
        "theme": {
          "customCss": "E:\\Github_Repositories\\Docosaurus\\emutarkovwiki\\src\\css\\custom.css"
        }
      }
    ]
  ]
};