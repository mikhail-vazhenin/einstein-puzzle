<template>
  <table-row :icons="icons" />
</template>

<script lang="ts">
import TableRow from "@/components/table/TableRow.vue";
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
}
</script>
