import React from 'react';
import { Form, Button } from 'antd';

const ButtonForm = ({ text }) => (
  <Form.Item >
    <Button type="primary" htmlType="submit">
      {text}
    </Button>
  </Form.Item>
);

export default ButtonForm;