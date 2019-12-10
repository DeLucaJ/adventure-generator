<template>
  <div class="faction-block">
    <element-block :element="element" /><hr/>
    <cast-block :element="element" /><hr/>
    <actor-block :element="element" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock, CastBlock, ActorBlock } from "@/components/blocks";
import { Character, Faction } from "@/types";

@Component({
  name: "extra-block",
  components: {
    ElementBlock,
    CastBlock,
    ActorBlock
  }
})
export default class ExtraBlock extends Vue {
  @Prop()
  element!: Faction;
}
</script>