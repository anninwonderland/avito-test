<template>
  <div class="home__container">
    <el-row class="home__header" :gutter="20">
      <el-col :span="10" :offset="2" :xs="{span: 20}">
        <h1 class="home__header__title">Конструктор баннеров</h1>
      </el-col>
      <el-col :span="10" :xs="{span: 20, offset: 2}">
        <p class="home__header__caption">Тестовое задание на стажировку в Авито.</p>
        <p class="home__header__caption">Сделала Ракина А.С. :)</p>
      </el-col>
    </el-row>

    <el-row class="home__main">
      <el-col :span="10" :offset="2" :xs="{span: 20}">
        <Preview />
      </el-col>
      <el-col :span="10" :xs="{span: 20, offset: 2}">
        <Form />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Preview from "@/components/Preview";
import Form from '@/components/Form';

export default {
name: "Home",
  components: {
    Preview,
    Form
  }
}
</script>

<style scoped>

.home__container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home__header {
  background-color: #EBEBEB;

  margin: 0;
  padding: 25px 0;
}

.home__header__title {
  font-family: Helvetica, serif;
  font-size: 24px;

  margin: 10px 0;
}

.home__header__caption {
  font-family: Helvetica, serif;
  font-size: 14px;
  line-height: 16px;
  text-align: end;

  margin: 4px 0;
}

.home__main {

}

@media (max-width: 768px) {
  .home__header__caption {
    text-align: start;
  }
}
</style>
