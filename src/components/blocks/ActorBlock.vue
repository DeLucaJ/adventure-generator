<template>
  <div class="actor-block">
    <h2 class="title">Secrets</h2><br/>
    <dl v-if="(element.secrets.length > 0)">
      <li v-for="secret in element.secrets" :key="secret">{{ secret }}</li>
    </dl>
    <hr/>
    <h2 class="title">Goals</h2><br/>
    <dl v-if="(element.goals.length > 0)">
      <li v-for="goal in element.goals" :key="goal">{{ goal }}</li>
    </dl>
    <hr/>
    <h2 class="title">Motivations</h2><br/>
    <dl v-if="(element.motivations.length > 0)">
      <li v-for="motivation in element.motivations" :key="motivation">{{ motivation }}</li>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Actor } from "@/types";

@Component({
  name: "actor-block"
})
export default class ElementBlock extends Vue {
  @Prop()
  element!: Actor;
}
</script>