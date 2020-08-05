export const generateToday = () => {
  const date = new Date();
  return date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
}