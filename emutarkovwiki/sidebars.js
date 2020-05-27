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
      label: "classes",
      items: [
        {
          type: "category",
          label: "account",
          items: [
            'server_functions/classes/account/getPath'
          ]
        },
        {
          type: "category",
          label: "bots",
          items: [
            'server_functions/classes/bots/generate',
            'server_functions/classes/bots/generatePlayerScav'
          ]
        },
        {
          type: "category",
          label: "customization",
          items: [
            'server_functions/classes/customization/buyClothing',
            'server_functions/classes/customization/getCustomization',
            'server_functions/classes/customization/getPath',
            'server_functions/classes/customization/initialize',
            'server_functions/classes/customization/wearClothing'
          ]
        },
        {
          type: "category",
          label: "dialogue",
          items: [
            'server_functions/classes/dialogue/dialogueServer',
            'server_functions/classes/dialogue/findAndReturnChildren',
            'server_functions/classes/dialogue/getMessageTypeValue',
            {
              type: "category",
              label: "dialogueServer",
              items: [
                'server_functions/classes/dialogue/dialogueServer/addDialogueMessage',
                'server_functions/classes/dialogue/dialogueServer/generateDialogueList',
                'server_functions/classes/dialogue/dialogueServer/generateDialogueView',
                'server_functions/classes/dialogue/dialogueServer/getAllAttachments',
                'server_functions/classes/dialogue/dialogueServer/getDialogueInfo',
                'server_functions/classes/dialogue/dialogueServer/getMessageItemContents',
                'server_functions/classes/dialogue/dialogueServer/getMessagePreview',
                'server_functions/classes/dialogue/dialogueServer/initializeDialogue',
                'server_functions/classes/dialogue/dialogueServer/removeDialogue',
                'server_functions/classes/dialogue/dialogueServer/saveToDisk',
                'server_functions/classes/dialogue/dialogueServer/setDialoguePin',
                'server_functions/classes/dialogue/dialogueServer/setRead'
              ]
            }
          ]
        },
        {
          type: "category",
          label: "health",
          items: [
            'server_functions/classes/health/healthServer',
            {
              type: "category",
              label: "healthServer",
              items: [
                'server_functions/classes/health/healthServer/applyHealth',
                'server_functions/classes/health/healthServer/initializeHealth',
                'server_functions/classes/health/healthServer/offraidEat',
                'server_functions/classes/health/healthServer/offraidHeal',
                'server_functions/classes/health/healthServer/setHealth',
                'server_functions/classes/health/healthServer/updateHealth'
              ]
            }
          ]
        },
        {
          type: "category",
          label: "helpfunctions",
          items: [
            'server_functions/classes/helpfunctions/arrayIntersect',
            'server_functions/classes/helpfunctions/childrenCategories',
            'server_functions/classes/helpfunctions/clone',
            'server_functions/classes/helpfunctions/findAndReturnChildren',
            'server_functions/classes/helpfunctions/findInventoryItemById',
            'server_functions/classes/helpfunctions/findMoney',
            'server_functions/classes/helpfunctions/fromRUB',
            'server_functions/classes/helpfunctions/getChildId',
            'server_functions/classes/helpfunctions/getCurrency',
            'server_functions/classes/helpfunctions/getItem',
            'server_functions/classes/helpfunctions/getMoney',
            'server_functions/classes/helpfunctions/getPlayerStash',
            'server_functions/classes/helpfunctions/getSize',
            'server_functions/classes/helpfunctions/getTemplatePrice',
            'server_functions/classes/helpfunctions/inRUB',
            'server_functions/classes/helpfunctions/isCategory',
            'server_functions/classes/helpfunctions/isDogtag',
            'server_functions/classes/helpfunctions/isMoneyTpl',
            'server_functions/classes/helpfunctions/isNotSellable',
            'server_functions/classes/helpfunctions/payMoney',
            'server_functions/classes/helpfunctions/recheckInventoryFreeSpace',
            'server_functions/classes/helpfunctions/replaceIds',
            'server_functions/classes/helpfunctions/splitStack',
            'server_functions/classes/helpfunctions/templatesWithParent'
          ]
        },
        {
          type: "category",
          label: "hideout",
          items: [
            'server_functions/classes/hideout/applyPlayerUpgradeBonuses',
            'server_functions/classes/hideout/continuousProductionStart',
            'server_functions/classes/hideout/getBTC',
            'server_functions/classes/hideout/initialize',
            'server_functions/classes/hideout/putItemsInAreaSlots',
            'server_functions/classes/hideout/registerProduction',
            'server_functions/classes/hideout/scavCaseProductionStart',
            'server_functions/classes/hideout/singleProductionStart',
            'server_functions/classes/hideout/takeItemsFromAreaSlots',
            'server_functions/classes/hideout/takeProduction',
            'server_functions/classes/hideout/toggleArea',
            'server_functions/classes/hideout/upgrade',
            'server_functions/classes/hideout/upgradeComplete'
          ]
        },
        {
          type: "category",
          label: "insurance",
          items: [
            'server_functions/classes/insurance/insuranceServer',
            'server_functions/classes/insurance/insure',
            'server_functions/classes/insurance/cost',
            {
              type: "category",
              label: "insuranceServer",
              items: [
                'server_functions/classes/insurance/insuranceServer/addGearToSend',
                'server_functions/classes/insurance/insuranceServer/checkExpiredInsurance',
                'server_functions/classes/insurance/insuranceServer/processReturn',
                'server_functions/classes/insurance/insuranceServer/remove',
                'server_functions/classes/insurance/insuranceServer/resetSession',
                'server_functions/classes/insurance/insuranceServer/sendInsuredItems',
                'server_functions/classes/insurance/insuranceServer/storeDeadGear',
                'server_functions/classes/insurance/insuranceServer/storeLostGear'
              ]
            }
          ]
        },
        {
          type: "category",
          label: "item",
          items: [
            'server_functions/classes/item/itemServer',
            {
              type: "category",
              label: "itemServer",
              items: [
                'server_functions/classes/item/itemServer/addRoute',
                'server_functions/classes/item/itemServer/getOutput',
                'server_functions/classes/item/itemServer/handleRoutes',
                'server_functions/classes/item/itemServer/resetOutput',
                'server_functions/classes/item/itemServer/setOutput'
              ]
            }
          ]
        },
        {
          type: "category",
          label: "locale",
          items: [
            'server_functions/classes/locale/getGlobal',
            'server_functions/classes/locale/getLanguages',
            'server_functions/classes/locale/getMenu',
          ]
        },
        {
          type: "category",
          label: "location",
          items: [
            'server_functions/classes/location/locationServer',
            {
              type: "category",
              label: "locationServer",
              items: [
                'server_functions/classes/location/locationServer/generate',
                'server_functions/classes/location/locationServer/generateAll',
                'server_functions/classes/location/locationServer/get',
                'server_functions/classes/location/locationServer/initializeLocations'
              ]
            },
          ]
        },
        {
          type: "category",
          label: "move",
          items: [
            'server_functions/classes/move/addItem',
            'server_functions/classes/move/discardItem',
            'server_functions/classes/move/mergeItem',
            'server_functions/classes/move/moveItem',
            'server_functions/classes/move/removeItem',
            'server_functions/classes/move/removeItemFromProfile',
            'server_functions/classes/move/splitItem',
            'server_functions/classes/move/swapItem',
            'server_functions/classes/move/transferItem'
          ]
        },
        {
          type: "category",
          label: "note",
          items: [
            'server_functions/classes/note/addNote',
            'server_functions/classes/note/deleteNote',
            'server_functions/classes/note/editNode'
          ]
        },
        {
          type: "category",
          label: "notifier",
          items: [
            'server_functions/classes/notifier/notifierService',
            'server_functions/classes/notifier/createNewMessageNotification',
            {
              type: "category",
              label: "notifierService",
              items: [
                'server_functions/classes/notifier/notifierService/addToMessageQueue',
                'server_functions/classes/notifier/notifierService/getMessageQueue',
                'server_functions/classes/notifier/notifierService/hasMessageQueue',
                'server_functions/classes/notifier/notifierService/hasMessagesInQueue',
                'server_functions/classes/notifier/notifierService/notificationWaitAsync',
                'server_functions/classes/notifier/notifierService/popMessageFromQueue'
              ]
            },
          ]
        },
        {
          type: "category",
          label: "offraid",
          items: [
            'server_functions/classes/offraid/getPlayerGear',
            'server_functions/classes/offraid/getSecuredContainer',
            'server_functions/classes/offraid/saveProgress'
          ]
        },
        {
          type: "category",
          label: "preset",
          items: [
            'server_functions/classes/preset/itemPresets',
            {
              type: "category",
              label: "itemPresets",
              items: [
                'server_functions/classes/preset/itemPresets/getBaseItemTpl',
                'server_functions/classes/preset/itemPresets/getPresets',
                'server_functions/classes/preset/itemPresets/getStandardPreset',
                'server_functions/classes/preset/itemPresets/hasPreset',
                'server_functions/classes/preset/itemPresets/isPreset'
              ]
            },
          ]
        },
        {
          type: "category",
          label: "profile",
          items: [
            'server_functions/classes/profile/profileServer',
            'server_functions/classes/profile/getStashType',
            'server_functions/classes/profile/calculateLevel',
            {
              type: "category",
              label: "profileServer",
              items: [
                'server_functions/classes/profile/profileServer/changeNickname',
                'server_functions/classes/profile/profileServer/changeVoice',
                'server_functions/classes/profile/profileServer/createProfile',
                'server_functions/classes/profile/profileServer/generateScav',
                'server_functions/classes/profile/profileServer/getCompleteProfile',
                'server_functions/classes/profile/profileServer/getOpenSessions',
                'server_functions/classes/profile/profileServer/getPmcProfile',
                'server_functions/classes/profile/profileServer/getProfile',
                'server_functions/classes/profile/profileServer/getScavProfile',
                'server_functions/classes/profile/profileServer/initializeProfile',
                'server_functions/classes/profile/profileServer/loadProfilesFromDisk',
                'server_functions/classes/profile/profileServer/saveToDisk',
                'server_functions/classes/profile/profileServer/setScavProfile',
                'server_functions/classes/profile/profileServer/validateNickname'
              ]
            },
          ]
        },
        {
          type: "category",
          label: "quest",
          items: [
            'server_functions/classes/quest/acceptQuest',
            'server_functions/classes/quest/completeQuest',
            'server_functions/classes/quest/getQuestsCache',
            'server_functions/classes/quest/handoverQuest',
            'server_functions/classes/quest/initialize'
          ]
        },
        {
          type: "category",
          label: "ragfair",
          items: [
            'server_functions/classes/ragfair/getOffers',
            'server_functions/classes/ragfair/itemMarKetPrice',
            'server_functions/classes/ragfair/ragFairAddOffer'
          ]
        },
        {
          type: "category",
          label: "repair",
          items: [
            'server_functions/classes/repair/main'
          ]
        },
        {
          type: "category",
          label: "response",
          items: [
            'server_functions/classes/response/emptyArrayResponse',
            'server_functions/classes/response/getBody',
            'server_functions/classes/response/noBody',
            'server_functions/classes/response/nullResponse'
          ]
        },
        {
          type: "category",
          label: "savehandler",
          items: [
            'server_functions/classes/savehandler/initialize',
            'server_functions/classes/savehandler/saveOpenSessions'
          ]
        },
        {
          type: "category",
          label: "staticdata",
          items: [
            'server_functions/classes/staticdata/initialize'
          ]
        },
        {
          type: "category",
          label: "status",
          items: [
            'server_functions/classes/status/bindItem',
            'server_functions/classes/status/examineItem',
            'server_functions/classes/status/foldItem',
            'server_functions/classes/status/readEncyclopedia',
            'server_functions/classes/status/tagItem',
            'server_functions/classes/status/toggleItem'
          ]
        },
        {
          type: "category",
          label: "trade",
          items: [
            'server_functions/classes/trade/buyItem',
            'server_functions/classes/trade/confirmRagfairTrading',
            'server_functions/classes/trade/confirmTrading',
            'server_functions/classes/trade/sellItem'
          ]
        },
        {
          type: "category",
          label: "trader",
          items: [
            'server_functions/classes/trader/traderServer',
            {
              type: "category",
              label: "traderServer",
              items: [
                'server_functions/classes/trader/traderServer/changeTraderDisplay',
                'server_functions/classes/trader/traderServer/generateAssort',
                'server_functions/classes/trader/traderServer/generateFenceAssort',
                'server_functions/classes/trader/traderServer/getAllCustomization',
                'server_functions/classes/trader/traderServer/getAllTraders',
                'server_functions/classes/trader/traderServer/getAssort',
                'server_functions/classes/trader/traderServer/getCustomization',
                'server_functions/classes/trader/traderServer/getPurchasesData',
                'server_functions/classes/trader/traderServer/getTrader',
                'server_functions/classes/trader/traderServer/initializeTraders',
                'server_functions/classes/trader/traderServer/lvlUp',
                'server_functions/classes/trader/traderServer/removeItemFromAssort',
                'server_functions/classes/trader/traderServer/resetTrader'
              ]
            },
          ]
        },
        {
          type: "category",
          label: "userbuilds",
          items: [
            'server_functions/classes/userbuilds/getPath',
            'server_functions/classes/userbuilds/getUserBuilds',
            'server_functions/classes/userbuilds/removeBuild',
            'server_functions/classes/userbuilds/saveBuild'
          ]
        },
        {
          type: "category",
          label: "utility",
          items: [
            'server_functions/classes/utility/adlerGen',
            'server_functions/classes/utility/clearString',
            'server_functions/classes/utility/generateNewAccountId',
            'server_functions/classes/utility/generateNewDialogueId',
            'server_functions/classes/utility/generateNewItemId',
            'server_functions/classes/utility/getDate',
            'server_functions/classes/utility/getDirList',
            'server_functions/classes/utility/getLocalIpAddress',
            'server_functions/classes/utility/getRandomInt',
            'server_functions/classes/utility/getRandomIntEx',
            'server_functions/classes/utility/getTime',
            'server_functions/classes/utility/getTimestamp',
            'server_functions/classes/utility/makeSign',
            'server_functions/classes/utility/removeDir',
            'server_functions/classes/utility/secondsToTime'
          ]
        },
        {
          type: "category",
          label: "weather",
          items: [
            'server_functions/classes/weather/generate',
            'server_functions/classes/weather/initialize',
          ]
        },
        {
          type: "category",
          label: "wishlist",
          items: [
            'server_functions/classes/wishlist/addToWishList',
            'server_functions/classes/wishlist/removeFromWishList',
            'server_functions/classes/wishlist/resetWishList',
          ]
        },
      ]
    },
    {
      type: "category",
      label: "callbacks",
      items: [
        'server_functions/callbacks/placeHolder_file',
      ]
    },
    {
      type: "category",
      label: "responses",
      items: [
        'server_functions/responses/placeHolder_file',
      ]
    },
  ]
};
