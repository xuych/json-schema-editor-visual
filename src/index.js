import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";

const jeditor = require("../dist/main.js");
import "../dist/main.css";

// import "../package/index.css";
// const jeditor = require("../package/index.js");
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
      isAllowJson={false}
      data={
        '{"type":"object","title":"root","properties":{"id":{"description":"","type":"string","title":"123","mock": { "mock": "@string" }}},"required":["id"]}'
      }
      showEditor={true}
      isMock={true}
      isMockDisabled={false}
      isInputDisabled={false}
      onChange={(e) => {
        console.log("changeValue---", e);
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
