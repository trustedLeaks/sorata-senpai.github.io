---
id: fromRUB
title: itm_hf.fromRUB
sidebar_label: fromRUB
---
![](/img/github.png) [src/classes/helpfunc.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js)

Convert specified rouble amount into specific currency
*Number* need to be any value
*String* should be the currency tpl of the amount you want to convert into rouble

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
const convertedAmount = itm_hf.fromRUB(number,currency)
```

**Result**:
```
//Result here
```