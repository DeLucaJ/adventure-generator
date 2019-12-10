<template>
  <div class="faction-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/><hr/>
    <cast-workshop :element.sync="element" @update:element="update()"/><hr/>
    <actor-workshop :element.sync="element" @update:element="update()"/>
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

@Component({
  name: "faction-workshop",
  components: {
    StringListWorkshop,
    ElementWorkshop,
    CastWorkshop,
    ActorWorkshop
  }
})
export default class FactionWorkshop extends Vue {
  @Prop()
  element!: Faction;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    })
  }
}
</script>