<template>
  <div class="element-editor">
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

  get currentEditor() {
    switch(typeof this.target) {
      case typeof Types.Character:
        return "character-workshop";
        break;
      case typeof Types.Extra:
        return "extra-workshop";
        break;
      case typeof Types.Faction:
        return "faction-workshop";
        break;
      case typeof Types.Item:
        return "item-workshop";
        break;
      case typeof Types.Encounter:
        return "encounter-workshop";
        break;
      case typeof Types.Chapter:
        return "chapter-workshop";
        break;
      case typeof Types.PlotEvent:
        return "event-workshop";
        break;
      case typeof Types.World:
        return "world-workshop";
        break;
      case typeof Types.Adventure:
        return "adventure-workshop";
        break;
      default:
        return ""
    }
  }
}
</script>