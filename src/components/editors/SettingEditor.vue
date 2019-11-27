<template>
  <div id="setting-editor">
    <header class="modal-card-head">
      <p class="modal-card-title">Setting Editor</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <header class="title is-6">
        Areas
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Area</b-button>
      </header>
      <ElementCard 
        v-for="a in subject.areas"
        v-bind:key="a.title"
        :element="a"/>
      <br>
      <header class="title is-6">
        Characters
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Character</b-button>
      </header>
      <ElementCard 
        v-for="c in subject.characters"
        v-bind:key="c.title"
        :element="c"/>
      <br>
      <header class="title is-6">
        Items
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Item</b-button>
      </header>
      <ElementCard 
        v-for="i in subject.items"
        v-bind:key="i.title"
        :element="i"/>
      <br>
    </section>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Setting } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class SettingEditor extends Vue {
  @Prop()
  subject!: Setting;
}
</script>

<style lang="scss">

</style>