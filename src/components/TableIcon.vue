<template>
  <!-- <component :is="icon" :width="width" :height="height" /> -->
  <img :src="require(`@/assets/icons/${icon}.png`)" alt="" :width="width" :height="height" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TableIcon extends Vue {
  @Prop({ required: true, type: String, default: "36px" })
  public width!: string;

  @Prop({ required: true, type: String, default: "36px" })
  public height!: string;

  @Prop({ required: true, type: String, default: "0 0 512 512" })
  public viewBox!: string;

  @Prop({ required: true, type: String })
  public icon!: string;

  // created(): void {
  //   if (this.$options?.components) {
  //     this.$options.components[this.icon] = () => import(`../assets/icons/${this.icon}.png`);
  //   }
  // }
}
</script>
