---
id: development-environment-setup
title: How to setup the files
sidebar_label: Tutorial - How to setup the files
---

## Requirements:
Here is all the softs you will need in order to build your development/play environment. All softs are linked to their official website to download, always pick the most updated version of it ! (except for VStudio)

* [VSCodium](https://vscodium.com/)
* [Downlading the project you need](https://github.com/TrustedSourceLeaks)
* [NodeJS](https://nodejs.org/en/)
* [Visual Studio 2017/2019](https://visualstudio.microsoft.com/en/vs/community/)
* [Github Desktop](https://desktop.github.com/)
* [An account at github.com](https://github.com/join)
* A little bit of logic

## Obtaining the files

1. Create a free github account.
2. Go to https://github.com/TrustedSourceLeaks
3. Select the project you want to work on and fork it.
4. Download github desktop and install github desktop.
5. Login with your github account.
6. Clone the forked repository.

### Launcher, Emulib
1. Download visual studio 2017/2019.
2. Install with .NET workload and the following components:
    - .NET Framework 2.0
    - .NET Framework 4.6.1


## Starting the development projects

### Server
1. Download and install **VSCodium**.
2. Download and install **node.js (stable release)**.
3. Open the server folder with VSCodium.
4. Go to menu bar -> Terminal -> Run Task... -> Setup -> Continue without scanning the task output.
*  For running the server.
5. Pick one of the following:
    1. F5.
    2. menu bar -> debug -> start debugging.
    3. sidebar -> insect icon -> green arrow.
* For building the server.
6. Pick one of the following:
    1. ctrl + shift + b.
    2. menu bar -> terminal -> run build task.

:::info
You're not forced to build the server in order to use it.
:::

### Launcher, emulib
1. Open visual Studio 2017
2. Click on Toolbar -> File -> Project/Solution -> Open Client.sln
3. Click on Toolbar -> Build -> Rebuild Solution
4. Copy `Launcher/bin/<target>/EmuTarkov-Launcher.exe` into *GameDir/*

:::danger Attention
If an error appear about Emulibs thing, ignore it
:::

### Modules
1. Go to Visual Studio -> menubar -> rebuild.
2. Copy-paste **Shared/Nlog.config.nlog** into *Build/Debug/*.
3. Copy-paste **all files inside Build/** into *EscapeFromTarkov_Data/Managed/*, overwrite when prompted.


## Thanks
**Tutorial made by : Senko-San**

## Official links
**Discord link**: https://discord.gg/3sR4KKS