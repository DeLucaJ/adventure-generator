<template>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";

@Component({
  name: "world-block"
})
export default class WorldBlock extends Vue {
  @Prop()
  World!: World;
}
</script>