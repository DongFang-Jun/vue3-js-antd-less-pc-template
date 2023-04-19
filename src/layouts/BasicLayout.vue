<script setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  SlackCircleFilled,
  PoweroffOutlined,
} from "@ant-design/icons-vue";
import { reactive } from "vue";
import Menu from "@/components/Menu/Menu.vue";
import { useRouter } from "vue-router";
import { usePermissionStore } from "@/stores/permission";
import { getLocalStorage } from "@/utils/util";
import { STORAGE_KEY } from "@/config/config";

const router = useRouter();
const permissionStore = usePermissionStore();

const state = reactive({
  collapsed: false,
  selectedKeys: [],
  placement: "bottom",
  userInfo: getLocalStorage(STORAGE_KEY.userInfo)
    ? JSON.parse(getLocalStorage(STORAGE_KEY.userInfo))
    : {},
});

/*退出登录*/
function loginOut() {
  permissionStore.setLoginOut();
  router.push({ name: "Login" });
}
</script>

<template>
  <div class="home-container">
    <a-layout>
      <a-layout-sider
        v-model:collapsed="state.collapsed"
        :trigger="null"
        collapsible
        class="layout-slider"
        width="250"
      >
        <div class="logo">八音盒网络</div>
        <Menu></Menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header class="layout-header">
          <section class="layout-header-left">
            <menu-unfold-outlined
              v-if="state.collapsed"
              class="trigger"
              @click="() => (state.collapsed = !state.collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (state.collapsed = !state.collapsed)"
            />
          </section>
          <a-dropdown :placement="state.placement">
            <section class="layout-header-right">
              <SlackCircleFilled style="font-size: 20px; color: #fff" />
              <span class="user-name">{{
                state.userInfo.email || "用户昵称"
              }}</span>
              <DownOutlined style="color: #fff" />
            </section>
            <template #overlay>
              <a-menu>
                <a-menu-item class="dropdown-item" @click="loginOut">
                  <PoweroffOutlined />
                  <span class="login-out-text">退出登录</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content class="layout-content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped lang="less">
.home-container {
  height: 100%;
  .layout-slider {
    height: 100vh;
    background-color: var(--primaryColor);
    .logo {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 600;
      background-color: var(--secColor);
    }
  }
  .layout-header {
    background: var(--primaryColor);
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    line-height: 52px;
    .layout-header-left {
      .trigger {
        font-size: 16px;
        color: #fff;
      }
    }
    .layout-header-right {
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      .user-name {
        font-size: 16px;
        margin: 0 8px;
        color: #fff;
      }
    }
    .layout-header-right:hover {
      background-color: var(--activeColor);
    }
  }
  .layout-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
.dropdown-item {
  display: flex;
  align-items: center;
  .login-out-text {
    font-size: 14px;
    margin-left: 8px;
  }
}
</style>
