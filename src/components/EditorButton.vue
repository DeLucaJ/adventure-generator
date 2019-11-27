<template>
  <div id="editor-button">
    <b-button class='is-text' icon-left="pencil" @click="edit()"></b-button>
    <!-- EditorModal -->
    <b-modal trap-focus has-modal-card :active.sync="modalActive">
      <component :is="editor" :subject="element"/>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  Element,
  Adventure,
  Narrative,
  Quest,
  Encounter,
  PlotPoint,
  Setting,
  Character,
  Area,
  Item,
  Faction
} from "@/types";
import {
  AdventureEditor,
  AreaEditor,
  CharacterEditor,
  EncounterEditor,
  FactionEditor,
  ItemEditor,
  NarrativeEditor,
  PlotPointEditor,
  QuestEditor, 
  SettingEditor
} from "@/components/editors";

@Component({
  components: {
    AdventureEditor,
    AreaEditor,
    CharacterEditor,
    EncounterEditor,
    FactionEditor,
    ItemEditor,
    NarrativeEditor,
    PlotPointEditor,
    QuestEditor, 
    SettingEditor
  }
})
export default class EditorButton extends Vue {
  @Prop()
  element!: Element;
  editor: string = "";
  modalActive: boolean = false;

  mounted() {
    if (this.element instanceof Adventure) {
      this.editor = `AdventureEditor`;
    }
    else if (this.element instanceof Narrative) {
      this.editor = `NarrativeEditor`;
    }
    else if (this.element instanceof Quest) {
      this.editor = `QuestEditor`;
    }
    else if (this.element instanceof Encounter) {
      this.editor = `EncounterEditor`;
    }
    else if (this.element instanceof PlotPoint) {
      this.editor = `PlotPointEditor`;
    }
    else if (this.element instanceof Setting) {
      this.editor = `SettingEditor`;
    }
    else if (this.element instanceof Area) {
      this.editor = `AreaEditor`;
    }
    else if (this.element instanceof Character) {
      this.editor = `CharacterEditor`;
    }
    else if (this.element instanceof Item) {
      this.editor = `ItemEditor`;
    }
    else if (this.element instanceof Faction) {
      this.editor = `FactionEditor`;
    }
  }

  edit() {
    this.modalActive = true;
  }
}

</script>