import * as faker from 'faker';

export function getRandomColor() {
  return faker.internet.color();
}
