---
id: replaceIds
title: replaceIds
sidebar_label: replaceIds
---

## itm_hf.replaceIds(string)
Split item stack if it exceeds StackMaxSize
> input: an item
>
> output: an array of these items with StackObjectsCount <= StackMaxSize

**Usage exemple :**
```js
const FreeSpace = itm_hf.replaceIds(itemID)
```