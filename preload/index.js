const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  let result = await ipcRenderer.invoke('on-url-event', url)
  return result
}

const alert = (msg) => {
  ipcRenderer.invoke('on-alert-event', msg)
}

const open = (url) => {
  ipcRenderer.invoke('on-open-event', url)
}

const close = () => {
  ipcRenderer.invoke('on-close-event')
}

const getFilelist = async () => {
  const filelist = await ipcRenderer.invoke('on-getfiles-event')
  return filelist
}

const openDialog = () => {
  ipcRenderer.send('on-opendialog-event')
}

const onRendererEvent = (cb) => {
  ipcRenderer.on('on-renderer-event', (e, msg) => {
    cb()
  })
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  open,
  close,
  getFilelist,
  openDialog,
  onRendererEvent
})