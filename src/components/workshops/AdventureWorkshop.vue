<template>
  <div class="adventure-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
    <h2 class="has-text-weight-semibold">The World</h2>
    {{ element.world.title }}<hr/>
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
    </h2><br/>
    <element-list :canEdit="true" :list.sync="element.chapters" @update:list="update()" /><hr/>
    <h2 class="has-text-weight-semibold">Events</h2>
    <element-list :canEdit="true" :list.sync="element.events" @update:list="update()" /><hr/>
    <h2 class="has-text-weight-semibold">Encounters</h2>
    <element-list :canEdit="true" :list.sync="element.encounters" @update:list="update()" />  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure, Chapter } from "@/types";
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
    this.element.chapters.push(new Chapter(
      `Chapter ${this.element.chapters.length + 1}`,
      "A Chapter of your epic adventure.",
      Adventure.meta(this.element)
    ));
    this.update();
  }
}
</script>