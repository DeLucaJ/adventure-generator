<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ plotPoint.title }}</p>
      <div class="buttons is-pulled-right">
        <b-button class='is-text' icon-left="pencil"></b-button>
        <b-button class='is-text' icon-left="close"></b-button>
        <b-button class='is-text' icon-left="menu-down"></b-button>
      </div>
    </header>
    <div class="card-content">{{ plotPoint.description }}</div> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PlotPoint } from "@/types";

@Component
export default class PlotPointCard extends Vue {
  @Prop()
  plotPoint!: PlotPoint;
}

</script>