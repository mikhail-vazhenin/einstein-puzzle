<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <game-table />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameTable from "./views/GameTable.vue";

@Component({
  components: {
    GameTable
  }
})
export default class App extends Vue {}
</script>
