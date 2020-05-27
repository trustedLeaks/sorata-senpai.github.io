---
id: removeDir
title: utility.removeDir
sidebar_label: removeDir
---
![](/img/github.png) [core/util/utility.js](https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/core/util/utility.js)

Delete a directory and all directories within.

**Parameters**:

Name  |   Description 
----------- |   -----------
dir(<font color="red">string</font>)  |   The `dir`argument must contain a full path pointing to a directory


**Output**:

**<font color="purple">string</font>**: Explanation


**Example**:
```js
let dir = json.parse(json.read("c:/path/to/directory"))
utility.removeDir(dir)
```

**Result**:
```
//Result here
```