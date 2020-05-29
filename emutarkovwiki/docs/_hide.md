---
id: Hide
title: Hided page for Sorata-senpai
sidebar_label: Home
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## **Testing**

### Test1
<Tabs
  groupId="different_values"
  defaultValue="value1"
  values={[
    {label: 'Option 1', value: 'value1'},
    {label: 'Option 2', value: 'value2'},
  ]
}>
<TabItem value="value1">Windows is windows.</TabItem>
<TabItem value="value2">Unix is unix.</TabItem>
</Tabs>

### Test2
<Tabs
  groupId="operating-systems"
  defaultValue="win"
  values={[
    {label: 'Windows', value: 'win'},
    {label: 'macOS', value: 'mac'},
  ]
}>
<TabItem value="win">Use Ctrl + V to paste.</TabItem>
<TabItem value="mac">Use Command + V to paste.</TabItem>
</Tabs>

### Test3
<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]
}>
<TabItem value="js">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```
</TabItem>
</Tabs>

:::note
The content and title *can* include markdown.
:::

:::tip You can specify an optional title
Heads up! Here's a pro-tip.
:::

:::info
Useful information.
:::

:::caution
Warning! You better pay attention!
:::

:::danger
Danger danger, mayday!
:::

```javascript title="Test"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```