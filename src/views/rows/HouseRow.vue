<template>
  <table-row :icons="icons" />
</template>

<script lang="ts">
import TableRow from "@/components/TableRow.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TableRow
  }
})
export default class HouseRow extends Vue {
  private icons = [
    "house-blue",
    "house-orange",
    "house-green",
    "house-magenta",
    "house-yellow",
    "house-red"
  ];

  row1Values = [0, 2, 3, 4, 1];
}
</script>
