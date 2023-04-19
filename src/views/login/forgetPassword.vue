<script setup lang="ts">
import ForgetPassword from "../../components/User/ForgetPassword.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();

const state = reactive({});

/*返回登入*/
function backLoginEmit() {
  router.push({ name: "Login" });
}

/*重置密码*/
function resetPasswordEmit() {
  console.log("重置密码");
}
</script>

<template>
  <ForgetPassword
    @backLoginEmit="backLoginEmit"
    @resetPasswordEmit="resetPasswordEmit"
  ></ForgetPassword>
</template>

<style scoped lang="less"></style>
