<template>
  <div class="cast-block">
    <h2 class="title is-2">Traits</h2>
    <ul v-if="(element.traits.length > 0)">
      <li v-for="trait in element.traits" :key="trait">{{ trait }}</li> 
    </ul>
    <h2 class="title is-2">Ideals</h2>
    <ul v-if="(element.ideals.length > 0)">
      <li v-for="ideal in element.ideals" :key="ideal">{{ ideal }}</li> 
    </ul>
    <h2 class="title is-2">Flaws</h2>
    <ul v-if="(element.flaws.length > 0)">
      <li v-for="flaw in element.flaws" :key="flaw">{{ flaw }}</li> 
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CastMember } from "@/types";

@Component({
  name: "cast-block"
})
export default class CastBlock extends Vue {
  @Prop()
  element!: Element;
}
</script>