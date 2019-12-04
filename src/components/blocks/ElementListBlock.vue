<template>
  <div class="element-list-block">
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
        <!-- Button for Viewing -->
        <b-button @click="view(element)">View</b-button>
        <!-- Button for Editing -->
        <b-button @click="edit(element)">Edit</b-button>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Element-list-workshop"
})
export default class ElementListWorkshop extends Vue {
  @Prop()
  list!: Element[];
  
  isOpen: number = 0;

  view(element: Element) {

  }

  edit(element: Element) {

  }
}
</script>