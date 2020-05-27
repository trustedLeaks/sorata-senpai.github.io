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
pmcData(<font color="red">string</font>)  |   This is done from reversing `escape from tarkov` game


**Output**:

**<font color="purple">string</font>**: Explanation


**Example**:
```js
// Code to Example
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