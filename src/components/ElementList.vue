<template>
  <div class="element-list">
    <!-- Add Button -->
    <b-collapse
      class="card"
      v-for="(element, index) of list"
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
        <b-button v-if="canEdit" @click="edit(element, index)" icon-right="pencil">Edit</b-button>
        <b-button v-if="canEdit" @click="remove(element, index)" icon-right="remove">Remove</b-button>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "element-list"
})
export default class ElementList extends Vue {
  @Prop()
  list!: Element[];
  @Prop({ default: false })
  canEdit!: boolean;

  isOpen: number = 0;

  view(element: Element) {}

  edit(element: Element, index: number) {}

  remove(element: Element, index: number) {}

  /* add function */
}
</script>