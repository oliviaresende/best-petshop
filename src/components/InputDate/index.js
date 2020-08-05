import React from 'react';
import { Form, Input } from 'antd';
import { generateToday } from '../../utils/generateToday';

const InputDate = () => (
  <Form.Item
    label='Data'
    name='date'
    rules={[
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('date') >= generateToday())
            return Promise.resolve();
          return Promise.reject('Não pode selecionar dia anterior ao dia de hoje!')
        }
      })
    ]}
  >
    <Input type='date' />
  </Form.Item>
);

export default InputDate;