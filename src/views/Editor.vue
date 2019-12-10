<template>
  <div class="container element-editor">
    <br />
    <component v-if="target" :is="currentEditor" :element.sync="target"/>
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
  AreaWorkshop,
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
    AreaWorkshop,
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
    if (this.target._etype === Types.EType.CHARACTER) {
      return "character-workshop";
    }
    else if (this.target._etype === Types.EType.EXTRA) {
      return "extra-workshop";
    }
    else if (this.target._etype === Types.EType.FACTION) {
      return "faction-workshop";
    }
    else if (this.target._etype === Types.EType.ITEM) {
      return "item-workshop";
    }
    else if (this.target._etype === Types.EType.AREA) {
      return "area-workshop"
    }
    else if (this.target._etype === Types.EType.ENCOUNTER) {
      return "encounter-workshop";
    }
    else if (this.target._etype === Types.EType.CHAPTER) {
      return "chapter-workshop";
    }
    else if (this.target._etype === Types.EType.EVENT) {
      return "event-workshop";
    }
    else if (this.target._etype === Types.EType.WORLD) {
      return "world-workshop";
    }
    else if (this.target._etype === Types.EType.ADVENTURE) {
      return "adventure-workshop";
    }
    else {
      return undefined;
    }
  }
}
</script>