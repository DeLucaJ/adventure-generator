<template>
  <div class="narrative-block">
    <h2 class="title is-2">Narrative: {{ narrative.title }}</h2>
    <h3 class="title is-3">Quests</h3>
    <QuestBlock 
      v-for="quest in narrative.quests" 
      v-bind:key="quest.title" 
      :quest="quest"/>
    <h3 class="title is-3">Plot Events</h3> 
    <PlotPointBlock 
      v-for="plotPoint in narrative.plotPoints" 
      v-bind:key="plotPoint.title" 
      :plotPoint="plotPoint"/>
    <br>    
  </div>
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
  @Prop()
  narrative!: Narrative;
  
  buttonActive: boolean= true;
}
</script>