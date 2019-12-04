<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <em>Adventure Generator was made by Joseph DeLuca</em>
      </p>
      <div class="buttons is-centered">
        <b-button
          tag="a"
          href="https://github.com/DeLucaJ/adventure-generator"
          target="_blank"
          class="is-text"
          size="is-large"
        >
          <b-icon icon="github-box" size="is-large" />
        </b-button>
        <b-button tag="a" href="mailto:delucaj96@gmail.com" target="_blank" class="is-text">
          <b-icon icon="email" size="is-large" />
        </b-button>
      </div>
      <b-button class="is-danger" icon-left="eraser" @click="erase()">Erase All</b-button>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {
  erase() {
    this.$store.dispatch("eraseStorage");
  }
}
</script>

