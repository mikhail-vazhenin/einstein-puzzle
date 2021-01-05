<template>
  <v-card v-on-clickaway="hideOverlay">
    <v-card-text class="d-flex justify-center py-10"> <v-icon>mdi-home</v-icon> </v-card-text>

    <v-card-actions class="d-flex flex-wrap justify-center">
      <v-btn v-for="(icon, index) in icons" :key="index" icon small @click="showAction">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-card-actions>

    <div>
      <v-overlay absolute :value="overlay" :opacity="0.8">
        <div class="d-flex justify-center ">
          <v-btn class="mx-3" color="success" fab dark small @click="hideOverlay">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
          <v-btn class="mx-3" color="red" fab dark small @click="hideOverlay">
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-overlay>
    </div>
  </v-card>
</template>
<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class TableCell extends Vue {
  @Prop({ type: Number, required: true })
  private value!: number;

  @Inject()
  private icons!: string[];
  private overlay = false;

  private hideOverlay() {
    this.overlay = false;
  }

  private showAction() {
    // this.$nextTick(() => (this.overlay = true));
    this.overlay = true;
  }
}
</script>
<style lang="sass" scoped>
.v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn
    margin-left: 0px
</style>
