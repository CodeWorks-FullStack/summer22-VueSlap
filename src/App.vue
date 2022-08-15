<template>
  <div>
    <div v-if="!player" class="text-center my-5">
      <h1>What is your name?</h1>
      <form @submit.prevent="createPlayer()">
        <input type="text" required minlength="3" v-model="formData.name" />
        <button type="submit">Start Game</button>
      </form>
    </div>

    <div class="card" v-else-if="player.health > 0">
      <div class="card-body">
        <h6>
          Hello {{ player.name }}, {{ enemy.name }} wants to kill you! Can you
          survive?
        </h6>
        <p>
          <b>Your Health: {{ player.health }}</b>
        </p>
        <!-- v thats new -->
        <img :src="enemy.img" alt="" height="250" class="img-fluid" />
        <h3
          :class="{
            'text-success': enemy.health > 90,
            'text-warning': enemy.health < 50 && enemy.health > 20,
            'text-danger': enemy.health <= 20,
          }"
        >
          Health {{ enemy.health }}
        </h3>
        <div></div>
        <!--    v what?????? -->
      </div>
      <div class="card-footer text-end d-flex justify-content-around">
        <div v-if="!enemy.isDead" class="d-flex justify-content-around w-100">
          <!-- attacks.forEach(a => template += LoadComponent(a)) -->
          <AttackButton v-for="a in attacks" :key="a.id" :attack="a" />
        </div>
        <div v-else>
          <button class="btn btn-danger" @click="revive()">Revive</button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="text-center">
        <div class="alert alert-danger">YOU ARE DEAD!!!</div>
      </div>
    </div>
  </div>
</template>

<script>
// this is your new controller
import { computed, onMounted, ref } from 'vue';
import { AppState } from './AppState';
import { Player } from './models/Player.js';
import Pop from './utils/Pop.js';

export default {
  name: 'App',
  setup() {
    const formData = ref({})

    // TODO talk more about hooks later
    onMounted(() => {
      setInterval(enemyAttack, 3000)
    })

    function enemyAttack() {
      if (AppState.player && AppState.player.health > 0) {
        AppState.player.health -= Math.floor(Math.random() * 10) + 1
      }
    }


    return {
      formData,
      //        v is the new ProxyState.on
      player: computed(() => AppState.player),
      appState: computed(() => AppState),
      enemy: computed(() => AppState.enemy),
      // NOTE any time you need something from the appState you use a computed
      attacks: computed(() => AppState.attacks),
      // all of your public functions

      revive() {
        AppState.enemy.health = 100
      },

      async createPlayer() {
        try {
          // playerService.createPlayer
          AppState.player = new Player(formData.value.name)
          formData.value = {} // resets the form
        } catch (error) {
          console.error('[Creating Player]', error)
          Pop.error(error)
        }
      }


    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
