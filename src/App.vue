<script setup>
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

themeStore.changeTheme();
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  height: 100%;
}
</style>
