<template>
  <div class="element-list">
    <b-collapse
      class="card"
      v-for="(element, index) of list"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index; load(element.key)"
    >
      <header slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">{{ element.title }}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </header>
      <div class="card-content">
        <div class="content">{{ elements.get(element.key).description }}</div>
      </div>
      <footer class="card-footer">
        <b-button @click="view(element)" icon-right="eye">View</b-button>
        <b-button v-if="canEdit" @click="edit(element, index)" icon-right="pencil">Edit</b-button>
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

  isOpen: number = 0;
  private elements: Map<string, Element> = new Map();

  mounted() {
    for (let item of this.list) {
      this.$store.dispatch("loadElement", item.key).then(element => {
        this.elements.set(item.key, element);
      });
    }
    for (let i = 0; i < this.list.length; i++) {
      this.list[i] = Element.meta(this.elements.get(
        this.list[i].key
      ) as Element) as ElementMeta;
    }
    this.update();
  }

  load(key: string) {
    this.$store.dispatch("loadElement", key).then(element => {
      this.elements.set(key, element);
    });
  }

  view(element: ElementMeta) {
    this.$store.dispatch("setViewing", element).then(() => {
      if (this.$route.path !== "/viewer") {
        this.$router.push("/viewer");
      }
    });
  }

  edit(element: ElementMeta, index: number) {
    this.$store.dispatch("setEditing", element).then(() => {
      if (this.$route.path !== "/editor") {
        this.$router.push("/editor");
      }
    });
  }

  remove(index: number) {
    this.elements.delete(this.list[index].key);
    this.list.splice(index, 1);
    this.update();
  }
  /* add function */

  update() {
    this.$emit("update:list", this.list);
  }
}
</script>