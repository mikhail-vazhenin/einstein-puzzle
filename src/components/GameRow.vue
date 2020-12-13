<template>
  <v-row>
    <v-col cols="1" />
    <v-col v-for="(v, index) in values" :key="index" cols="2">
      <game-cell :value="v"></game-cell>
    </v-col>
    <v-col cols="1" />
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import GameCell from "./GameCell.vue";

@Component({
  components: {
    GameCell
  }
})
export default class GameRow extends Vue {
  @Prop({ type: Array, required: true })
  private values!: number[];

  @Provide()
  @Prop({ type: Array, required: true })
  private icons!: string[];
}
</script>
