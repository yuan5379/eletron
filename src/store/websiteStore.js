import { defineStore } from 'pinia'
import store from 'store2'
import _ from 'lodash'

const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    websites: []
  }),
  actions: {
  add(item) {
    if (_.find(this.websites, { url: item.url })) {
      myApi.alert('此网站已经被添加')
    } else {
      this.websites.unshift(item)
      store('websites', this.websites)
    }
  },

  init() {
    this.websites = store.get('websites') ? store.get('websites') : []
  },

  deleteItem(url) {
    // this.websites = _.dropWhile(this.websites, { url })
    this.websites = this.websites.filter((value) => {
      return value.url !== url
    })
    store('websites', this.websites)
  }
},

  getters: {
  find() {
    return (keywords) => {
      if (keywords === '') {
        return this.websites
      } else {
        const result = _.filter(this.websites, (item) => {
          let partten = new RegExp(keywords, 'i')
          return partten.test(item.title)
        })
        return result
      }
    }
  }
}
})

export default useWebsiteStore