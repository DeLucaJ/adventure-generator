<template>
  <aside class="menu">
    <div v-if="adventure">
      <p class="menu-label">
        <a @click="select(adventure)">{{ adventure.title }}</a>
      </p>
      <ul class="menu-list">
        <li v-for="(chapter, index) in adventure.chapters" :key="index">
          <a class="is-link" @click="select(chapter)">{{ chapter.title }}</a>
        </li>
      </ul>
    </div>
    <br />
    <div v-if="world">
      <p class="menu-label">
        <a @click="select(world)">{{ world.title }}</a>
      </p>
      <ul class="menu-list">
        <li>
          <a @click="showAreas()">Areas</a>
          <ul v-if="showareas">
            <li v-for="(area, index) in world.areas" :key="index">
              <a class="is-link" @click="select(area)">{{ area.title }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a @click="showFactions()">Factions</a>
          <ul v-if="showfacts">
            <li v-for="(faction, index) in world.factions" :key="index">
              <a class="is-link" @click="select(faction)">{{ faction.title }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a @click="showCharacters()">Characters</a>
          <ul v-if="showchars">
            <li v-for="(character, index) in world.characters" :key="index">
              <a class="is-link" @click="select(character)">{{ character.title }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a @click="showExtras()">Extras</a>
          <ul v-if="showextra">
            <li v-for="(extra, index) in world.extras" :key="index">
              <a class="is-link" @click="select(extra)">{{ extra.title }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a @click="showItems()">Items</a>
          <ul v-if="showitems">
            <li v-for="(item, index) in world.items" :key="index">
              <a class="is-link" @click="select(item)">{{ item.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Element, Adventure, World, ElementMeta } from "@/types";

@Component({
  name: "nav-menu"
})
export default class NavMenu extends Vue {
  showareas = false;
  showfacts = false;
  showchars = false;
  showextra = false;
  showitems = false;

  get editing(): boolean {
    return this.$route.path === "/editor";
  }

  get adventure(): Adventure {
    return this.$store.state.currentAdventure;
  }

  get world(): World {
    return this.$store.state.currentWorld;
  }

  showAreas() {
    this.showareas = !this.showareas;
  }

  showFactions() {
    this.showfacts = !this.showfacts;
  }

  showCharacters() {
    this.showchars = !this.showchars;
  }

  showExtras() {
    this.showextra = !this.showextra;
  }

  showItems() {
    this.showitems = !this.showitems;
  }

  select(element: ElementMeta) {
    // this will set the element based on editing()
    if (this.editing) {
      // set current editor to selected
      this.$store.dispatch("setEditing", element);
    } else {
      // set current viewing to selected
      this.$store.dispatch("setViewing", element)
    }
  }
}
</script>