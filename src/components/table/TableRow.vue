<template>
  <div class="d-flex flex-row">
    <table-cell v-for="(_, index) in icons" :key="index" cols="2" class="ma-2"></table-cell>
  </div>
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
  @Provide()
  @Prop({ type: Array, required: true })
  private icons!: string[];
}
</script>
