<script setup>
import { usePermissionStore } from "@/stores/permission";
import { reactive } from "vue";
import SubMenu from "@/components/Menu/SubMenu.vue";
import { useRouter } from "vue-router";
import { Icon } from "@/core/icon";

const permissionStore = usePermissionStore();

const router = useRouter();

const state = reactive({
  selectedKeys: [],
});

/*菜单切换*/
function changeMenu(item) {
  router.push({ name: item.name });
}
</script>

<template>
  <div class="menu-component-container">
    <a-menu
      v-model:selectedKeys="permissionStore.selectedKeys"
      v-model:openKeys="permissionStore.openKeys"
      theme="dark"
      mode="inline"
    >
      <template v-for="item in permissionStore.routers">
        <template v-if="!item.children && item.isMenu">
          <a-menu-item :key="item.name" @click="changeMenu(item)">
            <template #icon> <Icon :icon="item.meta.icon"></Icon> </template>
            {{ item.menuName }}
          </a-menu-item>
        </template>
        <template v-if="item.children && item.isMenu">
          <sub-menu :key="item.name" :menuInfo="item"></sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<style scoped lang="less"></style>
