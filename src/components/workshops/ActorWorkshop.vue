<template>
  <div class="actor-workshop">
    <!-- Secrets-->
    <h2 class="has-text-weight-semibold">Secrets</h2>
    <string-list-workshop :list.sync="element.secrets" @update:list="update()"/>
    <!-- Goals -->
    <h2 class="has-text-weight-semibold">Goals</h2>
    <string-list-workshop :list.sync="element.goals" @update:list="update()"/>
    <!-- Motivations -->
    <h2 class="has-text-weight-semibold">Motivations</h2>
    <string-list-workshop :list.sync="element.motivations" @update:list="update()"/>
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
  element!: Actor;

  update() {
    this.$emit("update:element", this.element);
  }
}
</script>