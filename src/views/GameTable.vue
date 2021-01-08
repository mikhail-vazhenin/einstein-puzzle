<template>
  <div>
    <div class="table">
      <v-container fluid>
        <house-row />
        <pet-row />
        <fruit-row />
        <drink-row />
        <nationality-row />
        <office-row />
      </v-container>
    </div>
    <v-divider vertical> </v-divider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FruitRow, DrinkRow, PetRow, HouseRow, NationalityRow, OfficeRow } from "./components/rows";

@Component({
  components: {
    FruitRow,
    DrinkRow,
    PetRow,
    HouseRow,
    NationalityRow,
    OfficeRow
  }
})
export default class GameTable extends Vue {}
</script>
