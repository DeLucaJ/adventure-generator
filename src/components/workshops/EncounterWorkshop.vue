<template>
  <div class="encounter-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <h2 class="has-text-weight-semibold">Areas</h2>
    <!-- Needs Single Element Viewer/Editor -->
    {{ element.are.title }}
    <h2 class="has-text-weight-semibold">Cast</h2>
    <element-list :canEdit="true" :list.sync="element.cast" @update:list="update()" />
    <string-list-workshop :list.sync="element.objectives" @update:list="update()" />
    <div class="encounter-event-workshop">
      <h2 class="has-text-weight-semibold">Events</h2>
      <b-button
        class="is-text"
        :icon-left="eventedit ? 'cancel' : 'pencil'"
        @click="eventedit = !eventedit"
      />
      <b-field :class="{ active: eventedit }">
        <b-input v-model="newcondition" />
        <b-icon icon="arrow-right-bold" />
        <b-input v-model="newevent" />
        <b-button class="is-text" icon-left="plus" @click="addEvent()" />
      </b-field>
      <ul class="encounter-events">
        <li v-for="event in element.events" :key="event.condition">
          <span class="has-text-weight-bold">{{ event.condtion }}&nbsp;</span>
          <b-icon icon="arrow-right-bold" />
          <span class="is-italic">&nbsp;{{ event.event }}</span>
          <div class="buttons has-addons" :class="{ active: eventedit }">
            <!-- <b-button icon-left="pencil" @click="editEvent(event)" /> -->
            <b-button icon-left="minus" @click="deleteEvent(event)" />
          </div>
        </li>
      </ul>
      <!-- Edit Event -->
      <!-- <b-modal :active.sync="targeventedit"
        has-modal-card
        trap-focus
        aria-role="dialog"
        aria-modal>
        <div class="modal-card">
          <header class="modal-card-head">EventEditor</header>
          <section class="modal-card-body"></section>
          <foooter class="modal-card-foot"></foooter>
        </div>
      </b-modal>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementWorkshop, StringListWorkshop } from "@/components/workshops";
import { Encounter, EncounterEvent } from "@/types";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "encounter-workshop",
  components: {
    ElementWorkshop,
    ElementList,
    StringListWorkshop
  }
})
export default class EncounterWorkshop extends Vue {
  @Prop()
  element!: Encounter;

  newcondition?: string = undefined;
  newevent?: string = undefined;

  eventedit: boolean = false;
  areaedit: boolean = false;
  castedit: boolean = false;

  /* targeventedit: boolean = false;
  targetevent?: EncounterEvent = undefined; */

  update() {
    this.$emit("update:element", this.element);
  }

  addEvent() {
    if (this.newcondition && this.newevent) {
      this.element.events.push(
        new EncounterEvent(this.newcondition, this.newevent)
      );
      this.update();
    }
  }

  updateEvent(event: EncounterEvent) {
    this.element.events = this.element.events.map(e =>
      e.id === event.id ? event : e
    );
  }

  editEvent(event: EncounterEvent) {}

  deleteEvent(event: EncounterEvent) {
    this.element.events = this.element.events.filter(
      e => e.id !== event.id
    );
  }
}
</script>