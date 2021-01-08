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
export default class OfficeRow extends Vue {
  private icons = [
    "office-amazon",
    "office-facebook",
    "office-google",
    "office-telegram",
    "office-ticktock",
    "office-twitter"
  ];
}
</script>
