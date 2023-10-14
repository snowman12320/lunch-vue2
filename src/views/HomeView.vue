<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <CommonCollapse :isOpenProps="false">
      <template #title> 客服案件紀錄 </template>
      <template>
        <li>
          <i class="fa fa-address-book" />
          客服對象管理
        </li>
        <li>
          <i class="fa fa-list-ol"></i>
          問題類別管理
        </li>
      </template>
    </CommonCollapse>
    <CommonCollapse :isOpenProps="false">
      <template #title> 客服案件紀錄 2</template>
      <template>
        <li>
          <i class="fa fa-address-book" />
          客服對象管理
        </li>
        <li>
          <i class="fa fa-list-ol"></i>
          問題類別管理
        </li>
      </template>
    </CommonCollapse>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonCollapse from '@/components/CommonCollapse.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    CommonCollapse
  }
}
</script>
