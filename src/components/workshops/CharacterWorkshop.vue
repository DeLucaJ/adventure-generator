<template>
  <div class="character-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <cast-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <actor-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <!-- Mannerisms-->
    <string-list-workshop
      title="Mannerisms"
      :list.sync="element.mannerisms"
      @update:list="update()"
    />
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
  element!: Character;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }
}
</script>