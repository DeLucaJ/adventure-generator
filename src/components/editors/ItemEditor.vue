<template>
  <div id="item-editor">
    <header class="modal-card-head">
      <p class="modal-card-title">Item Editor</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Item } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class ItemEditor extends Vue {
  @Prop()
  subject!: Item;
}
</script>

<style lang="scss">

</style>