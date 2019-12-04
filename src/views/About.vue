<template>
  <section class="container page has-text-centered">
    <h1 class="title is-1">Welcome to Adventure Generator</h1>
    <p class="subtitle">A tool to help Game Masters craft and run adventures</p>
    <br />
    <div class="columns">
      <div class="column is-half">
        <b-button icon-left="book" size="is-large" expanded rounded>New Adventure</b-button>
      </div>
      <div class="column is-half">
        <b-button icon-left="earth" size="is-large" expanded rounded>New World</b-button>
      </div>
    </div>
    <b-button icon-left="eraser" size="is-large" expanded rounded @click="erase()">Erase All</b-button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  erase() {
    this.$store.dispatch("eraseStorage");
  }
}
</script>