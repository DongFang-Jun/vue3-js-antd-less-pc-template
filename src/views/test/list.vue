<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function enterDetail() {
  router.push({ name: "TestDetail" });
}
</script>

<template>
  <div class="container">
    <a-button type="primary" @click="enterDetail">我是列表，前往详情</a-button>
  </div>
</template>

<style scoped lang="less"></style>
