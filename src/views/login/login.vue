<script setup>
import { reactive } from "vue";
import Login from "@/components/User/Login.vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/stores/login";

const router = useRouter();

const loginStore = useLoginStore();

const state = reactive({
  buttonLoading: false,
});

/*登录*/
async function loginEmit() {
  state.buttonLoading = true;

  await loginStore.login();

  state.buttonLoading = false;

  // await resetRouter();
  await router.replace("/dashboard");
}

/*注册*/
function registerEmit() {
  router.push({ name: "Register" });
}

/*忘记密码*/
function forgetPasswordEmit() {
  router.push({ name: "ForgetPassword" });
}
</script>

<template>
  <Login
    :buttonLoading="state.buttonLoading"
    @loginEmit="loginEmit"
    @registerEmit="registerEmit"
    @forgetPasswordEmit="forgetPasswordEmit"
  ></Login>
</template>

<style scoped lang="less"></style>
