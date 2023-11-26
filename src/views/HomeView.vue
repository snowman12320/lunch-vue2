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
    <!--  -->
    <UseIntersectionObserver></UseIntersectionObserver>
    <!--  -->
    <UseTransition></UseTransition>
    <!--  -->
<div class="image-set">
            <a class="example-image-link" href="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set1" data-title="Click the right half of the image to move forward." previewlistener="true"><img class="example-image" src="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" alt="Golden Gate Bridge with San Francisco in distance"></a>
            <a class="example-image-link" href="https://lokeshdhakar.com/projects/lightbox2/images/image-2.jpg" data-lightbox="example-set" data-title="Or press the right arrow on your keyboard." previewlistener="true"><img class="example-image" src="https://lokeshdhakar.com/projects/lightbox2/images/image-2.jpg" alt="Forest with mountains behind"></a>
            <a class="example-image-link" href="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing." previewlistener="true"><img class="example-image" src="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" alt="Bicyclist looking out over hill at ocean"></a>
            <a class="example-image-link" href="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close." previewlistener="true"><img class="example-image" src="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" alt="Small lighthouse at bottom with ocean behind"></a>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonCollapse from '@/components/CommonCollapse.vue'
import UseIntersectionObserver from '@/components/UseIntersectionObserver'
import UseTransition from '@/components/UseTransition'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    CommonCollapse,
    UseIntersectionObserver,
    UseTransition
  }
}
</script>

<style lang="scss" scoped>
  .image-set{
    display: flex;
    img{
      width: 25%;
    }
  }
</style>
