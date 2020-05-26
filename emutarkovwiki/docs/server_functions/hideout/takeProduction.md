---
id: takeProduction
title: takeProduction
sidebar_label: takeProduction
---
Public function takeProduction(pmcData, body, sessionID)

Inputs :
- pmcData : profile Data 
- body : game call informations (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when player take a finished cafted item in the hideout or take items from scav case
delete the production in the player profile and add the item into the player stash
