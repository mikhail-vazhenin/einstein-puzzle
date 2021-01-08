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
export default class FruitRow extends Vue {
  private icons = [
    "fruit-banana",
    "fruit-cherry",
    "fruit-grapes",
    "fruit-pear",
    "fruit-pineapple",
    "fruit-raspberry"
  ];
}
</script>
