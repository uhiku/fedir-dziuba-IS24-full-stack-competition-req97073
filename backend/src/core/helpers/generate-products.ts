import { randomUUID } from 'crypto';
import { randomNumber } from './random-number';

export const generateProducts = (size = 40) => {
  const emptyArr = [...Array(size).keys()];

  const productsList = emptyArr.map((_, i) => {
    return {
      productId: randomUUID(),
      productName: `Product name ${i}`,
      productOwnerName: `Product owner name ${i}${i}`,
      developers: [...Array(randomNumber()).keys()].map(
        () => `Developer ${randomNumber()}`,
      ),
      scrumMasterName: `Scrum master ${randomNumber(1, 9)}`,
      startDate: new Date(
        new Date().setMonth(randomNumber(0, 11)),
      ).toISOString(),
      methodology:
        randomNumber(0, 9) % 2 ? 'scrum' : ('agile' as 'scrum' | 'agile'),
    };
  });
  return productsList;
};
