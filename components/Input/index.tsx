import React, { FC } from "react";
import { Form, Input, InputNumber, Select } from "antd";

export interface IInput {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  labelCol?: { span?: number };
  rules?: any;
  childrenProps?: any;
}

const InputComponent: FC<IInput> = (props) => {
  const newRules = props.rules ?? [];
  const placeholder = props.placeholder ?? props.label;

  const Template = [
    {
      id: "input",
      component: Input,
    },
    {
      id: "textarea",
      component: Input.TextArea,
    },
    {
      id: "input-number",
      component: InputNumber,
    },
    {
      id: "select",
      component: Select,
    },
  ];

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      labelCol={props.labelCol}
      rules={[
        {
          required: props.required,
          message: "This field is required",
        },
        ...newRules,
      ]}
    >
      {Template.filter((item) => item.id === props.type).map((style, idx) => {
        const Component: React.ElementType = style.component;

        return (
          <Component
            key={`${props.type}-component-${String(idx)}`}
            style={{ width: "100%" }}
            placeholder={
              props.type !== "range-picker"
                ? placeholder
                : ["Start date", "End date"]
            }
            {...props.childrenProps}
          />
        );
      })}
    </Form.Item>
  );
};

export default InputComponent;
