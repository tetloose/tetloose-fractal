import { src, dest } from 'gulp'
import access from 'gulp-accessibility'
import rename from 'gulp-rename'
import { accessibility as config } from '../config.js'

const accessibilityFunc = () => {
    return src(config.entry)
        .pipe(access({
            force: true,
            accessibilityLevel: 'WCAG2AAA',
            "ignore": [
                "WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl",
                "WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.2",
                "WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.1",
            ],
            reportLevels: {
                notice: false,
                warning: false,
                error: true
            }
        }))
        .on('error', console.log)
        .pipe(access.report({
            reportType: 'txt'
        }))
        .pipe(rename({
            extname: '.txt'
        }))
        .pipe(dest(config.output));
}

export const accessibility = (cb) => {
    accessibilityFunc()
    cb()
}
