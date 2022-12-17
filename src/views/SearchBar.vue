<script setup>
  import { inject, watch } from 'vue'
  import _ from 'lodash'

  // const props = defineProps(['action'])
  // const emits = defineEmits(['update:act'])

  const { setIsShow } = inject('dialog-visible')
  const { setKeywords } = inject('searchbar-keywords')

  const { setUrl } = inject('dialog-url')

  const handleClick = () => {
    setIsShow(true)
    setUrl('')
  }

  // 函数防抖动
  const search = _.debounce((e) => {
    setKeywords(e.target.value)
  }, 500)

  // const search = (e) => {
  //   setKeywords(e.target.value)
  // }

  // watch(
  //   () => props.action,
  //   (action) => {
  //     if (action === 'add') {
  //       handleClick()
  //       emits('update:act', '')
  //     }
  //   }
  // )

  defineExpose({
    handleClick
  })

</script>

<template>
  <div class="search-container">
    <div class="button" @click="handleClick">+</div>
    <div class="input">
      <input 
        type="text"
        placeholder="请输入关键字..."
        @keyup="search"
      >
    </div>
  </div>
</template>

<style lang="stylus">
div.search-container
  height 60px
  background #d3d3d3
  display flex
  align-items center
  justify-content center
  padding-left 10px
  .button
    width 40px
    height 40px
    background-color #1e90ff
    padding-left 0
    border-radius 5px
    font-size 30px
    font-weight bold
    color #fff
    text-align center
    cursor default
  .input
    flex 1
    height 36px
    padding 0 10px
    input
      height 100%
      width 100%
      outline none
      border solid 1px #ccc
      border-radius 5px
      padding 0 10px
</style>
