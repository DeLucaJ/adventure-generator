<template>
  <div class="extra-block">
    <element-block :element="subject" />
    <cast-block :castmember="subject" />
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
  subject!: Extra;
}
</script>