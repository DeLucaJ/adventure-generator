<template>
  <div class="area-workshop">
    <element-workshop :element.sync="area" @update:area="update()"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop } from "@/components/workshops";
import { Area } from "@/types";

@Component({
  name: "area-workshop",
  components: {
    ElementWorkshop
  }
})
export default class AreaWorkshop extends Vue {
  @Prop()
  area!: Area;

  update() {
    this.$emit("update:area", this.area);
  }
}
</script>