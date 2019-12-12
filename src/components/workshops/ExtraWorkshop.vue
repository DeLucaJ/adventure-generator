<template>
  <div class="extra-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/><hr/>
    <relation-list :canedit="true" :element="element" /><hr/>
    <cast-workshop :element.sync="element" @update:element="update()"/><hr/>
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
import RelationList from "@/components/RelationList.vue";

@Component({
  name: "extra-workshop",
  components: {
    StringListWorkshop,
    ElementWorkshop,
    CastWorkshop,
    RelationList
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