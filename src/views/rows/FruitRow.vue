<template>
  <table-row :icons="icons" :values="row1Values" />
</template>

<script lang="ts">
import Avocado from "@/assets/icons/avocado.svg";
import TableRow from "@/components/TableRow.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TableRow,
    Avocado
  }
})
export default class FruitRow extends Vue {
  get icons(): string[] {
    return ["avocado", "cherries", "grapes", "mango", "watermelon"];
  }

  row1Values = [0, 2, 3, 4, 1];
}
</script>
