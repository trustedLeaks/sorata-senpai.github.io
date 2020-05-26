module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'Homepage'
    },
    {
      type: 'doc',
      id: 'faq/FAQ'
    },
    {
      type: "category",
      label: "Tutorials",
      items: ['tutorials/index_tutorials',
      'tutorials/development-environment-setup',
      'tutorials/bug-report',
      'tutorials/create_a_mod',
      'tutorials/edit_weapons_textures',
      'tutorials/photoshop_texture_editing',
      'tutorials/edit_the_player_profile',
      'tutorials/edit_globals_values',
      'tutorials/edit_traders_values',
      'tutorials/create_weather']
    },
    {
      type: "category",
      label: "Modders resources",
      items:[
        'resources/index_mods',
        'resources/playerProfile_resources',
        'resources/itemsStats_resources',
        'resources/locations_resources',
        'resources/quests_resources',
        'resources/other_resources']
    }
  ],
  'Developpers resources': [
    {
      type: 'doc',
      id: 'server_functions/index_dev'
    },
    {
      type: "category",
      label: "helpfunctions",
      items: [
        'server_functions/helpfunctions/arrayIntersect',
        'server_functions/helpfunctions/childrenCategories',
        'server_functions/helpfunctions/clone',
        'server_functions/helpfunctions/findAndReturnChildren',
        'server_functions/helpfunctions/findInventoryItemById',
        'server_functions/helpfunctions/findMoney',
        'server_functions/helpfunctions/fromRUB',
        'server_functions/helpfunctions/getChildId',
        'server_functions/helpfunctions/getCurrency',
        'server_functions/helpfunctions/getItem',
        'server_functions/helpfunctions/getMoney',
        'server_functions/helpfunctions/getPlayerStash',
        'server_functions/helpfunctions/getSize',
        'server_functions/helpfunctions/getTemplatePrice',
        'server_functions/helpfunctions/inRUB',
        'server_functions/helpfunctions/isCategory',
        'server_functions/helpfunctions/isDogtag',
        'server_functions/helpfunctions/isMoneyTpl',
        'server_functions/helpfunctions/isNotSellable',
        'server_functions/helpfunctions/payMoney',
        'server_functions/helpfunctions/recheckInventoryFreeSpace',
        'server_functions/helpfunctions/replaceIds',
        'server_functions/helpfunctions/splitStack',
        'server_functions/helpfunctions/templatesWithParent'
      ]
    },
    {
      type: "category",
      label: "utility",
      items: [
        'server_functions/utility/adlerGen',
        'server_functions/utility/clearString',
        'server_functions/utility/generateNewAccountId',
        'server_functions/utility/generateNewDialogueId',
        'server_functions/utility/generateNewItemId',
        'server_functions/utility/getDate',
        'server_functions/utility/getDirList',
        'server_functions/utility/getLocalIpAddress',
        'server_functions/utility/getRandomInt',
        'server_functions/utility/getRandomIntEx',
        'server_functions/utility/getTime',
        'server_functions/utility/getTimestamp',
        'server_functions/utility/makeSign',
        'server_functions/utility/removeDir',
        'server_functions/utility/secondsToTime'
      ]
    },
    {
      type: "category",
      label: "hideout",
      items: [
        'server_functions/hideout/applyPlayerUpgradeBonuses',
        'server_functions/hideout/continuousProductionStart',
        'server_functions/hideout/getBTC',
        'server_functions/hideout/initialize',
        'server_functions/hideout/putItemsInAreaSlots',
        'server_functions/hideout/registerProduction',
        'server_functions/hideout/scavCaseProductionStart',
        'server_functions/hideout/singleProductionStart',
        'server_functions/hideout/takeItemsFromAreaSlots',
        'server_functions/hideout/takeProduction',
        'server_functions/hideout/toggleArea',
        'server_functions/hideout/upgrade',
        'server_functions/hideout/upgradeComplete'
      ]
    },
    {
      type: "category",
      label: "account",
      items: [
        'server_functions/account/getPath'
      ]
    },
    {
      type: "category",
      label: "bots",
      items: [
        'server_functions/bots/generatePlayerScav'
      ]
    },
    {
      type: "category",
      label: "customization",
      items: [
        'server_functions/customization/getCustomization'
      ]
    }
  ]
};
