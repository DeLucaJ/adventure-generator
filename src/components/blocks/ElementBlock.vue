<template>
  <div class="element-block">
    <h1 class="title">{{ element.title }}</h1><hr />
    <p>{{ element.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Element } from "@/types";

@Component({
  name: "element-block"
})
export default class ElementBlock extends Vue {
  @Prop()
  element!: Element;
}
</script>