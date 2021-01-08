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
export default class PetRow extends Vue {
  private icons = ["pet-bird", "pet-cat", "pet-dog", "pet-fish", "pet-sheep", "pet-pig"];
}
</script>
