<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
// this is your new controller
import { computed } from 'vue';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    return {
      //        v is the new ProxyState.on
      appState: computed(() => AppState)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
