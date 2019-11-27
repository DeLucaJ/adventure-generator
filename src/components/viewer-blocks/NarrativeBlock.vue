<template>
  <div id="narrative-block">
    <h2 class="title is-2">
      {{ narrative.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h2>
    {{ narrative.description }}
    <br />
    <h3 class="title is-3">Quests</h3>
    <QuestBlock v-for="q in narrative.quests" :key="q.title" :quest="q" />
    <h3 class="title is-3">Plot Events</h3>
    <PlotPointBlock v-for="pp in narrative.plotPoints" :key="pp.title" :plotPoint="pp" />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Narrative } from "@/types";
import { QuestBlock, PlotPointBlock } from "@/components/viewer-blocks";

@Component({ 
  components: {
    QuestBlock, PlotPointBlock
  }
})
export default class NarrativeBlock extends Vue {
  @Prop()
  narrative!: Narrative;
}
</script>