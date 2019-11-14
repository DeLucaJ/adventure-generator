<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Area } from "@/types";

@Component
export default class AreaBlock extends Vue {
  @Prop()
  area: Area = new Area();
}
</script>
