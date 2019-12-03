<template>
  <div class="character-block">
    <element-block :element="subject" />
    <cast-block :castmember="subject" />
    <actor-block :actor="subject" />
    <h2 class="title is-2">Mannerisms</h2>
    <ul v-if="(subject.mannerisms.length > 0)">
      <li v-for="m in castmember.mannerisms" :key="m">{{ m }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock, CastBlock, ActorBlock } from "@/components/blocks";
import { Character } from "@/types";

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
  subject!: Character;
}
</script>