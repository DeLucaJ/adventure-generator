<template>
  <div id="quest-editor">
    <header class="modal-card-head">
      Quest Editor
    </header>
    <div class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <header class="title is-6">
        Encounters
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Encounter</b-button>
      </header>
      <ElementCard 
        v-for="enc in subject.encounters"
        v-bind:key="enc.title"
        :element="enc"/>
      <br>
    </div>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Quest } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class QuestEditor extends Vue {
  @Prop()
  subject!: Quest;
}
</script>

<style lang="scss">

</style>