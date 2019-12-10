<template>
  <div class="element-workshop">
    <h1 class="title">
      {{ element.title }}
      <div class="buttons has-addons is-pulled-right">
        <b-button type="is-warning" icon-left="content-save" @click="update()" />
        <b-button type="is-warning" icon-left="eye" @click="view()" />
      </div>
    </h1>
    <hr />
    <b-field label="Name" :label-position="labelpos">
      <b-input v-model="element.title" @input="update()" />
    </b-field>
    <b-field label="Description" :label-position="labelpos">
      <b-input v-model="element.description" type="textarea" @input="update()" />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Element } from "@/types";

@Component({
  name: "element-workshop"
})
export default class ElementWorkshop extends Vue {
  @Prop()
  element!: Element;

  labelpos: string = "on-border";

  view() {
    this.$store.dispatch("setViewing", Element.meta(this.element)).then(() => {
      if (this.$route.path !== "/viewer") {
        this.$router.push("/viewer");
      }
    });
  }

  update() {
    this.$store.dispatch("saveElement", this.element).then(() => {
      this.$emit("update:element", this.element);
    });
  }

  delete() {
    this.$store
      .dispatch("removeElement", Element.key(this.element))
      .then(() => {
        this.$emit("delete:element", Element.meta(this.element));
        this.$router.push("/about");
      });
  }
}
</script>