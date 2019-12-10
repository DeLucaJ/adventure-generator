<template>
  <div class="extra-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
    <cast-workshop :element.sync="element" @update:element="update()"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Extra, World } from "@/types";
import {
  StringListWorkshop,
  ElementWorkshop,
  CastWorkshop
} from "@/components/workshops";

@Component({
  name: "extra-workshop",
  components: {
    StringListWorkshop,
    ElementWorkshop,
    CastWorkshop
  }
})
export default class ExtraWorkshop extends Vue {
  @Prop()
  element!: Extra;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    })
  }
}
</script>