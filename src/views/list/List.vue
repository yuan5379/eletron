<script setup>
  import useWebsites from './useWebsites'
  import useIndex from './useIndex'

  const { websiteStore, keywords } = useWebsites()
  const { currentIndex, handleItemClick } = useIndex()

  const handleDelClick = (ws) => {
    websiteStore.deleteItem(ws.url)
    currentIndex.value = 0
  }
</script>

<template>
  <div>
    <p id="no-item" v-if="websiteStore.find(keywords).length <= 0">暂无数据.</p>
    <div id="items" v-else>
      <div 
        class="read-item"
        v-for="ws, i in websiteStore.find(keywords)"
        :class="{selected: currentIndex === i}"
        @click="handleItemClick(i, ws.url)"
      >
        <img :src="ws.screenshot" :alt="ws.title">
        <h2>{{ws.title}}</h2>
        <button @click.stop="handleDelClick(ws)"> x </button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
#no-item
  font-weight bold
  color silver
  text-align center
  width 100%
  position absolute
  top 100px
  z-index -1

#items
  .read-item
    display flex
    align-items center
    align-content center
    border-bottom lightgray 2px solid
    background #fafafa
    border-left 10px solid lightgray
    -webkit-user-select none
    position relative
    padding 10px
    img
      width 20%
      margin-right 25px
      border solid 1px #ccc
    &:hover
      background #eee
    &:hover button
      display inline-block
    &.selected
      border-left-color dodgerblue
    button
      position absolute
      display none
      right 10px
      top 10px
      width 30px
      height 30px
      background #f44336
      border none
      border-radius 50%
      color white
      text-align center
      font-size 16px
      cursor pointer
</style>
