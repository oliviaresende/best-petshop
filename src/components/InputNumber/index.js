import React from 'react';
import { Form, Input } from 'antd';

const InputNumber = ({ label, name, min }) => (
  <Form.Item
    label={label}
    name={name}
  >
    <Input type='number' min={min} />
  </Form.Item>
);

export default InputNumber;