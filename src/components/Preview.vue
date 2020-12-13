<template>
  <div class="banner__container">
    <div class="banner__border">
      <a id="banner" class="banner" :href="banner.link" target="_blank">
        <p class="banner__text">{{ banner.text }}</p>
      </a>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import * as htmlToImage from 'html-to-image'

export default {
  name: 'Preview',
  mounted() {
    this.renderBanner()

    this.$root.$on('exportBanner', format => {
      this.exportAs(format)
    })
  },
  watch: {
    banner: {
      deep: true,
      handler: 'renderBanner'
    },
  },
  computed: {
    ...mapState({
      banner: state => state.banner
    })
  },
  methods: {
    renderBanner() {
      document.getElementById('banner').style.height = this.banner.style.height + 'px'
      document.getElementById('banner').style.width = this.banner.style.width + 'px'
      document.getElementById('banner').style.color = this.banner.style.color
      document.getElementById('banner').style['background-color'] = this.banner.style['background-color']
      document.getElementById('banner').style['background-image'] = this.banner.style['background-image']
    },

    exportAs(format) {
      const node = document.getElementById('banner')

      switch (format) {
        case 'PNG':
          this.saveAsPNG(node)
          break
        case 'HTML':
          this.setInlineStyle(node)
          this.copyToClipBoard(node.outerHTML)
          break
        case 'JSON':
          this.copyToClipBoard(JSON.stringify(this.banner))
          break
        default:
          return
      }
    },

    saveAsPNG(node) {
      htmlToImage.toPng(node)
          .then(function (dataUrl) {
            return this.download(dataUrl)
          })
    },

    download(dataUrl) {
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'Banner'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },

    setInlineStyle(node) {
      if (node.tagName) {
        node.style.cssText = this.getStyleFromSheets(node).concat(node.style.cssText)
        node.childNodes.forEach(child => {
          return node.childNodes.length ? this.setInlineStyle(child) : null
        })
      }
    },

    getStyleFromSheets(node) {
      const selector = `.${node.className} `
      const componentStyles = [...document.styleSheets]
          .map(styleSheet => [...styleSheet.cssRules]
              .map(rule => rule.cssText)
              .join('\n')
          )
          .filter(sheet => sheet.includes(selector))
          .join('\n')

      const nodeStyles = componentStyles.split('\n')
          .filter(sheet => sheet.includes(selector))
          .map(styleBite => styleBite
              .replace(selector, '')
              .replace(/[{}]/g, ''))
          .filter(Boolean)
          .join('')

      return nodeStyles
    },

    copyToClipBoard(value) {
      const el = document.createElement('textarea')
      el.value = value

      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      this.$message.success('Скопировано в буфер обмена')
    }
  }
}
</script>

<style>
.banner__container {
  display: flex;
  justify-content: center;

  margin-top: 40px;
}
.banner__border {
  border-radius: 15px;
  border: 1px solid #DCDFE6;
}

.banner {
  border-radius: 15px;

  max-width: 100%;
  display: flex;
  align-items: flex-end;

  text-decoration: none;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner__text {
  font-family: Helvetica, serif;
  font-weight: bold;
  font-size: 1em;
  color: inherit;
  white-space: pre-line;
  word-wrap: break-word;

  padding: 0;
  margin: 40px 30px;
  width: calc(100% - 24px);
  max-width: calc(100% - 24px);

  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

@media (max-width: 768px) {
  .banner__container {
    margin-top: 0;
    margin-bottom: 40px;
  }
}

</style>
