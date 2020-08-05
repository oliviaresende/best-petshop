import React from 'react';
import { Form } from 'antd';
import InputDate from '../InputDate';
import InputNumber from '../InputNumber';
import ButtonForm from '../Button';
import { generateToday } from '../../utils/generateToday';

import './style.scss'

const FormCanil = ({ onFinish }) => {
  const initialValues = {
    "date": generateToday(),
    "smallDogs": 0,
    "bigDogs": 0,
  }

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <InputDate />
      <InputNumber
        label='Quantidade de cães pequenos'
        name='smallDogs'
        min='0'
      />
      <InputNumber
        label='Quantidade de cães grandes'
        name='bigDogs'
        min='0'
      />
      <div className='button-container'>
        <ButtonForm text='Descobrir' />
      </div>

    </Form>
  );
};

export default FormCanil;