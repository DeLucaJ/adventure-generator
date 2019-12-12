<template>
  <div class="faction-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <relation-list :canedit="true" :element="element" />
    <hr />
    <cast-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <actor-workshop :element.sync="element" @update:element="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Faction, World } from "@/types";
import {
  StringListWorkshop,
  ElementWorkshop,
  CastWorkshop,
  ActorWorkshop
} from "@/components/workshops";
import RelationList from "@/components/RelationList.vue";

@Component({
  name: "faction-workshop",
  components: {
    StringListWorkshop,
    ElementWorkshop,
    CastWorkshop,
    ActorWorkshop,
    RelationList
  }
})
export default class FactionWorkshop extends Vue {
  @Prop()
  element!: Faction;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }
}
</script>