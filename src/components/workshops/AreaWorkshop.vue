<template>
  <div class="area-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
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
  element!: Area;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    })
  }
}
</script>