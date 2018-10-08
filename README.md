# USAGE

## Install

```
$ npm i @mistong/eui
```

## demo

```
import { Code } from '@mistong/eui';

...

<Code
  sourceCode={'console.log(\'hello world\');'}
>
 I'am demo here
<Code>
```

## API

|参数|说明|类型|默认值|
|---|----|---|------|
|children|需要展示的 demo 内容|any|`null`|
|sourceCode|需要展示的源代码|any|''|
|buttonText|按钮文案|any|'查看源码'|
|lang|语言包类型|(`zh-cn` `en`)|string|`zh-cn`|
|className|增加额外的class|string|''|
|style|自定义样式|object|{}|
|prefixCls|样式名前缀|string|`eui-code`|
