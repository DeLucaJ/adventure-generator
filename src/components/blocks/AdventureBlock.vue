<template>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure } from "@/types";

@Component({
  name: "adventure-block"
})
export default class AdventureBlock extends Vue {
  @Prop()
  adventure!: Adventure;
}
</script>