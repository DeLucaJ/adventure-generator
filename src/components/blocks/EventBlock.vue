<template>
  <div class="element-block">
    <element-block :element="event" />
    <!-- Other Event Props -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import { PlotEvent } from "@/types";

@Component({
  name: "event-block",
  components: {
    ElementBlock
  }
})
export default class EventBlock extends Vue {
  @Prop()
  event!: PlotEvent;
}
</script>