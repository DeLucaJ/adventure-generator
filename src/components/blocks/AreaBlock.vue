<template>
  <div class="element-block">
    <element-block :element="element" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import { Area } from "@/types";

@Component({
  name: "area-block",
  components: {
    ElementBlock
  }
})
export default class AreaBlock extends Vue {
  @Prop()
  element!: Area;
}
</script>