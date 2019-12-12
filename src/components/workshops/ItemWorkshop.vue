<template>
  <div class="item-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <hr />
    <relation-list :canedit="true" :element="element" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop } from "@/components/workshops";
import { Item } from "@/types";
import RelationList from "@/components/RelationList.vue";

@Component({
  name: "item-workshop",
  components: {
    ElementWorkshop,
    RelationList
  }
})
export default class ItemWorkshop extends Vue {
  @Prop()
  element!: Item;

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }
}
</script>