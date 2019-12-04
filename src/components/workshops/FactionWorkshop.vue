<template>
  <div class="faction-workshop">
    <element-workshop :element.sync="faction" @update:element="update()"/>
    <cast-workshop :castmember.sync="faction" @update:castmember="update()"/>
    <actor-workshop :actor.sync="faction" @update:actor="update()"/>
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
  faction!: Faction;

  update() {
    this.$emit("update:faction", this.faction);
  }
}
</script>