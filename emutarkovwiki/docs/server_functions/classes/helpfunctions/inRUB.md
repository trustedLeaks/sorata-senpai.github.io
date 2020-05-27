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
number(<font color="red">int</font>)  |   This argument must contain a valid number.
currency(<font color="red">string</font>)  | This argument must contain a valid currency TPL.



**Output**:

**<font color="purple">string</font>**: Explanation


**Example**:
```js
const number = 150000
const currency = "dollar_tpl"
const convertedAmount = utility.inRUB(number,currency)
```

**Result**:
```
//Result here
```