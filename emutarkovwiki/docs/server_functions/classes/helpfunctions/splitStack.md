---
id: splitStack
title: itm_hf.splitStack
sidebar_label: splitStack
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Explanation text

**Parameters**:

Name  |   Description 
----------- |   -----------
pmcData(<font color="red">object</font>)  |   This value must contain the pmcData object
itemID(<font color="red">string</font>)    | This value must contain a valid item ID


**Output**:

**<font color="purple">string</font>**: Explanation


**Example**:
```js
let pmcData = profile_f.profileServer.getPmcProfile(sessionID);
const FreeSpace = itm_hf.splitStack(pmcData, itemID)
```

**Result**:
```
//Result here
```