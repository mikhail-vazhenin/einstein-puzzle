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
export default class DrinkRow extends Vue {
  private icons = [
    "drinks-beer",
    "drinks-coctail",
    "drinks-coffee",
    "drinks-milk",
    "drinks-tea",
    "drinks-wine"
  ];
}
</script>
