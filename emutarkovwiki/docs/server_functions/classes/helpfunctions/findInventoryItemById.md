---
id: findInventoryItemById
title: itm_hf.findInventoryItemById
sidebar_label: findInventoryItemById
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Find in the player profile the template of an given id. List is backward first item is the furthest child and last item is main item,returns all child items ids in array, includes itself and children

**Parameters**:

Name  |   Description 
----------- |   -----------
pmcData(<font color="red">object</font>)  |   This argument must contain the pmcData object
itemID(<font color="red">string</font>)    | This argument must contain an item ID


**Output**:

**<font color="purple">string</font>**: Explanation


**Example**:
```js
const test = itm_hf.findInventoryItemById(pmcData, itemID)
```

**Result**:
```
//Result here
```