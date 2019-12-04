<template>
  <div class="actor-workshop">
    <!-- Secrets-->
    <h2 class="has-text-weight-semibold">Secrets</h2>
    <string-list-workshop :list.sync="actor.secrets" @update:list="update()"/>
    <!-- Goals -->
    <h2 class="has-text-weight-semibold">Goals</h2>
    <string-list-workshop :list.sync="actor.goals" @update:list="update()"/>
    <!-- Motivations -->
    <h2 class="has-text-weight-semibold">Motivations</h2>
    <string-list-workshop :list.sync="actor.motivations" @update:list="update()"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Actor } from "@/types";
import { StringListWorkshop } from "@/components/workshops";

@Component({
  name: "actor-workshop",
  components: {
    StringListWorkshop
  }
})
export default class ActorWorkshop extends Vue {
  @Prop()
  actor!: Actor;

  update() {
    this.$emit("update:actor", this.actor);
  }
}
</script>