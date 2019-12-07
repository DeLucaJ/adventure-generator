<template>
  <div class="element-workshop">
    <h1 class="title">
      {{ element.title }}
    </h1>
    <hr />
    <b-field label="Name" :label-position="labelpos">
      <b-input v-model="element.title" @input="update()" />
    </b-field>
    <b-field label="Description" :label-position="labelpos">
      <b-input v-model="element.description" type="textarea" @input="update()" />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Element } from "@/types";

@Component({
  name: "element-workshop"
})
export default class ElementWorkshop extends Vue {
  @Prop()
  element!: Element;

  labelpos: string = "on-border";

  update() {
    this.$emit("update:element", this.element);
  }
}
</script>