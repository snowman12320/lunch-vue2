<template>
  <div>
    <li class="main-title" @click="toggleCollapse">
      <span>
        <slot name="title">預設標題</slot>
      </span>
      <i class="fa fa-caret-down" aria-hidden="true" :class="{ i_rotate: isOpen }"></i>
    </li>
    <collapse v-model="isOpen" :class="{ isOpen: isOpen }">
      <slot></slot>
    </collapse>
  </div>
</template>

<script>
export default {
  name: 'CommonCollapse',
  props: {
    isOpenProps: {
      type: Boolean
    }
  },
  created () {
    console.clear()
  },
  data () {
    return {
      isOpen: true
    }
  },
  mounted () {
    this.isOpen = this.isOpenProps
  },
  methods: {
    toggleCollapse () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  background-color: #3c8dbc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  color: white;

  span {
    padding: 12px 5px 12px 15px;
    display: block;
    font-size: 16px;
  }
  i {
    transform: rotate(0deg);
    transition: all 300ms;
  }

  .i_rotate {
    transform: rotate(-180deg);
  }
}

::v-deep.main-title + .isOpen {
  display: block;
  padding: 12px 5px 12px 15px;
  transition: all 300ms;
}
::v-deep.main-title + div {
  padding: 12px 5px 12px 15px;
  display: none;
}
</style>
