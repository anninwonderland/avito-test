<template>
  <div class="banner__container">
    <a id="banner" class="banner" :href="banner.link" target="_blank" @click.prevent="viewBanner">
      <p class="banner__text">{{ banner.text }}</p>
    </a>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Preview',
  mounted() {
    this.renderBanner()
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

      document.getElementById('banner').style['background-color'] = this.banner.style['background-color']
      document.getElementById('banner').style['background-image'] = this.banner.style['background-image']
    },
    viewBanner() {

    }
  }
}
</script>

<style scoped>
.banner__container {
  display: flex;
  justify-content: flex-end;

  margin-top: 40px;
}

.banner {
  border-radius: 2%;
  border: 1px solid #DCDFE6;

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
  font-size: 4.5vh;
  color: #FFFFFF;
  text-align: right;
  white-space: pre-line;
  word-wrap: break-word;

  padding: 0 ;
  margin: 24px;
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
    justify-content: center;

    margin-top: 0;
    margin-bottom: 40px;
  }
}

</style>
