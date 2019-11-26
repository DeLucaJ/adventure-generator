<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ element.title }}</p>
      <div class="buttons is-pulled-right">
        <b-button class='is-text' icon-left="pencil" @click="edit()"></b-button>
        <b-button class='is-text' icon-left="close"></b-button>
        <b-button class='is-text' icon-left="menu-down"></b-button>
      </div>
    </header>
    <div class="card-content">{{ element.description }}</div>
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
export default class ElementCard extends Vue {
  @Prop()
  element!: Element;
  modalActive: boolean = false;
  editor: string = "";

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