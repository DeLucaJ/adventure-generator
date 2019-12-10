<template>
  <div class="actor-workshop">
    <!-- Secrets-->
    <string-list-workshop title="Secrets" :list.sync="element.secrets" @update:list="update()" />
    <hr />
    <!-- Goals -->
    <string-list-workshop title="Goals" :list.sync="element.goals" @update:list="update()" />
    <hr />
    <!-- Motivations -->
    <string-list-workshop
      title="Motivations"
      :list.sync="element.motivations"
      @update:list="update()"
    />
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
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }
}
</script>