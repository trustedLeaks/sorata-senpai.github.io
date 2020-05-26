---
id: findInventoryItemById
title: findInventoryItemById
sidebar_label: findInventoryItemById
---

## itm_hf.findInventoryItemById(pmcdata,string)
Find in the player profile the template of an given id. List is backward first item is the furthest child and last item is main item,returns all child items ids in array, includes itself and children

**Usage exemple :**
```js
const test = itm_hf.findInventoryItemById(pmcData, itemID)
```