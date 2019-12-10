<template>
  <div class="cast-member-workshop">
    <!-- Traits -->
    <string-list-workshop title="Traits" :list.sync="element.traits" @update:list="update()" />
    <hr />
    <!-- Ideals -->
    <string-list-workshop title="Ideals" :list.sync="element.ideals" @update:list="update()" />
    <hr />
    <!-- Flaws -->
    <string-list-workshop title="Flaws" :list.sync="element.flaws" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CastMember } from "@/types";
import { StringListWorkshop } from "@/components/workshops";

@Component({
  name: "cast-workshop",
  components: {
    StringListWorkshop
  }
})
export default class CastWorkshop extends Vue {
  @Prop()
  element!: CastMember;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }
}
</script>