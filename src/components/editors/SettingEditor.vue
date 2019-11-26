<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Setting } from '@/types';

@Component
export default class SettingEditor extends Vue {
  @Prop()
  subject!: Setting;
}
</script>

<style lang="scss">

</style>