const dateFormatter = value => (
  value.replace(/\D/g, '').replace(/(\d{4})(\d{2})(\d{2})/, '$2/$3/$1')
);

export const generateDayOfWeek = date => {
  const week = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const d = new Date(dateFormatter(date));
  const dayOfWeek = week[d.getDay()];

  if (dayOfWeek !== 'Sábado' && dayOfWeek !== 'Domingo')
    return 'weekday';
  else
    return 'weekend';
};