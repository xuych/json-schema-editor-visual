import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";

// const jeditor = require("../dist/main.js");
// import "../dist/main.css";

import "../package/index.css";
const jeditor = require("../package/index.js");
const mock = [
  { name: "字符串", mock: "@string" },
  { name: "自然数", mock: "@natural" },
  { name: "浮点数", mock: "@float" },
  { name: "字符", mock: "@character" },
  { name: "布尔", mock: "@boolean" },
  { name: "url", mock: "@url" },
  { name: "域名", mock: "@domain" },
  { name: "ip地址", mock: "@ip" },
  { name: "id", mock: "@id" },
  { name: "guid", mock: "@guid" },
  { name: "当前时间", mock: "@now" },
  { name: "时间戳", mock: "@timestamp" },
];

const JEditor1 = jeditor({ mock: mock, lang: "zh_CN" });

render(
  <div>
    <a target="_blank" href="https://github.com/YMFE/json-schema-editor-visual">
      <h1>JSON-Schema-Editor</h1>
    </a>
    <p style={{ fontSize: "16px" }}>
      A json-schema editor of high efficient and easy-to-use, base on React.{" "}
      <a
        target="_blank"
        href="https://github.com/YMFE/json-schema-editor-visual"
      >
        Github
      </a>
    </p>
    <br />
    <h3>
      A The tool has been used for open source api management platforms：{" "}
      <a target="_blank" href="https://github.com/ymfe/yapi">
        YApi
      </a>
    </h3>

    <br />
    <h2>Example:</h2>
    <hr />

    <JEditor1
      isAllowSetting={false}
      isAllowJson={true}
      data={`{"type":"object","title":"","properties":{"root":[{"items":[],"_id":"63411ed9c6111a6f7f3ef313","description":"2","kind":"number","mock":"","must":true,"name":"qfqd"},{"items":[{"description":"3-1","kind":"string","mock":"","must":true,"name":"field_1","items":[]}],"_id":"63411ed9c6111a077c3ef312","description":"3","kind":"object","mock":"","must":true,"name":"q21dqw"},{"items":[],"_id":"63411ed9c6111ad9ab3ef311","default":"234f3","description":"4","kind":"string","mock":"","must":true,"name":"eewf"},{"items":[{}],"_id":"63411ed9c6111a337d3ef310","description":"5","kind":"object","mock":"","must":true,"name":"gewf"},{"items":[],"_id":"63411ed9c6111a19c43ef30f","description":"6","kind":"array","mock":"","must":true,"name":"field_4"}]}}`}
      // data={`{"type":"object","title":"","properties":{"body":{"description":"","type":"boolean","title":"false"},"extension":{"description":"","type":"string","title":""},"header":{"properties":{"code":{"description":"","type":"integer","title":0},"message":{"description":"","type":"string","title":""},"name":{"description":"","type":"string","title":""},"traceId":{"description":"","type":"string","title":""},"version":{"properties":{"major":{"description":"","type":"string","title":""},"minor":{"description":"","type":"string","title":""},"patch":{"description":"","type":"string","title":""}},"required":[],"type":"object"}},"required":[],"type":"object"},"success":{"description":"","type":"boolean","title":"false"}},"required":[]}`}
      // data={`{"type":"object","title":"","properties":{"body":{"description":"","type":"object","title":"","properties":{"color":{"description":"颜色（外板色代码）","type":"string","title":""},"driveId":{"description":"驱动集","type":"string","title":""},"model":{"description":"model","type":"string","title":""},"sfx":{"description":"sfx","type":"string","title":""},"vehicleColorId":{"description":"col集","type":"string","title":""},"vehicleSfxGroupId":{"description":"sfx集","type":"string","title":""}},"required":["vehicleSfxGroupId"]},"extension":{"description":"","type":"string","title":""},"header":{"description":"","type":"object","title":"","properties":{"type":"object","title":"","properties":{"code":{"description":"","type":"integer","title":0},"message":{"description":"","type":"string","title":""},"name":{"description":"","type":"string","title":""},"traceId":{"description":"","type":"string","title":""},"version":{"description":"","type":"object","title":"","properties":{"type":"object","title":"","properties":{"major":{"description":"","type":"string","title":""},"minor":{"description":"","type":"string","title":""},"patch":{"description":"","type":"string","title":""}},"required":[]}}},"required":[]}},"success":{"description":"","type":"boolean","title":"false"}},"required":[]}`}
      // data={'{"type":"array","title":"","properties":{},"required":[]}'}
      // data={
      //   '{"type":"object","title":"root","properties":{"id":{"description":"","type":"string","title":"123","mock": { "mock": "@string" }}},"required":["id"]}'
      // }
      showEditor={true}
      isMock={true}
      isMockDisabled={false}
      isInputDisabled={false}
      onChange={(e, json) => {
        console.log("changeValue---", e, json);
      }}
    />

    {/* <JEditor2
      showEditor={true}
      data={null}
      onChange={e => {
        // console.log("changeValue", e);
      }}
    /> */}
  </div>,
  document.getElementById("root")
);
