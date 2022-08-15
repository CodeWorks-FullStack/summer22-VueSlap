import { reactive } from 'vue'
import { Attack } from './models/Attack.js'
import { Enemy } from './models/Enemy.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  // TODO add your stuff here

  player: null,
  enemy: new Enemy({
    id: 'h311',
    name: 'Chucky',
    health: 100,
    img: 'http://cdn.shopify.com/s/files/1/1140/8354/articles/How-Much-is-a-Chucky-Doll.jpg?v=1651045883'
  }),



  attacks: [
    new Attack(14, 'Slap', 1, 'btn-primary'),
    new Attack(15, 'Kick', 10, 'btn-info'),
    new Attack(16, 'Hadouken', 50, 'hadouken'),
  ]

})
