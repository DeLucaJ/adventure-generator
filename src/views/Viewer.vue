<template>
  <section class="page container">
    <div class="columns">
      <div class="column is-one-fifth">
        <b-menu>
          <b-menu-list label="Adventure">
            <b-menu-item label="Overview" icon="eye"/>
            <b-menu-item  icon="book-open-variant" :active="isActive" :expanded="isActive" @click="isActive = !isActive">
              <template slot="label" slot-scope="props">
                Narrative
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item label="Overview"/>
              <b-menu-item label="Quests"/>
              <b-menu-item label="Encounters"/>
            </b-menu-item >
            <b-menu-item icon="earth" :active="isActive" :expanded="isActive" @click="isActive = !isActive">
              <template slot="label" slot-scope="props">
                Setting
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item label="Overview"/>
              <b-menu-item label="Characters"/>
              <b-menu-item label="Locations"/>
            </b-menu-item >
          </b-menu-list>
        </b-menu>
      </div>
      <div class="column container">
        <AdventureBlock v-bind:adventure="adventure" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Adventure } from "@/types";
import AdventureBlock from "@/components/viewer-blocks/AdventureBlock.vue";
import { NarrativeEditor } from "@/components/editors"

@Component ({
  components: {
    AdventureBlock,
    NarrativeEditor
  }
})
export default class AdventureViewer extends Vue {
  adventure: Adventure = new Adventure();
  isActive: boolean = true;
}
</script>
