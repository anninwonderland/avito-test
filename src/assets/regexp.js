
const RGBA_STR = 'rgba?\\(((25[0-5]|2[0-4]\\d|1\\d{1,2}|\\d\\d?)\\s*,\\s*?){2}(25[0-5]|2[0-4]\\d|1\\d{1,2}|\\d\\d?)\\s*,?\\s*([01]\\.?\\d*?)?\\)'

const HEX = new RegExp('^#[0-9a-f]{3,6}$', 'i')
const RGBA = new RegExp(`^${RGBA_STR}$`, 'i')
const GRADIENT = new RegExp(`^linear-gradient\\(([0-9]*deg)(\\s*,\\s*?${RGBA_STR})*\\)$`, 'i')


export default {
    HEX,
    RGBA,
    GRADIENT,
}
