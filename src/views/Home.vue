<template>
  <div class="home__container">
    <el-row class="home__header">
      <el-col :span="9" :offset="2" :xs="{span: 20}">
        <h1 class="home__header__title">Конструктор баннеров</h1>
      </el-col>
      <el-col :span="10" :offset="1" :xs="{span: 20, offset: 2}">
        <p class="home__header__caption">Тестовое задание на стажировку в Авито.</p>
        <p class="home__header__caption">Сделала Ракина А.С. 😛</p>
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
    <el-row>
      <el-col :span="16" :offset="4" class="home__btns__container">
          <el-button
              v-for="(btn, index) in buttons" :key="index"
              type="primary"
              class="home__btn"
              :icon="btn.icon"
              @click.prevent="btn.action"
          >{{ btn.text }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Preview from '@/components/Preview'
import Form from '@/components/Form'

export default {
  name: "Home",
  data() {
    return {
      buttons: [
        {
          text: 'Сохранить как png',
          action: this.saveToPng,
          icon: 'el-icon-download'
        },
        {
          text: 'Скопировать html-разметку в буфер обмена',
          action: this.copyToHTML,
          icon: 'el-icon-edit-outline'
        }, {
          text: 'Скопировать JSON-конфигурацию в буфер обмена',
          action: this.copyToJSON,
          icon: 'el-icon-s-operation'
        }
      ]
    }
  },
  components: {
    Preview,
    Form
  },
  methods: {
    saveToPng() {
      console.log('save to png')
    },
    copyToHTML() {

    },
    copyToJSON() {

    }
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
  margin-top: 40px;
}

.home__btns__container {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.home__btn {
  margin-right: 12px;
  margin-bottom: 12px;
  margin-left: 0;
  padding: 10px 14px;

  display: flex;
  align-items: center;
}

.home__btn:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .home__header__caption {
    text-align: start;
  }
  .home__btn {
    width: 100%;

    margin-right: 0;
    margin-left: 0;
  }
}
</style>
