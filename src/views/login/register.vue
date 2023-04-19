<script setup>
import Register from "@/components/User/Register.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const router = useRouter();

const state = reactive({
  buttonLoading: false,
});

/*注册*/
function registerEmit() {
  state.buttonLoading = true;
  setTimeout(() => {
    message.success("注册成功");
    state.buttonLoading = false;
    router.push({ name: "Login" });
  }, 800);
}

/*返回登入*/
function backLoginEmit() {
  router.push({ name: "Login" });
}
</script>

<template>
  <Register
    :buttonLoading="state.buttonLoading"
    @registerEmit="registerEmit"
    @backLoginEmit="backLoginEmit"
  ></Register>
</template>

<style scoped lang="less"></style>
