<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Setting: {{ setting.title }}</h2>
      <h3 class="title is-3">Areas</h3>
      <h3 class="title is-3">Characters</h3>
      <h3 class="title is-3">Items</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Setting } from "@/types";

@Component
export default class SettingBlock extends Vue {
  @Prop({ default: new Setting() })
  setting!: Setting;
}
</script>