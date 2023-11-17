import fs from 'fs'
import path from 'path'

function getFileName(folderPath, targetValue) {
    const matchingFiles = []
    const folderContents = fs.readdirSync(folderPath)

    for (const item of folderContents) {
        const itemPath = path.join(folderPath, item)

        if (fs.statSync(itemPath).isFile()) {
            if (!item.includes('map') && item.startsWith(targetValue)) {
                matchingFiles.push(item)
            }
        }
    }

    return matchingFiles
}

module.exports = {
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return (arg1 === arg2) ? options.fn(this) : options.inverse(this)
        },
        ifAnd: function(arg1, arg2, options) {
            return (arg1 && arg2) ? options.fn(this) : options.inverse(this)
        },
        assets: (filename, ext) => {
            const folderPath = path.resolve(__dirname, `../../public/assets/${ext}`)
            const file = getFileName(folderPath, filename)

            return file && file.length > 0 ? `/${ext}/${file[0]}` : `/${ext}/${filename}.${ext}`
        }
    },
    partials: {
        initialStyle: 'opacity: 0',
        initialAnimation: 'u-animate-hide'
    }
}
