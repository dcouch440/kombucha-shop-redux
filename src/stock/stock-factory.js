import { v4 } from 'uuid';

const factory = (trait) => {
  const traits = {
    flavor: ['fermented', 'sour', 'fizzy', 'putrid', 'bright'],
    smell: ['dark', 'strong', 'light'],
    ingredients: ['salt', 'sugar', 'apples', 'oranges']
  }

  const rand = (number) => Math.floor(Math.random() * number)
  const length = traits[trait].length
  return {[trait]: traits[trait][rand(length)]}
}

const defaultDrinks = [
  'The Drinkanator', 'Sunday Drink',
  'Really Good', 'Not To Bad',
  'Another Monday', 'Try It'
]

export const kombuchaMachine = defaultDrinks.map(drink => ({
  name: drink,
  id: v4(),
  ...factory('flavor'),
  ...factory('smell'),
  ...factory('ingredients'),
}))
