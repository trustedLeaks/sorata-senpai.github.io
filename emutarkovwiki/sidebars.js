module.exports = {
  docs: {
    'Home': ['Homepage'],
    'FAQ': ['faq/FAQ'],
    'Tutorials':['tutorials/index_tutorials',
    'tutorials/development-environment-setup',
    'tutorials/bug-report',
    'tutorials/create_a_mod',
    'tutorials/edit_weapons_textures',
    'tutorials/photoshop_texture_editing',
    'tutorials/edit_the_player_profile',
    'tutorials/edit_globals_values',
    'tutorials/edit_traders_values',
    'tutorials/create_weather'],
    'Modders resources':[
      'resources/index_mods',
      'resources/playerProfile_resources',
      'resources/itemsStats_resources',
      'resources/locations_resources',
      'resources/quests_resources',
      'resources/other_resources'],
  },
  'Developpers resources': {
      'Developpment Index': ['server_functions/index_dev'],
      'helpfunctions':[
        'server_functions/helpfunctions/findAndReturnChildren',
        'server_functions/helpfunctions/findMoney',
        'server_functions/helpfunctions/fromRUB',
        'server_functions/helpfunctions/getChildId',
        'server_functions/helpfunctions/getCurrency',
        'server_functions/helpfunctions/getItem',
        'server_functions/helpfunctions/getMoney',
        'server_functions/helpfunctions/getPlayerStash',
        'server_functions/helpfunctions/getSize',
        'server_functions/helpfunctions/inRUB',
        'server_functions/helpfunctions/isDogtag',
        'server_functions/helpfunctions/isMoneyTpl',
        'server_functions/helpfunctions/payMoney',
        'server_functions/helpfunctions/recheckInventoryFreeSpace',
        'server_functions/helpfunctions/replaceIds'
      ],
      'utility':[
        'server_functions/utility/adlerGen',
        'server_functions/utility/clearString',
        'server_functions/utility/generateNewAssortId',
        'server_functions/utility/generateNewDialogueId',
        'server_functions/utility/generateNewId',
        'server_functions/utility/generateNewItemId',
        'server_functions/utility/getDate',
        'server_functions/utility/getDirList',
        'server_functions/utility/getLocalIpAddress',
        'server_functions/utility/getRandomInt',
        'server_functions/utility/getRandomIntEx',
        'server_functions/utility/getTime',
        'server_functions/utility/getTimestamp',
        'server_functions/utility/makeSign',
        'server_functions/utility/removeDir'
      ],
      'account':[
        'server_functions/account/getPath'
      ],
      'bots':[
        'server_functions/bots/generatePlayerScav'
      ],
      'customization':[
        'server_functions/customization/getCustomization'
      ]
    }   
  };
