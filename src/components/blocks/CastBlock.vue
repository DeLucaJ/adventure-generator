<template>
  <div class="cast-block">
    <h2 class="title">Traits</h2><br/>
    <dl v-if="(element.traits.length > 0)">
      <li v-for="trait in element.traits" :key="trait">{{ trait }}</li> 
    </dl>
    <hr />
    <h2 class="title">Ideals</h2><br/>
    <dl v-if="(element.ideals.length > 0)">
      <li v-for="ideal in element.ideals" :key="ideal">{{ ideal }}</li> 
    </dl>
    <hr />
    <h2 class="title">Flaws</h2><br/>
    <dl v-if="(element.flaws.length > 0)">
      <li v-for="flaw in element.flaws" :key="flaw">{{ flaw }}</li> 
    </dl>
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