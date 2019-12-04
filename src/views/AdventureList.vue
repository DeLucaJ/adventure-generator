<template>
  <section class="container">
    <br />
    <!-- <b-field class="is-pulled-right" label="World" label-position="on-border">
      <b-select placeholder="Choose a World">
        <option v-for="world in worlds" :value="world.title" :key="world.id">{{ world.title }}</option>
      </b-select>
    </b-field>-->
    <b-button class="is-pulled-right" icon-left="plus" @click="generate()">New Adventure</b-button>
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
          <b-button type="is-danger" icon-left="delete" @click="remove(props.row)" />
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
    <!-- <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      
    </b-modal>-->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure, AdventureMeta, WorldMeta } from "@/types";

@Component
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

  get adventures(): AdventureMeta[] {
    return this.$store.state.adventures;
  }

  get worlds(): WorldMeta[] {
    return this.$store.state.worlds;
  }

  generate() {
    let newAd = new Adventure(
      `New Adventure ${this.adventureId}`,
      this.adventureId++,
      this.$store.state.currentWorld
    );
    this.$store.dispatch("addAdventure", newAd);
    this.$store.dispatch("loadAdventure", newAd.key);
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