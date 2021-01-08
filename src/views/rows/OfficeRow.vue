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
export default class OfficeRow extends Vue {
  private icons = [
    "office-amazon",
    "office-facebook",
    "office-google",
    "office-telegram",
    "office-ticktock",
    "office-twitter"
  ];

  row1Values = [0, 2, 3, 4, 1];
}
</script>
