---
id: takeItemsFromAreaSlots
title: takeItemsFromAreaSlots
sidebar_label: takeItemsFromAreaSlots
---

![](/img/github.png) [src/classes/hideout.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/hideout.js#L3)

Explanation text

**Parameters**:

Name  |   Description 
----------- |   -----------
pmcData(`object`)  |   This is done from reversing `escape from tarkov` game


**Output**:

`string`: Explanation


**Exemple**:
```js
// Code to exemple
```

**Result**:
```
//Result here
```

```
Public function takeItemsFromAreaSlots(pmcData, body, sessionID)

Inputs :
- pmcData : profile Data 
- body : game call information (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when the player want to remove an items from a area (i.e : remove fuel from generator or pulling out a graphic card in the bitcoin farm)

register the move of the items from area "inventory" to player stash inventory
```