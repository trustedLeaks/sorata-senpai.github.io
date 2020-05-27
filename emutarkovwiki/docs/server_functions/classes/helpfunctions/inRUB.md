---
id: inRUB
title: itm_hf.inRUB
sidebar_label: inRUB
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Convert specified amount from specific currency into roubles currency

**Parameters**:

Name  |   Description 
----------- |   -----------
number(`int`)  |   This argument must contain a valid number.
currency(`string`)  | This argument must contain a valid currency TPL.



**Output**:

`string`: Explanation


**Exemple**:
```js
const number = 150000
const currency = "dollar_tpl"
const convertedAmount = utility.inRUB(number,currency)
```

**Result**:
```
//Result here
```