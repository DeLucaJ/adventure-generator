<template>
  <div class="string-list-workshop">
    <b-button
      class="is-text"
      :icon-left="itemedit ? 'cancel' : 'pencil'"
      @click="itemedit = !itemedit"
    />
    <br />
    <div :class="{ active: itemedit }">
      <b-field v-if="newitem">
        <b-input v-model="newitem" />
        <b-button class="is-text" icon-left="plus" @click="add()" />
      </b-field>
    </div>
    <ul class="items">
      <li v-for="item in list" :key="item">
        {{ item }}
        <b-button
          class="is-text"
          :class="{ active: itemedit }"
          icon-left="minus"
          @click="remove(item)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "string-list-workshop"
})
export default class StringListWorkshop extends Vue {
  @Prop()
  list!: string[];

  newitem: string = "";
  itemedit: boolean = false;

  update() {
    this.$emit("update:list", this.list);
  }

  remove(item: string) {
    this.list = this.list.filter(s => s !== item);
    this.update();
  }

  add() {
    if (typeof this.newitem !== typeof undefined) {
      this.list.push(this.newitem as string);
      this.newitem = "";
      this.update();
    }
  }
}
</script>