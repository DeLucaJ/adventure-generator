<template>
  <div class="item-workshop">
    <element-workshop :element.sync="item" @update:item="update()"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop } from "@/components/workshops";
import { Item } from "@/types";

@Component({
  name: "item-workshop",
  components: {
    ElementWorkshop
  }
})
export default class ItemWorkshop extends Vue {
  @Prop()
  item!: Item;

  update() {
    this.$emit("update:item", this.item);
  }
}
</script>