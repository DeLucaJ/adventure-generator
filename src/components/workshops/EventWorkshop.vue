<template>
  <div class="event-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
    <!-- Other Stuff? -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop } from "@/components/workshops";
import { PlotEvent } from "@/types";

export default class EventWorkshop extends Vue {
  @Prop()
  element!: PlotEvent;

  update() {
    this.$emit("update:element", this.element);
  }
}
</script>