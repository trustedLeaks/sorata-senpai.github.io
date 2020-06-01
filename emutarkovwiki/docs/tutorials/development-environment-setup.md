---
id: development-environment-setup
title: How to setup the files
sidebar_label: Tutorial - How to setup the files
---
![](/img/tutorials_settingup.png)

## Requirements

* [A github account](https://github.com/join)
* [A microsoft account](https://account.microsoft.com/account) (for Visual Studio 2019)
* [Visual Studio 2017 / 2019](https://visualstudio.microsoft.com/en/vs/community/)
* [VSCodium](https://vscodium.com/)
* [Github Desktop](https://desktop.github.com/)
* [NodeJS](https://nodejs.org/en/)
* [Resource hacker](http://angusj.com/resourcehacker/)
* A copy of escape from tarkov which matches with emutarkov’s work
* A working internet connection

:::warning
Make sure to follow **all the steps** below before asking help. Don't assume things Wand carefully read **everything**.
:::

## 1. Installing your developer environment

### Visual Studio 2019 (VC2019)
1. Download Visual Studio Community edition
2. Run the installer
3. For workload, select .NET Desktop (C#)
4. Press install
5. Login with your microsoft account when prompted

### Visual Studio Codium (VSCodium)
1. Download Visual Studio Codium
2. Run the installer
3. Press install

### NodeJS
1. Download NodeJS
2. Run the installer
3. Make sure to select “Add to PATH”
4. Deselect installation of chocolaty
5. Press install

### Github Desktop
1. Download Github Desktop
2. Run the installer
3. Login with your github account


## 2. Obtaining the files

1. Go to https://github.com/TrustedSourceLeaks 
2. Open every repository in a new tab
3. For each repository, click on “Clone or Download” -> “Open in desktop”
 

## 3. Setting up the server

1. Download ResourceHacker (zip file)
2. Unzip the resource hacker zip
3. Copy ResourceHacker.exe
4. Github desktop -> select the LeakedServer repository
5. Click the “view in explorer” button
6. Go to the dev folder
7. Create a new folder named “bin” (without quotes)
8. Paste ResourceHacker.exe in the bin folder
9. Github desktop -> select the LeakedServer repository
10. Click the “open in editor” button
11. VSCode -> Menu Bar -> Run -> Run task... -> NPM -> Install


### Building the server
:::note
This step require internet only the first time you do it
:::

1. VSCode -> Menu Bar -> Run -> Run build task
2. In the `(project root)` folder, `EmuTarkov-Server.exe` should appear


### Building the modules

:::note
This step require internet only the first time you do it
:::
:::info
I will be referencing to `EscapeFromTarkov_Data/Managed/` as `managed`.
:::

1. Github desktop -> select the LeakedModules repository.
2. Click the “view in explorer” button.
3. Click on Modules.sln.
4. VS2019 -> Menu Bar-> Build -> Rebuild solution.
5. Copy-paste the contents of `(project root directory)/build` into the game root directory


## Thanks
**Tutorial made by : Senko-San**


## Revisions

1. added instructions for assembly-charp, slight wording change
2. changed the instruction to reflect the new build procedure


## Official links
**Discord link**: https://discord.gg/3sR4KKS