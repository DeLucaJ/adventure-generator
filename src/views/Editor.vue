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
    switch(this.target.type) {
      case Types.EType.CHARACTER:
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
        return ""
    }
  }
}
</script>