<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({});
</script>

<template>
  <div class="container">
    <div class="container-bg"></div>
    <section class="form">
      <div class="form-box">
        <p class="form-box-title">vue3+Js 模版</p>
        <p class="form-box-desc">开箱即用</p>
        <router-view></router-view>
        <div class="form-copyright">
          ©2023xxx公司 沪ICP证xxxxxx号 沪ICP备xxxxxx号
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.container {
  height: 100%;
  .container-bg {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: url("https://xn--9kqu12djx2a.net/1.jpg") no-repeat 50% 50%;
    background-size: cover;
  }
  .form {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .form-box {
      padding-top: 24px;
      max-width: 450px;
      width: 100%;
      background-color: #fff;
      border-radius: var(--borderRadius);
      font-size: 0;
      .form-box-title {
        font-size: 32px;
        color: var(--titleColor);
        text-align: center;
        margin-bottom: 0;
      }
      .form-box-desc {
        margin-bottom: 0;
        text-align: center;
        color: var(--subTitleColor);
        font-size: 14px;
        margin-bottom: 16px;
      }
      .form-copyright {
        color: var(--subTitleColor);
        background-color: var(--backgroundColor);
        font-size: 12px;
        display: inline-block;
        width: 100%;
        text-align: center;
        padding-bottom: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
