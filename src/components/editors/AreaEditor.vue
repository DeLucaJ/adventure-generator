<template>
  <div id="area-editor">
    <header class="modal-card-head">
      <p class="modal-card-title">Area Editor</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <header class="title is-6">
        Sub-Areas
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Sub-Area</b-button>
      </header>
      <ElementCard 
        v-for="sub in subject.subAreas"
        v-bind:key="sub.title"
        :element="sub"/>
      <br>
    </section>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Area } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class AreaEditor extends Vue {
  @Prop()
  subject!: Area;
}
</script>

<style lang="scss">

</style>