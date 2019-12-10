<template>
  <div class="adventure-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <h2 class="has-text-weight-semibold">The World</h2>
    {{ element.world.title }}
    <hr />
    <!-- a way to link to the world -->
    <h2 class="has-text-weight-semibold">
      Chapters
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addChapter()"
        icon-left="plus"
      >Add Chapter</b-button>
    </h2>
    <br />
    <element-list :canEdit="true" :list.sync="element.chapters" @update:list="update()" />
    <!-- <hr />
    <h2 class="has-text-weight-semibold">
      Events
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addEvent()"
        icon-left="plus"
      >Add Event</b-button>
    </h2>
    <br />
    <element-list :canEdit="true" :list.sync="element.plotevents" @update:list="update()" />
    <hr />
    <h2 class="has-text-weight-semibold">
      Encounters
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addEncounter()"
        icon-left="plus"
      >Add Encounter</b-button>
    </h2>
    <br />
    <element-list :canEdit="true" :list.sync="element.encounters" @update:list="update()" />-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure, Chapter, PlotEvent, Encounter } from "@/types";
import { ElementWorkshop } from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "adventure-workshop",
  components: {
    ElementList,
    ElementWorkshop
  }
})
export default class AdventureWorkshop extends Vue {
  @Prop()
  element!: Adventure;

  update() {
    this.$store.dispatch("updateAdventure", this.element);
  }

  addChapter() {
    const chapter = new Chapter(
      `Chapter ${this.element.chapters.length + 1}`,
      "A Chapter of your epic adventure.",
      Adventure.meta(this.element)
    );
    this.$store.dispatch("saveElement", chapter).then(() => {
      this.element.chapters.push(Chapter.meta(chapter));
      this.update();
    });
  }

  /* addEvent() {
    this.element.plotevents.push(
      new PlotEvent(
        `New Event ${this.element.plotevents.length + 1}`,
        "An event that takes place in this chapter",
        Adventure.meta(this.element)
      )
    );
    this.update();
  }

  addEncounter() {
    this.element.encounters.push(
      new Encounter(
        `New Encounter ${this.element.encounters.length + 1}`,
        "A really Cool encounter",
        Adventure.meta(this.element)
      )
    );
    this.update();
  } */
}
</script>