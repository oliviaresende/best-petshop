import { generateBestPetshop } from '../../utils/generateBestPetshop';

import { petshops } from '../../mock';

const result = [
  {
    'name': 'Vai Rex',
    'distance': 1700,
    'weekday': {
      'smallDogs': 15,
      'bigDogs': 50,
    },
    'weekend': {
      'smallDogs': 20,
      'bigDogs': 55,
    },
    'total': 80,
  },
  {
    'name': 'Meu Canino Feliz',
    'distance': 2000,
    'weekday': {
      'smallDogs': 20,
      'bigDogs': 40,
    },
    'weekend': {
      'smallDogs': 24,
      'bigDogs': 48,
    },
    'total': 80,
  },

  {
    'name': 'ChowChawgas',
    'distance': 800,
    'weekday': {
      'smallDogs': 30,
      'bigDogs': 45,
    },
    'weekend': {
      'smallDogs': 30,
      'bigDogs': 45,
    },
    'total': 105,
  },
];

describe('Generate best petshop', () => {
  it('should return Vai Rex like best petshop', () => {
    const list = generateBestPetshop('weekday', 2, 1, petshops);
    expect(list).toStrictEqual(result);
  });
});