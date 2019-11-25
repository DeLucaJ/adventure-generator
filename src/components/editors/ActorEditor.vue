<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Actor } from '@/types';

@Component ({})
export default class ActorEditor extends Vue {
  @Prop()
  actor!: Actor;
}
</script>

<style lang="scss">

</style>