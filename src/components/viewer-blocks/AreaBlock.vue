<template>
  <div class="container">
    <h3 class="title is-3">
      {{ area.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h3>
    <p>{{ area.description }}</p>
    <h4 class="title is-4">Subareas</h4>
    <AreaBlock v-for="subarea in area.Subareas" v-bind:key="subarea.title" />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Area } from "@/types";

@Component
export default class AreaBlock extends Vue {
  @Prop()
  area!: Area;
}
</script>
