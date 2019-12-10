<template>
  <div class="container element-viewer">
    <br />
    <component :is="currentViewer" :element.sync="target" />
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
  AreaBlock,
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
    AreaBlock,
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
    if (this.target._etype === Types.EType.CHARACTER) {
      return "character-block";
    }
    else if (this.target._etype === Types.EType.EXTRA) {
      return "extra-block";
    }
    else if (this.target._etype === Types.EType.FACTION) {
      return "faction-block";
    }
    else if (this.target._etype === Types.EType.ITEM) {
      return "item-block";
    }
    else if (this.target._etype === Types.EType.AREA) {
      return "area-block"
    }
    else if (this.target._etype === Types.EType.ENCOUNTER) {
      return "encounter-block";
    }
    else if (this.target._etype === Types.EType.CHAPTER) {
      return "chapter-block";
    }
    else if (this.target._etype === Types.EType.EVENT) {
      return "event-block";
    }
    else if (this.target._etype === Types.EType.WORLD) {
      return "world-block";
    }
    else if (this.target._etype === Types.EType.ADVENTURE) {
      return "adventure-block";
    }
    else {
      return undefined;
    }
  }
}
</script>