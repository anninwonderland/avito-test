
const RGBA_STR = 'rgba?\\(((25[0-5]|2[0-4]\\d|1\\d{1,2}|\\d\\d?)\\s*,\\s*?){2}(25[0-5]|2[0-4]\\d|1\\d{1,2}|\\d\\d?)\\s*,?\\s*([01]\\.?\\d*?)?\\)'

const HEX = new RegExp('^#[0-9a-f]{3,6}$', 'i')
const RGBA = new RegExp(`^${RGBA_STR}$`, 'i')
const GRADIENT = new RegExp(`^linear-gradient\\(([0-9]*deg)(\\s*,\\s*?${RGBA_STR})*\\)$`, 'i')
const URL = new RegExp('^((https?|ftp|file):\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$', 'i')
const DATA_URI = new RegExp('^data:([a-z]+\\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&\',()*+;=\\-._~:@\\/?%\\s]*)\\s*$', 'i')

export default {
    HEX,
    RGBA,
    GRADIENT,
    URL,
    DATA_URI
}