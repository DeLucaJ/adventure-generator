<template>
  <div class="extra-block">
    <element-block :element="element" /><hr/>
    <cast-block :element="element" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock, CastBlock } from "@/components/blocks";
import { Extra } from "@/types";

@Component({
  name: "extra-block",
  components: {
    ElementBlock, CastBlock
  }
})
export default class ExtraBlock extends Vue {
  @Prop()
  element!: Extra;
}
</script>