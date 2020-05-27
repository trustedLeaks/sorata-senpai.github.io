---
id: recheckInventoryFreeSpace
title: itm_hf.recheckInventoryFreeSpace
sidebar_label: recheckInventoryFreeSpace
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Check if the how much free space the inventory have

**Parameters**:

Name  |   Description 
----------- |   -----------
pmcData(`object`)  |   This value must contain the pmcData object


**Output**:

`string`: Explanation


**Exemple**:
```js
let pmcData = profile_f.profileServer.getPmcProfile(sessionID);
const FreeSpace = itm_hf.recheckInventoryFreeSpace(pmcData, sessionID)
```

**Result**:
```
//Result here
```