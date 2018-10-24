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
|mode|模式[`default` `inline` `codeOnly`]|string|`default`|
|buttonText|按钮文案|any|'查看源码'|
|className|增加额外的class|string|''|
|style|自定义样式|object|{}|
|prefixCls|样式名前缀|string|`eui-code`|
