<template>
  <div class="character-block">
    <element-block :element="subject" />
    <cast-block :castmember="subject" />
    <actor-block :actor="subject" />
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
  subject!: Faction;
}
</script>