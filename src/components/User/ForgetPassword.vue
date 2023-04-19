<script setup>
import { GlobalOutlined, ReloadOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";

const emits = defineEmits(["resetPasswordEmit", "backLoginEmit"]);

const state = reactive({
  emailCodeText: "发送",
  form: {
    email: "",
    emailCode: "",
    password: "",
    confirmPassword: "",
  },
});

/*注册*/
function resetPasswordTap() {
  emits("resetPasswordEmit");
}

/*返回登入*/
function backLoginTap() {
  emits("backLoginEmit");
}
</script>

<template>
  <div class="form-main">
    <a-input v-model:value="state.form.email" placeholder="邮箱" />
    <div class="code-line">
      <a-input v-model:value="state.form.emailCode" placeholder="邮箱验证码" />
      <a-button type="primary">{{ state.emailCodeText }}</a-button>
    </div>
    <a-input v-model:value="state.form.password" placeholder="密码" />
    <a-input
      v-model:value="state.form.confirmPassword"
      placeholder="确认密码"
    />

    <a-button type="primary" block @click="resetPasswordTap">
      <template #icon>
        <ReloadOutlined />
      </template>
      <span>重置密码</span>
    </a-button>
  </div>
  <div class="form-bottom">
    <div class="form-bottom-left" @click="backLoginTap">返回登入</div>
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
    box-shadow: none;
    border: none;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    height: 38px;
    border-radius: 4px;
  }
  button {
    height: 36px;
    border-radius: 4px;
  }

  .code-line {
    display: flex;
    button {
      margin-left: 16px;
      flex-shrink: 0;
    }
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
    color: #6c757d;
    cursor: pointer;
    font-size: 14px;
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
