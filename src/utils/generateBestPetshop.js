export const generateBestPetshop = (day, smallDogs, bigDogs, petshops) => {
  petshops.forEach(petshop => {
    if (day === 'weekday')
      petshop.total = petshop.weekday.bigDogs * bigDogs + petshop.weekday.smallDogs * smallDogs;
    else
      petshop.total = petshop.weekend.bigDogs * bigDogs + petshop.weekend.smallDogs * smallDogs;
  })

  return (
    petshops.sort((a, b) => {
      if (a.total > b.total) {
        return 1;
      }
      if (a.total < b.total) {
        return -1;
      }
      if (a.total === b.total) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
      }
      return 0;
    })
  )
};