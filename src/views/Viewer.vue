<template>
  <div class="container element-viewer">
    <br />
    <h1 class="title">
      {{ target.title }}
    </h1>
    <hr />
    {{ currentEditor }}
    <component :is="currentViewer" :element="target" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Types from "@/types";
import {
  CharacterBlock,
  ExtraBlock,
  FactionBlock,
  ItemBlock,
  EncounterBlock,
  ChapterBlock,
  EventBlock,
  WorldBlock,
  AdventureBlock
} from "@/components/blocks";

@Component({
  components: {
    CharacterBlock,
    ExtraBlock,
    FactionBlock,
    ItemBlock,
    EncounterBlock,
    ChapterBlock,
    EventBlock,
    WorldBlock,
    AdventureBlock
  }
})
export default class Viewer extends Vue {
  get target() {
    return this.$store.state.viewing;
  }

  get currentViewer() {
    switch(typeof this.target) {
      case typeof Types.Character:
        return "character-block";
        break;
      case typeof Types.Extra:
        return "extra-block";
        break;
      case typeof Types.Faction:
        return "faction-block";
        break;
      case typeof Types.Item:
        return "item-block";
        break;
      case typeof Types.Encounter:
        return "encounter-block";
        break;
      case typeof Types.Chapter:
        return "chapter-block";
        break;
      case typeof Types.PlotEvent:
        return "event-block";
        break;
      case typeof Types.World:
        return "world-block";
        break;
      case typeof Types.Adventure:
        return "adventure-block";
        break;
      default:
        return "world-block"
    }
  }
}
</script>