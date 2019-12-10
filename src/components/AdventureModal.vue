<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Create Adventure</p>
      <b-icon icon="book" size="is-large"/>
    </header>
    <section class="modal-card-body">
      <b-field label="Name" :label-position="labelpos">
        <b-input v-model="title" />
      </b-field>
      <b-field label="Description" :label-position="labelpos">
        <b-input v-model="description" type="textarea" />
      </b-field>
      <b-field v-if="worlds.length > 0" label="World" :label-position="labelpos">
        <b-select placeholder="Choose a World" expanded>
          <option v-for="world in worlds" :value="world.title" :key="world.id">{{ world.title }}</option>
        </b-select>
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
import { Adventure, WorldMeta } from "@/types";

@Component({
  name: "adventure-modal"
})
export default class AdventureModal extends Vue {
  private static _id = 0;
  labelpos = "on-border";
  title = "New Adventure";
  description = "A grand adventure for all to enjoy.";
  world?: WorldMeta;

  get newID(): number {
    return AdventureModal._id++;
  }

  get worlds() {
    return this.$store.state.worlds;
  }

  create() {
    if (this.world !== undefined) {
      console.log(this.$store.state.currentWorld);
      let na: Adventure = new Adventure(
        this.title,
        this.description,
        this.newID,
        this.world
      );
      this.$store.dispatch("addAdventure", na);
      this.$store.dispatch("loadAdventure", Adventure.key(na));
    } else {
      this.worldWarning();
    }
  }

  worldWarning() {
    this.$buefy.toast.open({
      message:
        "There is no World for this adventure to take place! Try making one!",
      type: "is-warning"
    });
  }

  mounted() {
    if (this.$store.state.worlds.length == 0) {
      this.worldWarning();
    }
    else {
      this.world = this.$store.state.worlds[0];
    }
  }
}
</script>