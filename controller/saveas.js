const { Menu, dialog } = require('electron')
const got = require('got').default
const path = require('path')
const imageType = require('image-type')
const randomstring = require('randomstring')
const fs = require('fs')

const saveas = async (srcUrl) => {
  if (srcUrl) {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '图片另存为...',
        click: () => {
          got.get(srcUrl).then(async (response) => {
            const chunk = Buffer.from(response.rawBody)
            
            const imgType = imageType(chunk)

            const { filePath, canceled } = await dialog.showSaveDialog({
              title: '图片另存为',
              defaultPath: path.resolve(__dirname, '../public/uploads/' + randomstring.generate(10) + '.' + imgType.ext)
            })
            if (!canceled) {
              fs.writeFileSync(filePath, chunk)
            }
          }).catch((e)=>{})
        },
        accelerator: 'CommandOrControl+S'
      }
    ])

    contextMenu.popup()
  }
}

module.exports = saveas