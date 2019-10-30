<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Adventure Generator
        </h1>
        <h2 class="subtitle">
          By Joseph DeLuca
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  //@Prop() private msg!: string;
}
</script>