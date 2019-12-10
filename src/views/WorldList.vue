<template>
  <section class="container">
    <br />
    <h1 class="title">
      Worlds
      <b-button class="is-pulled-right is-info" icon-left="plus" @click="create()">New World</b-button>
    </h1>
    <hr />
    <b-table
      :data="worlds"
      focusable
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
        <b-table-column field="created" label="Created">
          <span>{{ new Date(props.row.created).toLocaleString() }}</span>
        </b-table-column>
        <b-table-column field="edited" label="Last Edited">
          <span>{{ new Date(props.row.edited).toLocaleString() }}</span>
        </b-table-column>
        <b-table-column field="buttons" numeric>
          <div class="buttons has-addons is-pulled-right">
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
            <p>No Worlds to Load.</p>
          </div>
        </section>
      </template>
    </b-table>
    <b-modal :active.sync="creating">
      <world-modal />
    </b-modal>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World, WorldMeta } from "@/types";
import WorldModal from "@/components/WorldModal.vue";

@Component({
  components: {
    WorldModal
  }
})
export default class WorldList extends Vue {
  isPaginated: boolean = true;
  isPaginationSimple: boolean = false;
  paginationPosition: string = "bottom";
  defaultSortDirection: string = "asc";
  sortIcon: string = "arrow-up";
  sortIconSize: string = "is-small";
  currentPage: number = 1;
  perPage: number = 10;
  worldId = 0;

  creating = false;

  get worlds() {
    return this.$store.state.worlds;
  }

  create() {
    this.creating = true;
  }

  view(world: WorldMeta) {
    this.$store.dispatch("loadWorld", world.key).then(() => {
      this.$store
        .dispatch("setViewing", world)
        .then(() => this.$router.push("/viewer"));
    });
  }

  edit(world: WorldMeta) {
    this.$store.dispatch("loadWorld", world.key).then(() => {
      this.$store
        .dispatch("setEditing", world)
        .then(() => this.$router.push("/editor"));
    });
  }

  remove(world: WorldMeta) {
    this.$store.dispatch("removeWorld", world);
  }

  mounted() {
    this.$store.dispatch("loadWorlds");
  }
}
</script>