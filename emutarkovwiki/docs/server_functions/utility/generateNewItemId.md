---
id: generateNewItemId
title: utility.generateNewItemId
sidebar_label: generateNewItemId
---
![](/img/github.png) [core/util/utility.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/core/util/utility.js#L85)

This function let you generate an ID starting by 'I'


**Returns**:

`string`: A set of characters + numbers


**Exemple**:
```js
function Test(){
    let ItemID = utility.generateNewItemId();

    if(!ItemID){
        return ItemID;
    }else{
        continue;
    }
}

console.log("Function result: "+Test())
```

**Result**:
```
Function result: I329425585986128836Nwr2B
```