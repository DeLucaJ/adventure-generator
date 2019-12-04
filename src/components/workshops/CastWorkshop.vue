<template>
  <div class="cast-member-workshop">
    <!-- Traits -->
    <h2 class="has-text-weight-semibold">Traits</h2>
    <string-list-workshop :list.sync="castmember.traits" @update:list="update()"/>
    <!-- Ideals -->
    <h2 class="has-text-weight-semibold">Ideals</h2>
    <string-list-workshop :list.sync="castmember.ideals" @update:list="update()"/>
    <!-- Flaws -->
    <h2 class="has-text-weight-semibold">Flaws</h2>
    <string-list-workshop :list.sync="castmember.flaws" @update:list="update()"/>
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
  castmember!: CastMember;

  update() {
    this.$emit("update:castmember", this.castmember);
  }
}
</script>