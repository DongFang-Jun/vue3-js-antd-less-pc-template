<script setup>
import { useRouter } from "vue-router";
import { Icon } from "@/core/icon";

defineProps(["menuInfo"]);

const router = useRouter();

/*菜单切换*/
function changeMenu(item) {
  router.push({ name: item.name });
}
</script>

<template>
  <a-sub-menu :key="menuInfo.name">
    <template #icon> <Icon :icon="menuInfo.meta.icon"></Icon></template>

    <template #title>{{ menuInfo.menuName }}</template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children && item.isMenu">
        <a-menu-item :key="item.name" @click="changeMenu(item)">
          <template #icon> <Icon :icon="item.meta.icon"></Icon> </template>
          {{ item.menuName }}
        </a-menu-item>
      </template>
      <template v-if="item.children && item.isMenu">
        <sub-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>

<style scoped lang="less"></style>
