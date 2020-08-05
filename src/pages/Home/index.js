import React, { useState } from 'react';
import { Typography, List } from 'antd';
import FormCanil from '../../components/Form';
import CardPetshop from '../../components/Card';

import { generateDayOfWeek } from '../../utils/generateDayOfWeek';
import { generateBestPetshop } from '../../utils/generateBestPetshop';

import { petshops } from '../../mock';

const { Title } = Typography;

const Home = () => {
  const [bestPetshop, setBestPetshop] = useState();

  const onFinish = (values) => {
    setBestPetshop();
    const { date, smallDogs, bigDogs } = values;

    setBestPetshop(generateBestPetshop(generateDayOfWeek(date), smallDogs, bigDogs, petshops));
  }

  return (
    <div>
      <Title style={{ fontSize: '24px', textAlign: 'center', marginBottom: '1rem' }}>Melhor Petshop</Title>
      <FormCanil onFinish={onFinish} />
      {bestPetshop &&
        <List
          itemLayout='vertical'
          dataSource={bestPetshop}
          split='false'
          renderItem={item => (
            <List.Item key={item.key}>
              <CardPetshop petshop={item} />
            </List.Item>
          )}
        />
      }
    </div>
  );
};

export default Home;