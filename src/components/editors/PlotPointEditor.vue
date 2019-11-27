<template>
  <div id="plot-point-editor">
    <header class="modal-card-head">
      <p class="modal-card-title">Plot Point Editor</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <ElementCard :element="subject.encounter"/>
      <br>
    </section>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PlotPoint } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class PlotPointEditor extends Vue {
  @Prop()
  subject!: PlotPoint;
}
</script>

<style lang="scss">

</style>