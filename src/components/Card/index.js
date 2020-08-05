import React from 'react';
import { Card, Row, Col } from 'antd';

import './style.scss';

const CardPetshop = ({ petshop }) => {
  const itens = [
    {
      title: 'Petshop',
      value: `${petshop.name}`
    },
    {
      title: 'Total',
      value: `R$ ${petshop.total},00`
    },
    {
      title: 'Distância',
      value: `${petshop.distance} m`
    },
  ]

  return (
    <Card className="card-container">
      <Row>
        {
          itens.map(item => (
            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              style={{ marginBottom: '0.5rem' }}
              key={item.title}
            >
              <strong>{item.title}:</strong> {item.value}
            </Col>
          ))
        }
      </Row>
    </Card>
  );
};

export default CardPetshop;