---
title: Frequently Asked Questions
sidebar_label: FAQ
---

## <font color="red">Launcher related questions</font>
### <font color="orange">The launcher closes as soon as it opens</font>
Copy-paste `Newtonsoft.Json.dll` and `zlib.net.dll` from `EscapeFromTarkov_Data/Managed/` into the same directory where `EmuTarkov-Launcher.exe` is located.

### <font color="orange">The launcher reports that no servers are available</font>
Make sure that `EmuTarkov-Server.exe` says that the server is running. After this, press the refresh button.

### <font color="orange">The launcher reports that no connection can be established</font>
Make sure that `EmuTarkov-Server.exe` says that the server is running.

### <font color="orange">Object reference not set to an instance of an object reported by launcher</font>
1. Start server
2. Start EscapeFromTarkov.exe
3. Wait about 10 sec on loading screen
4. Close game (Alt+f4)
5. Start EmuTarkov-Launcher.exe

## <font color="red">Server related questions</font>
### <font color="orange">Where is the mods folder located?</font>
In `user/mods/`. If it's not located there, create a folder `mods` in the `user` folder of the server.

### <font color="orange">TypeError: Cannot read property 'menu' of undefined</font>
In order to fix this error, you need to download the language you're using [here](https://github.com/TrustedSourceLeaks/LeakedMods/releases), The language you're using is shown above the error.

eg:
![](https://i.imgur.com/ms4aOFu.png)

/client/menu/locale/**ch** <-- is the language you're using, so download the language mod according to your version.

### <font color="orange">Input string 'number' is not a valid integer.</font>
![](https://i.gyazo.com/eef012c573f3534de20aa8c37ffa9742.png)

**⚠️ <font color="red">If you want to make any changes in your character profile file, close both the game and the server, none of these should run ⚠️ .</font>**

If you encounter this error, you need to: 
1. Go into `user/profile/yourProfileID/character.json`.
2. Search for the number appearing in the error
3. Remove the **".5"** of the number
4. Save the file
5. Start the server


### <font color="orange">How do i recache my server ?</font>
Before recaching your server, make sure to have both the game and server **not started**.

In order to recache your server you need:
1. Head to `ServerDir/user`
2. Delete the **cache** folder
3. Head to `ClientDir/`
4. Delete the **cache** folder
5. Start the server

### <font color="orange">Can i play with friends on EmuTarkov ?</font>

In order to play with your friends, you need to buy an Escape From Tarkov copy at https://www.escapefromtarkov.com/preorder-page

**EmuTarkov will never hold multiplayer capabilitys.**. So no you will not be able to play with your friends using EmuTarkov. Even if you find videos that show people playing with other people on it, it's not made by EmuTarkov tarkov team, and it's absolutely not related to it too.

## <font color="red">Unrelated questions</font>

### <font color="orange">Where can i download the last version of EmuTarkov ?</font>
Just head over the [#download](https://discordapp.com/channels/681163523975675914/681164832153534547/681308314356940809) section in the EmuTarkov discord

Link : https://discord.gg/3sR4KKS

### <font color="orange">The game is stuck at the loading page</font>
This means your assemblies version is wrong or your client version is wrong. Use the lastest files available only in the EmuTarkov discord.

### <font color="orange">How do i clean my temporary EFT folder ?</font>
For cleaning this folder, open the windows start menu and search **%temp%**.

Open this folder and look for **Battlestate Games**. Delete this folder and it's done!

### <font color="orange">Can i use the underbarrel grenade launcher ?</font>
No you can't, the grenade launcher is having issues when reloading which blocks your character of doing anything else in a game. It's not meant to be useable, otherwise it would be available on the official game.

### <font color="orange">I don't have any bots that spawn in my raid</font>
That's normal, in order to get bots to spawn, you need to check the "Enable PVE" checkbox in the raid screen.

### <font color="orange">I'm stuck in the right click menu UI</font>
In order to fix this, you can reduce your mouse right click speed in the windows options.
![](https://cdn.discordapp.com/attachments/681319583533236255/713398124772851802/unknown.png)
![](https://cdn.discordapp.com/attachments/681319583533236255/713398004400259162/unknown.png)

