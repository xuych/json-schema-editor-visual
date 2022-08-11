import React from "react";
import { Input, AutoComplete, Icon } from "antd";
import PropTypes from "prop-types";
const Option = AutoComplete.Option;
import { EditOutlined } from "@ant-design/icons";
import LocaleProvider from "../LocalProvider/index.js";

export default class MockSelect extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      mock: "",
    };
    this.mock = context.Model.__jsonSchemaMock || [];
  }

  static propTypes = {
    schema: PropTypes.object,
    showEdit: PropTypes.func,
    onChange: PropTypes.func,
  };

  render() {
    // const children = [];
    const { schema } = this.props;
    const children = this.mock.map((item) => ({
      label: item.name,
      value: item.mock,
    }));

    return (
      <div style={{ width: "100%" }}>
        <AutoComplete
          style={{ width: "100%" }}
          className="certain-category-search"
          dropdownMatchSelectWidth={false}
          options={children}
          filterOption={true}
          value={
            schema.mock
              ? schema.mock.constructor === Object
                ? schema.mock.mock
                : schema.mock
              : ""
          }
          onChange={this.props.onChange}
          disabled={
            ["object", "array"].includes(schema.type) || this.props.disabled
          }
        >
          <Input
            placeholder={LocaleProvider("mock")}
            addonAfter={
              <EditOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.showEdit();
                }}
              />
            }
          />
        </AutoComplete>
      </div>
    );
  }
}

MockSelect.contextTypes = {
  Model: PropTypes.object,
};
