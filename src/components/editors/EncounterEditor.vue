<template>
  <div id="encounter-editor">
    <header class="modal-card-head">
      Encounter Editor
    </header>
    <div class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
    </div>
    <header class="title is-6">Area</header>
    <ElementCard :element="subject.area"/>
    <header class="title is-6">
      Characters
      <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Characters</b-button>
    </header>
    <ElementCard
      v-for="c in subject.characters"
      :key="c.title"
      :element="c" />
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Encounter } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class EncounterEditor extends Vue {
  @Prop()
  subject!: Encounter;
}
</script>

<style lang="scss">

</style>