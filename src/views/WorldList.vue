<template>
  <section class="container">
    <b-table
      :data="worlds"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort=""
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page">
      <template slot-scope="">
          <!-- <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ props.row.id }}
          </b-table-column>

          <b-table-column field="user.first_name" label="First Name" sortable>
              {{ props.row.user.first_name }}
          </b-table-column>

          <b-table-column field="user.last_name" label="Last Name" sortable>
              {{ props.row.user.last_name }}
          </b-table-column>

          <b-table-column field="date" label="Date" sortable centered>
              <span class="tag is-success">
                  {{ new Date(props.row.date).toLocaleDateString() }}
              </span>
          </b-table-column>

          <b-table-column label="Gender">
              <span>
                  <b-icon pack="fas"
                      :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                  </b-icon>
                  {{ props.row.gender }}
              </span>
          </b-table-column> -->
      </template>
    </b-table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class WorldList extends Vue {
  isPaginated: boolean = true;
  isPaginationSimple: boolean = false;
  paginationPosition: string = 'bottom';
  defaultSortDirection: string = 'asc';
  sortIcon: string = 'arrow-up';
  sortIconSize: string = 'is-small';
  currentPage: number = 1;
  perPage: number = 5;

  get worlds() {
    return this.$store.dispatch("loadWorlds");
  }

}
</script>