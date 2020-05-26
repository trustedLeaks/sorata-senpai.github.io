---
id: applyPlayerUpgradeBonuses
title: applyPlayerUpgradeBonuses
sidebar_label: applyPlayerUpgradeBonuses
---

Internal void applyPlayerUpgradesBonuses(pmcData,bonus)

Inputs :
- pmcData : profile Data 
- bonus : upgraded area bonus data (from area.stages[stageNumber].bonuses)

OutPuts : None

function who is called when an area has been upgraded, aim to add some bonuses into the player profile data according to the upgraded area, bonuses in profiles are stored in "playerdata.bonuses[]"