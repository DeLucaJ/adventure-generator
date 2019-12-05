<template>
  <section class="container">
    <br />
    <h1 class="title">
      Adventures
      <b-button class="is-pulled-right is-info" icon-left="plus" @click="create()">New Adventure</b-button>
    </h1>
    <hr />
    <b-table
      :data="adventures"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="title" label="Name">{{ props.row.title }}</b-table-column>
        <b-table-column field="world-title" label="Setting">{{ props.row.world_title }}</b-table-column>
        <b-table-column field="created" label="Created">
          <span>{{ new Date(props.row.created).toLocaleString() }}</span>
        </b-table-column>
        <b-table-column field="edited" label="Last Edited">
          <span>{{ new Date(props.row.edited).toLocaleString() }}</span>
        </b-table-column>
        <b-table-column field="erase" numeric>
          <div class="buttons">
            <b-button type="is-success" icon-left="eye" @click="view(props.row)" />
            <b-button type="is-warning" icon-left="pencil" @click="edit(props.row)" />
            <b-button type="is-danger" icon-left="delete" @click="remove(props.row)" />
          </div>
        </b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>No Adventures to Load</p>
          </div>
        </section>
      </template>
    </b-table>
    <b-modal :active.sync="creating">
      <adventure-modal />
    </b-modal>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure, AdventureMeta, WorldMeta } from "@/types";
import AdventureModal from "@/components/AdventureModal.vue";

@Component({
  components: {
    AdventureModal
  }
})
export default class AdventureList extends Vue {
  isPaginated: boolean = true;
  isPaginationSimple: boolean = false;
  paginationPosition: string = "bottom";
  defaultSortDirection: string = "asc";
  sortIcon: string = "arrow-up";
  sortIconSize: string = "is-small";
  currentPage: number = 1;
  perPage: number = 10;
  //selectedWorld: WorldMeta = null;
  adventureId = 0;
  creating = false;

  get adventures(): AdventureMeta[] {
    return this.$store.state.adventures;
  }

  get worlds(): WorldMeta[] {
    return this.$store.state.worlds;
  }

  create() {
    this.creating = true;
  }

  view(adventure: AdventureMeta) {
    this.$store.dispatch("loadAdventure", adventure.key).then(() => {
      this.$store
        .dispatch("setViewing", this.$store.state.currentAdventure)
        .then(() => this.$store.dispatch("loadWorld", adventure.world_key))
        .then(() => this.$router.push('/viewer'))
    });
  }

  edit(adventure: AdventureMeta) {
    this.$store.dispatch("loadAdventure", adventure.key).then(() => {
      this.$store
      .dispatch("setEditing", this.$store.state.currentAdventure)
      .then(() => this.$store.dispatch("loadWorld", adventure.world_key))
      .then(() => this.$router.push('/editor'))
    });
  }

  remove(adventure: AdventureMeta) {
    this.$store.dispatch("removeAdventure", adventure);
  }

  mounted() {
    this.$store.dispatch("loadWorlds");
    this.$store.dispatch("loadAdventures");
  }
}
</script>