<template>
  <div class="home__container">
    <el-row class="home__header">
      <el-col :span="9" :offset="2" :xs="{span: 20}">
        <h1 class="home__header__title">Banner builder</h1>
      </el-col>
      <el-col :span="10" :offset="1" :xs="{span: 20, offset: 2}">
        <p class="home__header__caption">Тестовое задание на стажировку в Авито.</p>
        <p class="home__header__caption">Сделала
          <a class="home__header__link" target="_blank" href="https://github.com/anninwonderland/cv/blob/main/Rakina_cv.pdf">Ракина А.</a>
          😛</p>
      </el-col>
    </el-row>

    <el-row class="home__main">
      <el-col :span="7" :offset="4" :xs="{span: 20, offset: 2}" :sm="{span: 7, offset: 4}">
        <Preview/>
      </el-col>
      <el-col :span="8" :offset="1" :xs="{span: 20, offset: 2}" :sm="{span: 8, offset: 1}">
        <Form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Preview from '@/components/Preview'
import Form from '@/components/Form'

export default {
  name: "Home",
  components: {
    Preview,
    Form
  },
}
</script>

<style lang="scss">
@import 'src/styles/basics';

.home__container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;

  background-color: $basic-bg-color;
}

.home__header {
  margin: 0;
  padding: 25px 0;

  border-bottom: 1px solid $basic-grey-color;
}

.home__header__title {
  font-family: $basic-font-family;
  font-size: 24px;
  text-transform: uppercase;

  margin: 10px 0;
}

.home__header__caption {
  font-family: $basic-font-family;
  font-size: 14px;
  line-height: 16px;
  text-align: end;

  margin: 4px 0;
}

.home__header__link {
  color: $basic-dark-color;
  transition: color 0.2s ease;

  &:hover {
    color: $basic-accent-color;
  }
}

.home__main {
  padding: 30px 0 90px;
}

@media (max-width: $xs-screen) {
  .home__header__caption {
    text-align: start;
  }
}
</style>
