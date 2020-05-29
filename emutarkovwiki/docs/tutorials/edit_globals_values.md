---
id: edit_globals_values
title: Change global values of the server
sidebar_label: Tutorial - Change global values of the server
---
![](/img/tutorials_globals.png)


## Requirements
For doing **any** edits in EmuTarkov, i higly recommend you to use this software :
* [VSCodium](https://github.com/VSCodium/vscodium/releases)
* Actual EmuTarkov server

This software is free and very helpfull for a lot of things, like missing comas and everything about the syntax.
* Make a backup of the profile you're using.

For this, head to `ServerFolder/db/` make a backup of **globals.json** file and [create a mod](tutorials/create_a_mod) with the **globals.json** file in it.

:::caution
If you want to make any changes, close both the game and the server, none of these should run.
:::

## Table :
* [Change minimum level for flea market](edit_globals_values.md#change-minimum-level-for-flea-market)
* [Change exp related stuff](edit_globals_values.md#change-exp-related-stuff)
* [Change stamina stuff](edit_globals_values.md#change-stamina-stuff)
* [Change weight stuff](edit_globals_values.md#change-weight-stuff)
* [Change health effect stuff](edit_globals_values.md#change-health-effect-stuff)
* [Increase how much money i can carry in a raid](edit_globals_values.md#increase-how-much-money-i-can-carry-in-a-raid)
* [Remove the fatigue effect on skills](edit_globals_values.md#remove-the-fatigue-effect-on-skills)

## Change minimum level for flea market
We are going to change the minimum level requirement in order to access the flea market in EmuTarkov. Head to this file : **ServerFile/db/globals.json** and open it.

Search this variable in the file: *minUserLevel* and when you've found it, the only thing you have to do is to change the number to the desired level you want the flea market available. Nothing more.

Don't forget to save the file and recache after editing !
## Change exp related stuff
[Redacting]
## Change stamina stuff
[Redacting]
## Change weight stuff
[Redacting]
## Change health effect stuff
[Redacting]
## Increase how much money i can carry in a raid
[Redacting]
## Remove the fatigue effect on skills
We are going to change the skill fatigue exhaustion in order to be more limited on skill leveling, or removing it completely, for our example we will remove it completely. Head to this file : **ServerFile/db/globals.json** and open it.

Then search for **SkillFatigue**, as a search result you should find below stuff:
```json
"SkillMinEffectiveness": 0.0001,
"SkillFatiguePerPoint": 0.5,
"SkillFreshEffectiveness": 1.3,
"SkillFreshPoints": 1,
"SkillPointsBeforeFatigue": 1,
"SkillFatigueReset": 300,
```
**What these variables means ?**
First of all, you need to know that the "skill fatigue" is a value incremented depending on your skill's gain. It's a number from 0 to any.
* **SkillMinEffectiveness**
    * That's the multiplier applied to the skill when in fatigue state
* **SkillFatiguePerPoint**
    * This is the number of fatigue points you get per skill point you've got in the raid
* **SkillFreshEffectiveness**
    * That's the multiplier that decides how much exp you get in the skill when it's "fresh"
* **SkillFreshPoints**
    * ?
* **SkillPointsBeforeFatigue**
    * This is the number of points before the skill enter into the "fatigue" state and get its progression stopped
* **SkillFatigueReset**
    * How much points from other skills for the skill fatigue being reset

In order to not having a skill in a fatigue state, we will simply change the **SkillFatiguePerPoint** variable value by *0*. After that save your change, [recache](faq/FAQ.md#how-do-i-recache-my-server-) the server and that's good !

## Thanks
**Tutorials made by : Sorata-Senpai**

## Official links
**Discord link**: https://discord.gg/3sR4KKS