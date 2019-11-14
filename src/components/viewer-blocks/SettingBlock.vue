<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Setting } from "@/types";

@Component
export default class SettingBlock extends Vue {
  @Prop()
  setting: Setting = new Setting();
}
</script>