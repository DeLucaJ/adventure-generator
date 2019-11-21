<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Narrative: {{ narrative.title }}</h2>
      <h3 class="title is-3">Graph</h3>
      <b-button 
        :disabled="!buttonActive"
        icon-left='settings' 
        @click="generateGraph()"
      >
        Generate Narrative
      </b-button>
      <GraphBlock :graph="narrative.graph" />
      <!-- Should Key these by an ID relative to the node -->
      <h3 class="title is-3">Quests</h3>
      <QuestBlock v-for="quest in narrative.quests" v-bind:key="quest.title"/>
      <h3 class="title is-3">Plot Events</h3> 
      <PlotPointBlock v-for="plotPoint in narrative.plotPoints" v-bind:key="plotPoint.title" />    
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Narrative } from "@/types";
import { QuestBlock, PlotPointBlock, GraphBlock } from '@/components/viewer-blocks/index';

@Component({
  components: {
    QuestBlock,
    PlotPointBlock,
    GraphBlock
  }
})
export default class NarrativeBlock extends Vue {
  @Prop({ default: new Narrative() })
  narrative!: Narrative;
  
  buttonActive: boolean= true;

  generateGraph() {
    this.narrative.generateGraph();
    this.buttonActive = false;
  }
}
</script>