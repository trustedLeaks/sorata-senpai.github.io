---
id: takeProduction
title: takeProduction
sidebar_label: takeProduction
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
Public function takeProduction(pmcData, body, sessionID)

Inputs :
- pmcData : profile Data 
- body : game call informations (request)
- sessionID : player SessionID

Output : Global Output (link : game is waiting for output)

called when player take a finished cafted item in the hideout or take items from scav case
delete the production in the player profile and add the item into the player stash
```