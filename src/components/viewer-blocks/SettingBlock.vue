<template>
  <div class="setting-block">
    <h2 class="title is-2">
      {{ setting.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h2>
    <p>{{ setting.description }}</p>
    <br />
    <h3 class="title is-3">Areas</h3>
    <AreaBlock v-for="area in setting.areas" v-bind:key="area.title" />
    <br />
    <h3 class="title is-3">Characters</h3>
    <CharacterBlock v-for="char in setting.characters" v-bind:key="char.title" />
    <br />
    <h3 class="title is-3">Items</h3>
    <ItemBlock v-for="item in setting.items" v-bind:key="item.title" />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Setting } from "@/types";
import {
  AreaBlock,
  CharacterBlock,
  ItemBlock
} from "@/components/viewer-blocks";

@Component({
  components: {
    AreaBlock,
    CharacterBlock,
    ItemBlock
  }
})
export default class SettingBlock extends Vue {
  @Prop()
  setting!: Setting;
}
</script>