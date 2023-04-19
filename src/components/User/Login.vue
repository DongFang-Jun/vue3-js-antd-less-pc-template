<script setup>
import { reactive } from "vue";
import { message } from "ant-design-vue";
import { GlobalOutlined, ExportOutlined } from "@ant-design/icons-vue";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

const props = defineProps(["buttonLoading"]);

const emits = defineEmits(["loginEmit", "registerEmit", "forgetPasswordEmit"]);

const state = reactive({
  form: {
    email: "",
    password: "",
  },
});

/*登入*/
function loginTap() {
  let verifyResult = verifyLoginParams();

  if (verifyResult) {
    message.error(verifyResult);
    return;
  }

  let verifyPasswordResult = verifyPassword();
  if (verifyPasswordResult) {
    message.error(verifyPasswordResult);
    return;
  }

  emits("loginEmit");
}

/*注册*/
function registerTap() {
  emits("registerEmit");
}

/*忘记密码*/
function forgetPasswordTap() {
  emits("forgetPasswordEmit");
}

/*校验邮箱密码是否正确*/
function verifyPassword() {
  let messageText = "";
  if (state.form.email !== loginStore.adminUserInfo.email) {
    messageText = "邮箱不存在";
  } else if (state.form.password !== loginStore.adminUserInfo.password) {
    messageText = "密码错误";
  }
  return messageText;
}

/*校验登入字段*/
function verifyLoginParams() {
  let messageText = "";
  if (!state.form.email.trim()) {
    messageText = "邮箱格式不正确";
  } else if (!state.form.password.trim()) {
    messageText = "密码格式不正确";
  }
  return messageText;
}
</script>

<template>
  <div class="form-main">
    <a-input
      v-model:value="state.form.email"
      placeholder="邮箱：admin"
      @keyup.enter="loginTap"
    />
    <a-input
      v-model:value="state.form.password"
      placeholder="密码：admin"
      @keyup.enter="loginTap"
    />

    <a-button
      type="primary"
      block
      @click="loginTap"
      @keyup.enter="loginTap"
      :loading="props.buttonLoading"
    >
      <template #icon> <ExportOutlined /></template>
      登入
    </a-button>
  </div>
  <div class="form-bottom">
    <div class="form-bottom-left">
      <div class="form-bottom-left-common" @click="registerTap">注册</div>
      <div class="form-bottom-left-line">|</div>
      <div class="form-bottom-left-common" @click="forgetPasswordTap">
        忘记密码
      </div>
    </div>
    <div class="form-bottom-right">
      <GlobalOutlined />
      <span>简体中文</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.form-main {
  padding: 0 24px;
  input {
    border: none;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    height: 38px;
    border-radius: 4px;
    box-shadow: none;
  }
  button {
    height: 36px;
    border-radius: 4px;
  }
}

.form-bottom {
  padding: 0 24px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #f8f9fa;
  .form-bottom-left {
    display: flex;
    align-items: center;
    .form-bottom-left-common {
      color: #6c757d;
      cursor: pointer;
      font-size: 14px;
    }
    .form-bottom-left-line {
      margin: 0 8px;
      color: #6c757d;
      font-size: 14px;
    }
  }
  .form-bottom-right {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 8px;
      color: #6c757d;
      font-size: 14px;
    }
  }
}
</style>
