<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Create World</p>
      <b-icon icon="earth" size="is-large"/>
    </header>
    <section class="modal-card-body">
      <b-field label="Name" :label-position="labelpos">
        <b-input v-model="title" />
      </b-field>
      <b-field label="Description" :label-position="labelpos">
        <b-input v-model="description" type="textarea" />
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click="create();$parent.close()">Create</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";

@Component({
  name: "world-modal",
  components: {}
})
export default class WorldModal extends Vue {
  labelpos="on-border";
  title = "New World";
  description = "A vast world with boundless wonders."; 

  create() {
    let nw = new World(this.title, this.description);
    this.$store.dispatch("addWorld", nw);
    this.$store.dispatch("loadWorld", World.key(nw)); 
  }
}
</script>