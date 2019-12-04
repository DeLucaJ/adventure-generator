<template>
  <div class="extra-workshop">
    <element-workshop :element.sync="extra" @update:element="update()"/>
    <cast-workshop :castmember.sync="extra" @update:castmember="update()"/>
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
  extra!: Extra;

  update() {
    this.$emit("update:extra", this.extra);
  }
}
</script>