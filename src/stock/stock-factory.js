import { v4 } from 'uuid';

const factory = (trait) => {
  const rand = (number) => Math.floor(Math.random() * number)

  const traits = {
    flavor: ['fermented', 'sour', 'fizzy', 'putrid', 'bright'],
    smell: ['dark', 'strong', 'light'],
    ingredients: ['salt', 'sugar', 'apples', 'oranges'],
    price: ['$3.19', '$3.85', '$3.50', '$3.33', '$3.55'],
    stock: [rand(15)]
  }

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
  ...factory('stock'),
  ...factory('price'),
  ...factory('flavor'),
  ...factory('smell'),
  ...factory('ingredients'),
}))
