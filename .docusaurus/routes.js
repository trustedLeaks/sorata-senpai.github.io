
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/Homepage',
  component: ComponentCreator('/docs/Homepage'),
  exact: true,
  
},
{
  path: '/docs/LICENSE',
  component: ComponentCreator('/docs/LICENSE'),
  exact: true,
  
},
{
  path: '/docs/about',
  component: ComponentCreator('/docs/about'),
  exact: true,
  
},
{
  path: '/docs/faq/FAQ',
  component: ComponentCreator('/docs/faq/FAQ'),
  exact: true,
  
},
{
  path: '/docs/resources/index',
  component: ComponentCreator('/docs/resources/index'),
  exact: true,
  
},
{
  path: '/docs/resources/itemsStats_resources',
  component: ComponentCreator('/docs/resources/itemsStats_resources'),
  exact: true,
  
},
{
  path: '/docs/resources/locations_resources',
  component: ComponentCreator('/docs/resources/locations_resources'),
  exact: true,
  
},
{
  path: '/docs/resources/other_resources',
  component: ComponentCreator('/docs/resources/other_resources'),
  exact: true,
  
},
{
  path: '/docs/resources/playerProfile_resources',
  component: ComponentCreator('/docs/resources/playerProfile_resources'),
  exact: true,
  
},
{
  path: '/docs/resources/quests_resources',
  component: ComponentCreator('/docs/resources/quests_resources'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/findAndReturnChildren',
  component: ComponentCreator('/docs/server_functions/helpfunctions/findAndReturnChildren'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/findMoney',
  component: ComponentCreator('/docs/server_functions/helpfunctions/findMoney'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/fromRUB',
  component: ComponentCreator('/docs/server_functions/helpfunctions/fromRUB'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getChildId',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getChildId'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getCurrency',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getCurrency'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getItem',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getItem'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getMoney',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getMoney'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getPlayerStash',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getPlayerStash'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/getSize',
  component: ComponentCreator('/docs/server_functions/helpfunctions/getSize'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/inRUB',
  component: ComponentCreator('/docs/server_functions/helpfunctions/inRUB'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/isDogtag',
  component: ComponentCreator('/docs/server_functions/helpfunctions/isDogtag'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/isMoneyTpl',
  component: ComponentCreator('/docs/server_functions/helpfunctions/isMoneyTpl'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/payMoney',
  component: ComponentCreator('/docs/server_functions/helpfunctions/payMoney'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/recheckInventoryFreeSpace',
  component: ComponentCreator('/docs/server_functions/helpfunctions/recheckInventoryFreeSpace'),
  exact: true,
  
},
{
  path: '/docs/server_functions/helpfunctions/replaceIds',
  component: ComponentCreator('/docs/server_functions/helpfunctions/replaceIds'),
  exact: true,
  
},
{
  path: '/docs/server_functions/index',
  component: ComponentCreator('/docs/server_functions/index'),
  exact: true,
  
},
{
  path: '/docs/server_functions/list',
  component: ComponentCreator('/docs/server_functions/list'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/adlerGen',
  component: ComponentCreator('/docs/server_functions/utility/adlerGen'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/clearString',
  component: ComponentCreator('/docs/server_functions/utility/clearString'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/generateNewAssortId',
  component: ComponentCreator('/docs/server_functions/utility/generateNewAssortId'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/generateNewDialogueId',
  component: ComponentCreator('/docs/server_functions/utility/generateNewDialogueId'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/generateNewId',
  component: ComponentCreator('/docs/server_functions/utility/generateNewId'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/generateNewItemId',
  component: ComponentCreator('/docs/server_functions/utility/generateNewItemId'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getDate',
  component: ComponentCreator('/docs/server_functions/utility/getDate'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getDirList',
  component: ComponentCreator('/docs/server_functions/utility/getDirList'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getLocalIpAdress',
  component: ComponentCreator('/docs/server_functions/utility/getLocalIpAdress'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getRandomInt',
  component: ComponentCreator('/docs/server_functions/utility/getRandomInt'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getRandomIntEx',
  component: ComponentCreator('/docs/server_functions/utility/getRandomIntEx'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getTime',
  component: ComponentCreator('/docs/server_functions/utility/getTime'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/getTimestamp',
  component: ComponentCreator('/docs/server_functions/utility/getTimestamp'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/makeSign',
  component: ComponentCreator('/docs/server_functions/utility/makeSign'),
  exact: true,
  
},
{
  path: '/docs/server_functions/utility/removeDir',
  component: ComponentCreator('/docs/server_functions/utility/removeDir'),
  exact: true,
  
},
{
  path: '/docs/tutorials/bug-report',
  component: ComponentCreator('/docs/tutorials/bug-report'),
  exact: true,
  
},
{
  path: '/docs/tutorials/create_a_mod',
  component: ComponentCreator('/docs/tutorials/create_a_mod'),
  exact: true,
  
},
{
  path: '/docs/tutorials/create_weather',
  component: ComponentCreator('/docs/tutorials/create_weather'),
  exact: true,
  
},
{
  path: '/docs/tutorials/development-environment-setup',
  component: ComponentCreator('/docs/tutorials/development-environment-setup'),
  exact: true,
  
},
{
  path: '/docs/tutorials/edit_globals_values',
  component: ComponentCreator('/docs/tutorials/edit_globals_values'),
  exact: true,
  
},
{
  path: '/docs/tutorials/edit_the_player_profile',
  component: ComponentCreator('/docs/tutorials/edit_the_player_profile'),
  exact: true,
  
},
{
  path: '/docs/tutorials/edit_traders_values',
  component: ComponentCreator('/docs/tutorials/edit_traders_values'),
  exact: true,
  
},
{
  path: '/docs/tutorials/edit_weapons_texture',
  component: ComponentCreator('/docs/tutorials/edit_weapons_texture'),
  exact: true,
  
},
{
  path: '/docs/tutorials/index',
  component: ComponentCreator('/docs/tutorials/index'),
  exact: true,
  
},
{
  path: '/docs/tutorials/photoshop_texture_editing',
  component: ComponentCreator('/docs/tutorials/photoshop_texture_editing'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
