<template>
  <div class="encounter-workshop">
    <element-workshop :element.sync="element" @update:element="update()" />
    <div v-if="element.area">
      <h2 class="title is-2">Areas</h2>
      <!-- Needs Single Element Viewer/Editor -->
      <br />
      <p>{{ element.area.title }}</p>
      <hr />
    </div>
    <!-- <h2 class="title is-2">Cast</h2>
    <br/>
    <element-list :canEdit="true" :list.sync="element.cast" @update:list="update()" />-->
    <hr />
    <string-list-workshop title="Objectives" :list.sync="element.objectives" @update:list="update()" />
    <hr />
    <div class="encounter-event-workshop">
      <h2 class="title is-2">
        Events
        <b-button
          class="is-text is-pulled-right"
          :icon-left="eventedit ? 'cancel' : 'pencil'"
          @click="canEditEvents()"
        />
      </h2>

      <b-field v-if="eventedit">
        <b-input v-model="newcondition" />
        <b-icon icon="arrow-right-bold" />
        <b-input v-model="newevent" />
        <b-button class="is-text" icon-left="plus" @click="addEvent()" />
      </b-field>
      <dl class="encounter-events">
        <li v-for="(event, index) in element.events" :key="index">
          <span class="has-text-weight-bold">{{ event.condition }}&nbsp;</span>
          <b-icon icon="arrow-right-bold" />
          <span class="is-italic">&nbsp;{{ event.event }}</span>
          <div class="buttons has-addons is-pulled-right" :class="{ active: eventedit }">
            <!-- <b-button icon-left="pencil" @click="editEvent(event)" /> -->
            <b-button
              v-if="eventedit"
              outlined
              size="is-small"
              type="is-danger"
              icon-left="minus"
              @click="deleteEvent(event)"
            />
          </div>
        </li>
      </dl>
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

  newcondition: string = "";
  newevent: string = "";

  eventedit: boolean = false;
  areaedit: boolean = false;
  castedit: boolean = false;

  /* targeventedit: boolean = false;
  targetevent?: EncounterEvent = undefined; */

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }

  canEditEvents() {
    this.eventedit = !this.eventedit;
  }

  addEvent() {
    if (this.newcondition !== "" && this.newevent !== "") {
      const event = new EncounterEvent(this.newcondition, this.newevent);
      // console.log(event);
      this.element.events.push(event);
      this.newcondition = "";
      this.newevent = "";
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
    this.element.events = this.element.events.filter(e => e.id !== event.id);
  }
}
</script>