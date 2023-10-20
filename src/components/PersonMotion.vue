<template>
    <!-- //* @vueuse/motion plugin is designed for Vue 3. -->
  <div class="my-5">
    <button @click="toggleAnimation">Toggle Animation</button>
    <transition name="fade">
      <div v-if="show" class="animated-element text-white bg-black">This element will animate</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggleAnimation () {
      this.show = !this.show
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.animated-element {
  opacity: 1;
}
</style>
