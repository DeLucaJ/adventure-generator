<template>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure, World, AdventureElement, WorldElement } from "@/types";

@Component({
  name: "creator-modal"
})
export default class CreatorModal extends Vue {
  @Prop()
  target!: any;
}
</script>