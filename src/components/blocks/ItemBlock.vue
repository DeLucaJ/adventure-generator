<template>
  <div class="element-block">
    <element-block :element="element" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import { Item } from "@/types";

@Component({
  name: "item-block",
  components: {
    ElementBlock
  }
})
export default class ItemBlock extends Vue {
  @Prop()
  element!: Item;
}
</script>