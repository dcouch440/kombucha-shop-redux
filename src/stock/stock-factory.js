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

export const kombuchaMachine = howMany => [...Array(howMany)].map(
  () => {
    return {
      ...factory('flavor'),
      ...factory('smell'),
      ...factory('ingredients')
    }
  }
)
