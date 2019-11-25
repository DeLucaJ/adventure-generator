<template>
  <div id="narrative-editor">
    <b-field label="Title" label-position="on-border">
      <b-input v-model="narrative.title"></b-input>
    </b-field>
    <b-field label="Description" label-position="on-border">
      <b-input v-model="narrative.description" type="textarea"></b-input>
    </b-field>
    <!-- Quest Menu -->
    <b-field label='Quests'>
      <QuestCard 
        v-for="quest in narrative.quests"
        v-bind:key="quest.title"
        :quest="quest"/>
    </b-field>
    <!-- PlotPoint Menu -->
    <b-field label='Plot Points'>
      <PlotPointCard
        v-for="pp in narrative.plotPoints"
        v-bind:key="pp.title"
        :plotPoint="pp"/>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Narrative } from "@/types";
import QuestCard from "@/components/editors/cards/QuestCard.vue";
import PlotPointCard from "@/components/editors/cards/PlotPointCard.vue";

@Component ({
  components: {
    QuestCard,
    PlotPointCard
  }
})
export default class NarrativeEditor extends Vue {
  @Prop()
  narrative!: Narrative;
}
</script>

<style lang="scss">

</style>