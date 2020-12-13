<template>
  <v-card>
    <v-card-text class="d-flex justify-center py-10"> <v-icon>mdi-home</v-icon> </v-card-text>

    <v-card-actions class="d-flex flex-wrap justify-center">
      <v-speed-dial v-for="(icon, index) in icons" :key="index" v-model="fab[index]">
        <template #activator>
          <v-btn v-model="fab[index]" icon fab small>
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class GameCell extends Vue {
  @Prop({ type: Number, required: true })
  private value!: number;

  @Inject()
  private icons!: string[];

  private fab = new Array(5);
}
</script>
