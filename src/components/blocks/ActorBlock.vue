<template>
  <div class="actor-block">
    <h2 class="title is-2">Secrets</h2>
    <ul v-if="(castmember.secrets.length > 0)">
      <li v-for="secret in castmember.secrets" :key="secret">{{ secret }}</li>
    </ul>
    <h2 class="title is-2">Goals</h2>
    <ul v-if="(castmember.goals.length > 0)">
      <li v-for="goal in castmember.goals" :key="goal">{{ goal }}</li>
    </ul>
    <h2 class="title is-2">Motivations</h2>
    <ul v-if="(castmember.motivations.length > 0)">
      <li v-for="motivation in castmember.motivations" :key="motivation">{{ motivation }}</li>
    </ul>
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
  actor!: Actor;
}
</script>