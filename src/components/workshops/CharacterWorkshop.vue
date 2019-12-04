<template>
  <div class="character-workshop">
    <element-workshop :element.sync="character" @update:element="update()"/>
    <cast-workshop :castmember.sync="character" @update:castmember="update()"/>
    <actor-workshop :actor.sync="character" @update:actor="update()"/>
    <!-- Mannerisms-->
    <h2 class="has-text-weight-semibold">Mannerisms</h2>
    <string-list-workshop :list.sync="character.mannerisms" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Character } from "@/types";
import {
  StringListWorkshop,
  ElementWorkshop,
  CastWorkshop,
  ActorWorkshop
} from "@/components/workshops";

@Component({
  name: "character-workshop",
  components: {
    StringListWorkshop,
    ElementWorkshop,
    CastWorkshop,
    ActorWorkshop
  }
})
export default class CharacterWorkshop extends Vue {
  @Prop()
  character!: Character;

  update() {
    this.$emit("update:character", this.character);
  }
}
</script>