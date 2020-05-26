---
id: upgradeComplete
title: upgradeComplete
sidebar_label: upgradeComplete
---


Public function upgradeComplete(pmcData, body, sessionID) 

Inputs :
- pmcData : profile Data 
- body : game call informations (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when the player validate the finished area who were constructed,
register the new level in the player profile data and call applyPlayerUpgradesBonuses()