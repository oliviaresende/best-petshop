import React from 'react';
import Routes from './Routes';
import { Row, Col } from 'antd';

const App = () => (
  <Row style={{ padding: '2rem 0 2rem 0', color: '#312E38' }}>
    <Col xs={{ span: 18, offset: 3 }} md={{ span: 16, offset: 4 }} lg={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }} >
      <Routes />
    </Col>
  </Row>
);


export default App;
