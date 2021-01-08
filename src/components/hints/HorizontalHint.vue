<template>
  <div class="d-flex">
    <v-card>
      <slot name="left"> </slot>
    </v-card>
    <v-card>
      <slot name="middle"> </slot>
    </v-card>
    <v-card>
      <slot name="right"> </slot>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HorizontalHint extends Vue {}
</script>
