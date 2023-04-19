<script setup>
import { useRouter } from "vue-router";
import { testApi } from "@/apis/test/test";

const router = useRouter();
function testTap() {
  console.log(router.getRoutes());
}

/*测试接口*/
function axiosTest() {
  testApi({ start: 10 }).then((res) => {
    console.log(res);
  });
}
axiosTest();
</script>

<template>
  <div class="container">
    <a-button type="primary" @click="testTap">测试</a-button>
  </div>
</template>

<style scoped lang="less"></style>
