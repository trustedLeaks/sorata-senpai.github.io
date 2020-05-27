---
id: upgradeComplete
title: upgradeComplete
sidebar_label: upgradeComplete
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
Public function upgradeComplete(pmcData, body, sessionID) 

Inputs :
- pmcData : profile Data 
- body : game call informations (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when the player validate the finished area who were constructed,
register the new level in the player profile data and call applyPlayerUpgradesBonuses()
```