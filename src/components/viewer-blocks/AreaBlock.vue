<template>
  <section>
    <h3 class="title is-3">Area: {{ area.title }}</h3>
    <p>{{ area.description }}</p>
    <h4 class="title is-4">Subareas</h4>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Area } from "@/types";

@Component
export default class AreaBlock extends Vue {
  @Prop({ default: new Area() })
  area!: Area;
}
</script>
