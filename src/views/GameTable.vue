<template>
  <div class="table">
    <v-container fluid>
      <game-row :icons="row1" :values="row1Values" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameRow from "@/components/GameRow.vue";

@Component({
  components: {
    GameRow
  }
})
export default class GameTable extends Vue {
  row1 = ["mdi-train", "mdi-tram", "mdi-airplane", "mdi-car", "mdi-motorbike"];
  row1Values = [0, 2, 3, 4, 1];
}
</script>
