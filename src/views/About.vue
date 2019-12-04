<template>
  <section class="container page has-text-centered">
    <h1 class="title is-1">Welcome to Adventure Generator</h1>
    <p class="subtitle">A tool to help Game Masters craft and run adventures</p>
    <br />
    <div class="columns">
      <div class="column is-half">
        <b-button @click="newAdventure()" type="is-info" icon-left="book" size="is-large" expanded>New Adventure</b-button>
      </div>
      <div class="column is-half">
        <b-button @click="newWorld()" type="is-info" icon-left="earth" size="is-large" expanded>New World</b-button>
      </div>
    </div>
    <b-modal :active.sync="creatingAdven">
      <adventure-modal />
    </b-modal>
    <b-modal :active.sync="creatingWorld">
      <world-modal />
    </b-modal>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdventureModal from "@/components/AdventureModal.vue";
import WorldModal from "@/components/WorldModal.vue";

@Component({
  components: {
    AdventureModal,
    WorldModal
  }
})
export default class About extends Vue {
  creatingAdven: boolean = false;
  creatingWorld: boolean = false;
  
  newAdventure() {
    this.creatingAdven = true;
  }

  newWorld() {
    this.creatingWorld = true;
  }

  mounted() {
    this.$store.dispatch("loadWorlds");
    this.$store.dispatch("loadAdventures");
  }
}
</script>