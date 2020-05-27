---
id: getSize
title: itm_hf.getSize
sidebar_label: getSize
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Get Player Stash Proper Size

**Parameters**:

Name  |   Description 
----------- |   -----------
none  |  No args are needed for this function


**Output**:

`array`: It return an array contain both stash width and height value.


**Exemple**:
```js
const test = itm_hf.getSize(sessionID)
```

**Result**:
```
[stashSizeWidth, stashSizeHeight]
```