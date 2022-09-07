let newObject = {
  id: '0001',
  type: 'donut',
  name: 'Cake',
  ppu: 0.55,
  topping: [
  { id: '5001', type: 'Icing' },
  { id: '5002', type: 'Glazed' },
  { id: '5005', type: 'Sugar' },
  { id: '5007', type: 'Powdered Sugar' },
  { id: '5006', type: 'Chocolate with Sprinkles' },
  { id: '5003', type: 'Chocolate Toppings' },
  { id: '5004', type: 'Maple', mapleBatter: ['sweet batter', 'dry batter']},
  batter = [
  { id: '1001', type: 'Regular' },
  {
  id: '1002', type: 'Chocolate', normalBatter: ['dry choco', {
  dryChoco: 'ganachey taste', wetChoco:'wet runny taste'
  }, ['red velvet', 68, ['orange', 'lemon zest', 'banana flavour']]]
  },
  { id: '1003', type: 'Blueberry' },
  { id: '1004', type: "Devil's Food", amount: '7$' },
  ]
  ]
  };

  // I want a '3'-layered ''cake'', with ''donuts'', ''Chocolate with Sprinkles'', ''glazed'' with
  // ''dry batter'' and ''sugar'' with a ''wet runny taste'', that has the ''regular'' ''68''
  // ''powdered sugar'' with ''banana flavour'', ''red velvet'' and ''blueberry'' ''icing'' that cost
  // ''7$''
console.log( `
  I want a ${newObject.topping[5].id.slice(-1)}-layered ${newObject.name.toLowerCase()},
  with ${newObject.type}, ${newObject.topping[4].type}, ${newObject.topping[1].type.toLowerCase()} with 
  ${newObject.topping[6].mapleBatter[1]} and ${newObject.topping[2].type.toLowerCase()} with a 
  ${newObject.topping[7][1].normalBatter[1].wetChoco}, that has the ${newObject.topping[7][0].type.toLowerCase()} 
  ${newObject.topping[7][1].normalBatter[2][1]} ${newObject.topping[3].type.toLowerCase()} with 
  ${newObject.topping[7][1].normalBatter[2][2][2]}, ${newObject.topping[7][1].normalBatter[2][0]} 
  and ${newObject.topping[7][2].type.toLowerCase()} ${newObject.topping[0].type.toLowerCase()} 
  that cost ${newObject.topping[7][3].amount}
`)


