<template>
  <div class="element-block">
    <h1 class="title">
      {{ element.title }}
      <b-button class="is-pulled-right" type="is-warning" icon-left="pencil" @click="edit()" />
    </h1>
    <hr />
    <p>{{ element.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Element } from "@/types";

@Component({
  name: "element-block"
})
export default class ElementBlock extends Vue {
  @Prop()
  element!: Element;

  edit() { 
    this.$store.dispatch("setEditing", this.element).then(() => {
      if (this.$route.path !== "/editor") {
        this.$router.push("/editor");
      }
    });
  }
}
</script>