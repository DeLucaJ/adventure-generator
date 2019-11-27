<template>
  <div id="adventure-editor">
    <header class="modal-card-head">
      <p class="modal-card-title">Adventure Editor</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <ElementCard :element="subject.narrative"/>
      <ElementCard :element="subject.setting"/>
    </section>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Adventure } from '@/types';
import ElementCard from "@/components/ElementCard.vue";

@Component({
  components: {
    ElementCard
  }
})
export default class AdventureEditor extends Vue {
  @Prop()
  subject!: Adventure;
}
</script>

<style lang="scss">

</style>