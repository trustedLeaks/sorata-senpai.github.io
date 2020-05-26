---
id: singleProductionStart
title: singleProductionStart
sidebar_label: singleProductionStart
---
Public function singleProductionStart(pmcData, body, sessionID)

Inputs :
- pmcData : profile Data 
- body : game call data (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when any craftable item from the hideout has started,, this function call registerProduction()