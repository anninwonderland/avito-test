<template>
  <div class="banner__container">
    <a class="banner" id="banner" :href="banner.link" target="_blank" @click.prevent="viewBanner">
      <p class="banner__text">{{ banner.text }}</p>
    </a>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Preview',
  mounted() {
    this.initBanner()
  },
  computed: {
    ...mapState({
      banner: state => state.banner
    })
  },
  methods: {
    initBanner() {
      document.getElementById('banner').style.height = this.banner.size.height + 'px'
      document.getElementById('banner').style.width = this.banner.size.width + 'px'
    },
    viewBanner() {

    }
  }
}
</script>

<style scoped>
.banner__container {
  display: flex;
  justify-content: center;
}

.banner {
  opacity: 0.2;
  background-color: #999999;
  border-radius: 2%;

  max-width: 100%;

  display: flex;
  align-items: flex-end;

  text-decoration: none;
}

.banner__text {
  font-family: Helvetica, serif;
  font-weight: bold;
  font-size: 4.5vh;
  color: #FFFFFF;
  text-align: right;
  white-space: pre-line;
  word-wrap: break-word;

  padding: 0 16px;
  margin: 24px 0;
  width: calc(100% - 24px);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

</style>
