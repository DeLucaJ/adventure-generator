<template>
  <div class="relation-list">
    <div v-if="world">
      <div v-if="canedit">
        <b-field label="Source" :label-position="labelpos">
          <b-select v-model="newsource" placeholder="Select a World Element" icon="account">
            <optgroup label="Areas">
              <option
                v-for="(area, index) of world.areas"
                :key="index"
                :value="area"
              >{{ area.title }}</option>
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
              <option
                v-for="(item, index) of world.items"
                :key="index"
                :value="item"
              >{{ item.title }}</option>
            </optgroup>
          </b-select>
        </b-field>
        <b-field v-model="newtype" label="Type" :label-position="labelpos">
          <b-input placeholder="is related to"></b-input>
        </b-field>
        <b-field v-model="newtarget" label="Target" :label-position="labelpos">
          <b-select placeholder="Select a World Element" icon="account">
            <optgroup label="Areas">
              <option
                v-for="(area, index) of world.areas"
                :key="index"
                :value="area"
              >{{ area.title }}</option>
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
              <option
                v-for="(item, index) of world.items"
                :key="index"
                :value="item"
              >{{ item.title }}</option>
            </optgroup>
          </b-select>
        </b-field>
        <b-button class="is-text" icon-left="plus" @click="add()" />
      </div>
      <dl>
        <div v-for="(relation, index) of list" :key="index">
          <u>
            <b>{{ relation.source.title }}</b>
          </u>
          <i>{{ relation.type }}</i>
          <u>
            <b>{{ relation.target.title }}</b>
          </u>
           <b-button v-if="canedit" @click="remove(index)" icon-right="remove" />
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
  list!: Relation[];

  labelpos = "on-border";

  newsource: WorldElementMeta | null = null;
  newtarget: WorldElementMeta | null = null;
  newtype: string = ""

  get world(): World {
    return this.$store.state.currentWorld;
  }
}
</script>