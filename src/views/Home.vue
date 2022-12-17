<script setup>
  import { onMounted, ref } from 'vue'
  import SearchBar from './SearchBar.vue'
  import Dialog from './Dialog.vue'
  import List from './list/List.vue'

  const searchbarRef = ref(null)

  const cb = () => {
    searchbarRef.value.handleClick()
  }

  onMounted(async () => {
    myApi.openDialog()

    // 在桥里定义监听主进程的on-renderer-event事件
    myApi.onRendererEvent(cb)
  })
</script>

<template>
  <main>
    <SearchBar ref="searchbarRef"></SearchBar>
    <teleport to="body">
      <Dialog></Dialog>
    </teleport>
    <List></List>
  </main>
</template>