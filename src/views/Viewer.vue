<template>
  <div class="container element-viewer">
    <br />
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
    switch(this.target.type) {
      case Types.EType.CHARACTER:
        return "character-block";
        break;
      case Types.EType.EXTRA:
        return "extra-block";
        break;
      case Types.EType.FACTION:
        return "faction-block";
        break;
      case Types.EType.ITEM:
        return "item-block";
        break;
      case Types.EType.ENCOUNTER:
        return "encounter-block";
        break;
      case Types.EType.CHAPTER:
        return "chapter-block";
        break;
      case Types.EType.EVENT:
        return "event-block";
        break;
      case Types.EType.WORLD:
        return "world-block";
        break;
      case Types.EType.ADVENTURE:
        return "adventure-block";
        break;
      default:
        return "world-block"
    }
  }
}
</script>