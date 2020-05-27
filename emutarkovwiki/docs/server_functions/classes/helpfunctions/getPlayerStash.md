---
id: getPlayerStash
title: itm_hf.getPlayerStash
sidebar_label: getPlayerStash
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Calculate Size of item inputed

**Parameters**:

Name  |   Description 
----------- |   -----------
arg(`string`)  |   This value must contain a Item template ID, Item Id, InventoryItem (item from inventory having _id and _tpl)


**Output**:

`array`: It return an array contain both width and height value.


**Exemple**:
```js
const test = itm_hf.getPlayerStash(sessionID)
```

**Result**:
```
[width, height]
```