---
id: replaceIds
title: itm_hf.replaceIds
sidebar_label: replaceIds
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Split item stack if it exceeds StackMaxSize

**Parameters**:

Name  |   Description 
----------- |   -----------
itemID(<font color="red">string</font>)  |   This value must contain an item ID


**Output**:

**<font color="purple">array</font>**: an array of these items with StackObjectsCount <= StackMaxSize


**Example**:
```js
const FreeSpace = itm_hf.replaceIds(itemID)
```

**Result**:
```
//Result here
```