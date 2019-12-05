<template>
  <div class="container element-editor">
    <br />
    <h1 class="title">
      {{ target.title }}
    </h1>
    <hr />
    {{ currentEditor }}
    <component :is="currentEditor" :element="target" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Types from "@/types";
import {
  CharacterWorkshop,
  ExtraWorkshop,
  FactionWorkshop,
  ItemWorkshop,
  EncounterWorkshop,
  ChapterWorkshop,
  EventWorkshop,
  WorldWorkshop,
  AdventureWorkshop
} from "@/components/workshops";

@Component({
  components: {
    CharacterWorkshop,
    ExtraWorkshop,
    FactionWorkshop,
    ItemWorkshop,
    EncounterWorkshop,
    ChapterWorkshop,
    EventWorkshop,
    WorldWorkshop,
    AdventureWorkshop
  }
})
export default class Editor extends Vue {
  get target() {
    return this.$store.state.editing;
  }

<<<<<<< HEAD
  get currentEditor(): string {
    switch(typeof this.target) {
      case typeof Types.Character:
=======
  get currentEditor() {
    switch(this.target.type) {
      case Types.EType.CHARACTER:
>>>>>>> 956af5a861aaa1ec9b2f7294b6628290364b919f
        return "character-workshop";
        break;
      case Types.EType.EXTRA:
        return "extra-workshop";
        break;
      case Types.EType.FACTION:
        return "faction-workshop";
        break;
      case Types.EType.ITEM:
        return "item-workshop";
        break;
      case Types.EType.ENCOUNTER:
        return "encounter-workshop";
        break;
      case Types.EType.CHAPTER:
        return "chapter-workshop";
        break;
      case Types.EType.EVENT:
        return "event-workshop";
        break;
      case Types.EType.WORLD:
        return "world-workshop";
        break;
      case Types.EType.ADVENTURE:
        return "adventure-workshop";
        break;
      default:
        return "world-workshop"
        break;
    }
  }
}
</script>