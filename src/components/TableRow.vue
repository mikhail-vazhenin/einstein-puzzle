<template>
  <v-row>
    <v-col cols="1" />
    <v-col v-for="(v, index) in values" :key="index" cols="2">
      <table-cell :value="v"></table-cell>
    </v-col>
    <v-col cols="1" />
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import TableCell from "./TableCell.vue";

@Component({
  components: {
    TableCell
  }
})
export default class TableRow extends Vue {
  @Prop({ type: Array, required: true })
  private values!: number[];

  @Provide()
  @Prop({ type: Array, required: true })
  private icons!: string[];
}
</script>
