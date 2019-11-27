<template>
  <div id="narrative-editor">
    <header class="modal-card-header">
      Narrative Editor
    </header>
    <div class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <!-- Quest Menu -->
      <header class="title is-6">
        Quests
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Quest</b-button>
      </header>
      <ElementCard 
        v-for="quest in subject.quests"
        v-bind:key="quest.title"
        :element="quest"/>
      <br>
      <!-- PlotPoint Menu -->
      <header class="title is-6">
        Plot Points
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Plot Point</b-button>
      </header>
      <ElementCard
        v-for="pp in subject.plotPoints"
        v-bind:key="pp.title"
        :element="pp"/>
    </div>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Narrative } from "@/types";
import ElementCard from "@/components/ElementCard.vue";

@Component ({
  components: {
    ElementCard
  }
})
export default class NarrativeEditor extends Vue {
  @Prop()
  subject!: Narrative;
}
</script>

<style lang="scss">

</style>