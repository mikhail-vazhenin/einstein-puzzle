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
export default class NationalityRow extends Vue {
  private icons = [
    "nat-usa",
    "nat-india",
    "nat-russia",
    "nat-germany",
    "nat-great-britain",
    "nat-skorea"
  ];
}
</script>
