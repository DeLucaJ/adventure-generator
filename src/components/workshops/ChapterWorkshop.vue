<template>
  <div class="chapter-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <string-list-workshop :list.sync="element.objectives" @update:list="update()" />
    <h2 class="has-text-weight-semibold">
      Encounters
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addEncounter()"
        icon-left="plus"
      >Add Encounter</b-button>
    </h2><br/>
    <element-list
      v-if="renderLists"
      :canEdit="true"
      :list.sync="element.encounters"
      @update:list="update()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop, StringListWorkshop } from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";
import { Chapter, Encounter, Adventure } from "@/types";

@Component({
  name: "chapter-workshop",
  components: {
    ElementWorkshop,
    StringListWorkshop,
    ElementList
  }
})
export default class ChapterWorkshop extends Vue {
  @Prop()
  element!: Chapter;
  renderLists = true;

  refreshLists() {
    this.renderLists = false;
    this.$nextTick(() => {
      this.renderLists = true;
    });
  }

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
      this.refreshLists();
    });
  }

  addEncounter() {
    const encounter = new Encounter(
      `New Encounter ${this.element.encounters.length + 1}`,
      "A really Cool encounter",
      this.element.adventure
    );
    this.$store.dispatch("saveElement", encounter).then(() => {
      this.element.encounters.push(Encounter.meta(encounter));
      this.update();
    });
  }
}
</script>