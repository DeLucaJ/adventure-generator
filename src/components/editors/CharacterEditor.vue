<template>
  <div id="charater-editor">
    <header class="modal-card-head">
      Character Editor
    </header>
    <div class="modal-card-body">
      <b-field label="Title" label-position="on-border">
        <b-input v-model="subject.title"></b-input>
      </b-field>
      <b-field label="Description" label-position="on-border">
        <b-input v-model="subject.description" type="textarea"></b-input>
      </b-field>
      <header class="title is-6">
        Traits
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Trait</b-button>
      </header>
      <ul>
        <li v-for="t in subject.traits" :key="t">{{ t }}</li>
      </ul>
      <header class="title is-6">
        Mannerisms
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Mannerism</b-button>
      </header>
      <ul>
        <li v-for="m in subject.mannerisms" :key="m">{{ m }}</li>
      </ul>
      <header class="title is-6">
        Ideals
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Ideal</b-button>
      </header>
      <ul>
        <li v-for="i in subject.ideals" :key="i">{{ i }}</li>
      </ul>
      <header class="title is-6">
        Bonds
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Bond</b-button>
      </header>
      <ul>
        <li v-for="b in subject.bonds" :key="b">{{ b }}</li>
      </ul>
      <header class="title is-6">
        Flaws
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Flaw</b-button>
      </header>
      <ul>
        <li v-for="f in subject.flaws" :key="f">{{ f }}</li>
      </ul>
      <header class="title is-6">
        Secrets
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Secret</b-button>
      </header>
      <ul>
        <li v-for="s in subject.secrets" :key="s">{{ s }}</li>
      </ul>
      <header class="title is-6">
        Goals
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Goal</b-button>
      </header>
      <ul>
        <li v-for="g in subject.goals" :key="g">{{ g }}</li>
      </ul>
      <header class="title is-6">
        Motivations
        <b-button class="is-text is-small is-pulled-right" icon-left="plus">Add Motivation</b-button>
      </header>
      <ul>
        <li v-for="m in subject.motivations" :key="m">{{ m }}</li>
      </ul>
    </div>
    <footer class="modal-card-foot">
      <b-button>Save</b-button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Character } from '@/types';

@Component
export default class CharacterEditor extends Vue {
  @Prop()
  subject!: Character;
}
</script>

<style lang="scss">

</style>