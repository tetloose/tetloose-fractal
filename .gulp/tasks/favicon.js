import { generateFavicon } from 'gulp-real-favicon'
import { favicon as config } from '../config'

const generateFavIconFunc = () => {
    return generateFavicon({
        masterPicture: config.entry,
        dest: config.output,
        iconsPath: '',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {
				design: 'raw'
			},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: config.appColor,
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: config.appColor,
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 75,
				themeColor: config.appColor
			}
		},
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
        },
        markupFile: config.jsonTemplate
    })
}

export const favicon = (cb) => {
    generateFavIconFunc()
    cb()
}
