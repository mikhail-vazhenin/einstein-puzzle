<template>
  <table-row :icons="icons" :values="row1Values" />
</template>

<script lang="ts">
import TableRow from "@/components/TableRow.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TableRow
  }
})
export default class DrinkRow extends Vue {
  private icons = [
    "drinks-beer",
    "drinks-coctail",
    "drinks-coffee",
    "drinks-milk",
    "drinks-tea",
    "drinks-wine"
  ];

  row1Values = [0, 2, 3, 4, 1];
}
</script>
