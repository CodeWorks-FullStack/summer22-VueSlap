<template>
  <div>
    <button class="btn" :class="attack.color"  @click="throwAttack()">{{ attack.name }}</button>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Attack } from '../models/Attack.js';

export default {
  props: {
    attack: { type: Attack, required: true }
  },

  setup(props) {
    return {
      throwAttack() {
        AppState.enemy.health -= props.attack.amount
        if (AppState.enemy.health < 0) {
          AppState.enemy.health = 0
        }
      }
    }
  }

}
</script>


<style>
.hadouken{
  background-color: cadetblue;
  font-size: large;
  font-weight: bold;
}
</style>
