# json-schema-editor-visual

A json-schema editor of high efficient and easy-to-use, base on React.

![avatar](json-schema-editor-visual.jpg)

## Usage

```
npm install json-schema-editor-visual-yc
```

```js
const option = {}
import 'antd/dist/antd.css'
require('json-schema-editor-visual-yc/dist/main.css')
const schemaEditor = require("json-schema-editor-visual-yc/dist/main.js");
const SchemaEditor = schemaEditor(option)

render(
    <SchemaEditor />,
  document.getElementById('root')
)
```

## Option Object

| name | desc | default |
| ---- | ----------- | --------- |
| `lang` | language, support `en_US` or `zh_CN` | en_US

## SchemaEditor Props

| name | type | default | desc
| ---- | ----------- | --------- | --------- |
| `data` | string | null | the data of editor
| `onChange`| function | null |
| `showEditor` | boolean | false |

## Features

* Languages syntax config optimization
* Provide isAllowJson prop
* Provide isAllowSetting prop
* Provide isMockDisabled prop
* Provide isInputDisabled prop
* Fix mock function error when in production mode
* Fix react version conflict
* others ...

## Links

* <https://github.com/zyqwst/json-schema-editor-vue>
* <https://github.com/Open-Federation/json-schema-editor-visual>
