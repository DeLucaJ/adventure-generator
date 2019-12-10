<template>
  <div class="world-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <br />
    <h2 class="has-text-weight-semibold">
      Areas
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addArea()"
        icon-left="plus"
      >Add Area</b-button>
    </h2><br />
    <element-list :canEdit="true" :list.sync="element.areas" @update:list="update()" />
    <hr />
    <br />
    <h2 class="has-text-weight-semibold">
      Factions
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addFaction()"
        icon-left="plus"
      >Add Faction</b-button>
    </h2><br />
    <element-list :canEdit="true" :list.sync="element.factions" @update:list="update()" />
    <hr />
    <br />
    <h2 class="has-text-weight-semibold">
      Characters
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addCharacter()"
        icon-left="plus"
      >Add Character</b-button>
    </h2><br />
    <element-list :canEdit="true" :list.sync="element.characters" @update:list="update()" />
    <hr />
    <br />
    <h2 class="has-text-weight-semibold">
      Extras
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addExtra()"
        icon-left="plus"
      >Add Extra</b-button>
    </h2><br />
    <element-list :canEdit="true" :list.sync="element.extras" @update:list="update()" />
    <hr />
    <br />
    <h2 class="has-text-weight-semibold">
      Items
      <b-button
        class="is-pulled-right"
        type="is-primary"
        size="is-small"
        @click="addItem()"
        icon-left="plus"
      >Add Item</b-button>
    </h2><br />
    <element-list :canEdit="true" :list.sync="element.items" @update:list="update()" />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World, Area, Faction, Character, Extra, Item } from "@/types";
import { ElementWorkshop } from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "world-workshop",
  components: {
    ElementList,
    ElementWorkshop
  }
})
export default class WorldWorkshop extends Vue {
  @Prop()
  element!: World;

  update() {
    this.$store.dispatch("updateWorld", this.element);
  }

  addArea() {
    this.element.areas.push(
      new Area(
        `Area ${this.element.areas.length + 1}`,
        "An Area in your expansive world.",
        World.meta(this.element)
      )
    );
    this.update();
  }

  addFaction() {
    this.element.factions.push(
      new Faction(
        `Faction ${this.element.factions.length + 1}`,
        "A Faction in your world.",
        World.meta(this.element)
      )
    );
    this.update();
  }

  addCharacter() {
    this.element.characters.push(
      new Character(
        `Character ${this.element.characters.length + 1}`,
        "A Character in your world.",
        World.meta(this.element)
      )
    );
    this.update();
  }

  addExtra() {
    this.element.extras.push(
      new Extra(
        `Extra ${this.element.extras.length + 1}`,
        "A type of extra in your world.",
        World.meta(this.element)
      )
    );
    this.update();
  }

  addItem() {
    this.element.items.push(
      new Item(
        `Item ${this.element.items.length + 1}`,
        "An item or type of item in your world",
        World.meta(this.element)
      )
    );
    this.update();
  }
}
</script>