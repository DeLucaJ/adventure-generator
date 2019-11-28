<template>
  <section class="hero is-black">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Adventure Generator
        </h1>
        <h2 class="subtitle">
          <em>By Joseph DeLuca</em>
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container" id="nav">
        <b-navbar>
          <template slot='start'>
            <b-navbar-item tag="router-link" :to="{ path: '/'}">Home</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/adventure-List'}">Adventures</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/adventure-List'}">Worlds</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/viewer'}">Viewer</b-navbar-item>
          </template>
        </b-navbar>
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
