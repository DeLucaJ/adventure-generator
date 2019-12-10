<template>
  <div class="character-block">
    <element-block :element="element" /><hr/>
    <cast-block :element="element" /><hr/>
    <actor-block :element="element" /><hr/>
    <h2 class="title">Mannerisms</h2><br/>
    <dl v-if="(element.mannerisms.length > 0)">
      <li v-for="m in element.mannerisms" :key="m">{{ m }}</li>
    </dl>
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
  element!: Character;
}
</script>