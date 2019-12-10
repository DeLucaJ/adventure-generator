<template>
  <div class="element-list">
    <b-collapse
      class="card"
      v-for="(element, index) of elements"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <header slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">{{ element.title }}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </header>
      <div class="card-content">
        <div class="content">{{ element.description }}</div>
      </div>
      <footer class="card-footer">
        <b-button @click="view(element)" icon-right="eye">View</b-button>
        <b-button v-if="canEdit" @click="edit(element)" icon-right="pencil">Edit</b-button>
        <b-button v-if="canEdit" @click="remove(index)" icon-right="remove">Remove</b-button>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementMeta, Element } from "@/types";

@Component({
  name: "element-list"
})
export default class ElementList extends Vue {
  @Prop()
  list!: ElementMeta[];
  @Prop({ default: false })
  canEdit!: boolean;

  elements: Element[] = [];
  isOpen: number = 0;

  mounted() {
    for (let item of this.list) {
      this.$store.dispatch("loadElement", item.key).then(element => {
        if (element) {
          this.elements.push(element);
        }
      });
    }
  }

  view(element: Element) {
    this.$store.dispatch("setViewing", Element.meta(element)).then(() => {
      if (this.$route.path !== "/viewer") {
        this.$router.push("/viewer");
      }
    });
  }

  edit(element: Element) {
    this.$store.dispatch("setEditing", Element.meta(element)).then(() => {
      if (this.$route.path !== "/editor") {
        this.$router.push("/editor");
      }
    });
  }

  remove(index: number) {
    this.elements.splice(index, 1);
    this.update();
  }
  /* add function */

  update() {
    this.$emit("update:list", this.elements.map(element => Element.meta(element)));
  }
}
</script>