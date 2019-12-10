<template>
  <div class="string-list-workshop">
    <h2 class="title is-2">
      {{ title }}
      <b-button
        class="is-text is-pulled-right"
        :icon-left="itemedit ? 'cancel' : 'pencil'"
        @click="itemedit = !itemedit"
      />
    </h2>
    <br />
    <div v-if="itemedit">
      <b-field>
        <b-input v-model="newitem" />
        <b-button class="is-text" icon-left="plus" @click="add()" />
      </b-field>
    </div>
    <dl class="items">
      <li class="title is-2" v-for="(item, index) in list" :key="index">
        {{ item }}
        <b-button
        outlined
          class="is-danger is-small is-pulled-right"
          v-if="itemedit"
          icon-left="minus"
          @click="remove(index)"
        />
      </li>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "string-list-workshop"
})
export default class StringListWorkshop extends Vue {
  @Prop()
  title!: string;
  @Prop()
  list!: string[];

  newitem: string = "";
  itemedit: boolean = false;

  update() {
    this.$emit("update:list", this.list);
  }

  remove(index: number) {
    this.list.splice(index, 1);
    this.update();
  }

  add() {
    if (this.newitem !== "") {
      this.list.push(this.newitem);
      this.newitem = "";
      this.update();
    }
  }
}
</script>