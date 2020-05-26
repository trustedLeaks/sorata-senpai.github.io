---
id: create_a_mod
title: Create a mod on EmuTarkov
sidebar_label: Tutorial - How to create a mod on EmuTarkov
---
## Requirements:
You will need these requirements in order to successfully create your mod.

* [VSCodium](https://vscodium.com/)
* [EmuTarkov server](https://github.com/TrustedSourceLeaks/LeakedServer)
* A little bit of logic

## Why making my changes as a mod ?
By using a mod for your changes, it make it easier for you to manage your edits, and avoid any issue with base DB files. That's for this reason we recommend you to make it as mod, for not overwritting base files. It will avoid you to loose them when you upgrade your server too.

## The main topic.

Well, modding is simple : Overwritting loaded files by the one you added to your mod without editing the default one located in `ServerDir/db/`.

* Create your mod folder, the name need to match like this : **author-name-Version** depending on what you put in the *server.config.json*.

:::info
Your mod folder name should absolutely match the mod.config.json values: Author-Name-Version otherwise the mod wont load
:::
* In this mod folder, create a file called **mod.config.json** and put the following code in :
```json
{
  "name": "NameOfTheMod",
  "author": "AuthorOfTheMod",
  "license": "License",
  "version": "1.0.0",
  "dependencies": {},
  "res": {
      "banners": {},
      "handbook": {},
      "hideout": {},
      "quest": {},
      "trader": {}
  },
  "src":{
    "callback":{
      "nameOfTheScript": "path/to/script/js"
    },
		"classes":{},
		"responses":{}
		
	},
  "db": {
    "locales": {
        "en": {
            "handbook": {
                "<itemid>": "db/locales/en/handbook/<itemid>.json"
            }
        }
    },
    "items": {},
    "assort": {
      "ragfair": {
          "barter":{},
          "items":{},
          "level":{},
          "customization":{},
          "base": "db/assort/ragfair/base.json",
          "categories": "db/assort/ragfair/categories.json"
      }
    },
    "maps": {
      "bigmap": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
              "dynamic":{
                "lootIDFolder":{
                 "lootfileName":"db/path/to/.json"
                }
              },
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "develop": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "factory4_day": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "factory4_night": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "interchange": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "laboratory": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "rezervbase": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "shoreline": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      },
      "woods": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{
            "dynamic":{},
              "forced":{},
              "static":{}
          },
          "waves":{}
      }
    },
    "traders": {},
    "hideout": {
      "areas": {
          "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json",
          "NameOfTheFile2": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "production": {
            "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "scavcase": {
           "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      }
    },
    "weather":{},
    "bots": {
        "bear": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "usec": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "assault": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bossbully": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bossgluhar": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bosskilla": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bosskojaniy": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followerbully": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharassault": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharscout": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharsecurity": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followerkojaniy": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "marksman": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "pmcbot": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        }
    },
    "globals": "db/globals.json"
  }
}
```
### Some explanations :
Note that you now have 3 main "folders". **src**,**res**,**db**:

**src** is made for adding **scripts** mods to the game, everything that is in /src/ folder.
**res** is made for adding or editing games images (traders images for example), everything that is in /res/ folder.
**db** is made for edit or add servers items, quest, locale and so on, everything that is in /db/ folder.

As you can see, there's the filepath for each moddable part, we will edit this part when we have edited what we want, for our case, it's an item. I want to edit my sicc item case to have more slots, the item ID is : *5d235bb686f77443f4331278*. So i copy the file `5d235bb686f77443f4331278.json` in `ServerDir/db/items` and i paste it in `ServerDir/user/mods/Author-MyModName-version/db/items/`. The file path must be the same as where you copy the file you want to mod.

* I open my file up with any IDE, i prefer VScodium personnaly, and make my changes. After that i save and close the file.
* Now that i edited my file, i go back to my *mod.config.json* and i go into the items brackets for adding my item. For me it will looks like this :
```json
 "db": {
    "items": {
         "5d235bb686f77443f4331278": "db/items/5d235bb686f77443f4331278.json"
    },
```
* Save your mod.config.json and start the server. It should recache and your mod is working ! Good job comrade !

:::danger Attention
If any of the ModName, author or version number isn't the same in mod.config.json and the folder name, the server wont start and will crash.
:::

### License
It's important to tell which license your mod uses, as this also tells other modders what they can do with your work.
Do you use a license? If none, set this to MIT (which basically says that others can use your work for anything but you are not responsible if you break something in your mod). If you do, set this to the short code of your license (MPL-2.1 instead of Mozilla Public License 2.1).

### The end
Good job, you made your first mod for EmuTarkov, all other parts to be modded work the same way. Just reproduce it with the desired part !

### Try your mod.config.json
> Use this live editor to see if your mod.config.json contain syntax error.

:::danger Attention
This wont let you know if your mod will works correctly in game, but it will only tell you if your file syntax is correct.
:::

```javascript live
function test(){
  const test =
  //Put your mod.config.json below this line.
  

  return "Your JSON is OKAY"
}
```

## Thanks
**Thanks to @InNoHurryToCode for making modding possible on EmuTarkov !**

**Tutorial made by : Sorata-Senpai**
## Official links
**Discord link**: https://discord.gg/3sR4KKS