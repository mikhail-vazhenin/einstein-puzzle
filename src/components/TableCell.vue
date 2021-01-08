<template>
  <v-card v-on-clickaway="hideOverlay">
    <v-card-text class="d-flex justify-center py-10"> </v-card-text>

    <v-card-actions class="d-flex flex-wrap justify-center">
      <v-btn v-for="(icon, index) in icons" :key="index" icon small @click="showAction">
        <table-icon :icon="icon" width="24px" height="24px" />
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
import { Component, Inject, Vue } from "vue-property-decorator";
import TableIcon from "@/components/TableIcon.vue";

@Component({
  components: { TableIcon }
})
export default class TableCell extends Vue {
  @Inject()
  private icons!: string[];
  private overlay = false;

  private hideOverlay() {
    this.overlay = false;
  }

  private showAction() {
    this.overlay = true;
  }
}
</script>
<style lang="sass" scoped>
.v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn
    margin-left: 0px
</style>
