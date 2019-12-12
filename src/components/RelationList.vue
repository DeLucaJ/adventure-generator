<template>
  <div class="relation-list">
    <h2 class="title is-2">Relations</h2>
    <div v-if="world">
      <b-field v-if="canedit" label="New Relation" :label-position="labelpos">
        <b-input disabled :value="element.title" />
        <b-input v-model="newtype" placeholder="Relation Type"></b-input>
        <b-select v-model="newtarget" placeholder="Select a World Element" icon="account">
          <optgroup label="Areas">
            <option v-for="(area, index) of world.areas" :key="index" :value="area">{{ area.title }}</option>
          </optgroup>
          <optgroup label="Factions">
            <option
              v-for="(faction, index) of world.factions"
              :key="index"
              :value="faction"
            >{{ faction.title }}</option>
          </optgroup>
          <optgroup label="Characters">
            <option
              v-for="(character, index) of world.characters"
              :key="index"
              :value="character"
            >{{ character.title }}</option>
          </optgroup>
          <optgroup label="Extras">
            <option
              v-for="(extra, index) of world.extras"
              :key="index"
              :value="extra"
            >{{ extra.title }}</option>
          </optgroup>
          <optgroup label="Items">
            <option v-for="(item, index) of world.items" :key="index" :value="item">{{ item.title }}</option>
          </optgroup>
        </b-select>
        <b-button class="is-pulled-right" icon-left="plus" @click="add()" />
      </b-field>
      <dl>
        <div v-for="(relation, index) of list" :key="index">
          <u>
            <b>{{ relation.source.title }}</b>
          </u>
          <i>{{ relation.type }}</i>
          <u>
            <b>{{ relation.target.title }}</b>
          </u>
          <b-button v-if="canedit" @click="remove()" icon-right="remove" />
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Relation, World, WorldElementMeta } from "@/types";

@Component({
  name: "relation-list"
})
export default class RelationList extends Vue {
  @Prop({ default: false })
  canedit!: boolean;

  @Prop()
  element!: WorldElementMeta;

  list: Relation[] = [];

  labelpos = "on-border";

  newtarget: WorldElementMeta | null = null;
  newtype: string = "";

  get world(): World {
    return this.$store.state.currentWorld;
  }

  mounted() {
    // load all relations w/ this element as the source
    if (this.world) {
      console.log(this.world.relations);
      this.list = this.world.relations.filter(relation => {
        relation.source.key === this.element.key;
      });
      console.log(this.list);
    }
  }

  add() {
    // adds a new relation to the world
    if (this.newtype !== "" && this.newtarget !== null) {
      let nr = new Relation(this.newtype, this.element, this.newtarget as WorldElementMeta);
      this.newtarget = null;
      this.newtype = "";
      this.world.relations.push(nr); // might need to be a store
      // this.$store.dispatch("updateWorld", this.world);
      this.$store.dispatch("saveElement", this.world);
    }
  }

  remove() {
    // removes a relation from the world?
    // not totally certain on this
    // should probably be some sort of store function
  }
}
</script>