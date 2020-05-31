---
id: development-environment-setup
title: How to setup the files
sidebar_label: Tutorial - How to setup the files
---
![](/img/tutorials_settingup.png)

## Requirements

* [An account at github.com](https://github.com/join)
* [Visual Studio 2017/2019](https://visualstudio.microsoft.com/en/vs/community/)
* [VSCodium](https://vscodium.com/)
* [A microsoft account](https://account.microsoft.com/account) (for Visual Studio 2019)
* [Github Desktop](https://desktop.github.com/)
* [NodeJS](https://nodejs.org/en/)
* [Ressource hacker](http://angusj.com/resourcehacker/)
* The ability to read
* Patience
* Enough time to not rush through the process
* A copy of escape from tarkov which matches with emutarkov’s work
* A working internet connection

:::warning
Make sure to follow **all the steps** below before asking help. Don't assume things you can't assume and carefully read **everything**.
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


### Building the launcher

1. Github desktop -> select the LeakedClient repository
2. Click the “view in explorer” button
3. Click on Client.sln
4. VS2019 -> Menu Bar-> Build -> Rebuild solution
5. In `(project root)/Launcher/bin/debug/`, a file named `EmuTarkov-Launcher.exe` is located
6. Copy-paste `EmuTarkov-Launcher.exe` in the game’s root directory


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
5. In `(project root)/Shared/`, a file named `Nlog.dll.nlog` is located.
6. Copy-paste `Nlog.dll.nlog` into the `managed` directory.
7. In `(project root)/Emutarkov.Common/bin/debug/`, 2 files should be located: `0Harmony.dll` and `Nlog.EmuTarkov.Common.dll`.
8. Copy both into `managed`.
9. In `(project root)/Emutarkov.Core/bin/debug/`, a file named `Nlog.EmuTarkov.Core` is located.
10. Copy-paste `Nlog.EmuTarkov.Core` into `managed`.
11. In `(project root)/Emutarkov.SinglePlayer/bin/debug/`, a file named `Nlog.EmuTarkov.SinglePlayer` is located.
12. Copy-paste `Nlog.EmuTarkov.SinglePlayer` into `managed`.
13. In `(project root)/Shared/References`, a file named `Assembly-CSharp.dll` is located.
14. Copy-paste  `Assembly-CSharp.dll` into `managed`.

## Thanks
**Tutorial made by : Senko-San**

## Official links
**Discord link**: https://discord.gg/3sR4KKS