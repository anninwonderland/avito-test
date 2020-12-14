<template>
  <div v-if="banner && Object.keys(banner).length != 0">
    <el-form :model="form" :rules="rules" ref="form">
      <el-row>
        <el-col>
          <el-form-item label="Текст" prop="text">
            <el-input
                type="textarea"
                :rows="2"
                placeholder="Hello, world!"
                v-model="form.text"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="Высота (px)" prop="style.height">
            <el-input
                :placeholder="form.style.width * 1.33 || 240"
                v-model.number="form.style.height"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="Ширина (px)" prop="style.width">
            <el-input
                :placeholder="form.style.height * 0.75 || 360"
                v-model.number="form.style.width"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="Цвет фона" prop="style.background-color">
            <el-input
                placeholder="#000000 или rgb(0, 0, 0)"
                v-model="form.style['background-color']"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="Цвет текста" prop="style.color">
            <el-input
                placeholder="#000000 или rgb(0, 0, 0)"
                v-model="form.style.color"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="Ссылка" prop="url">
            <el-input
                placeholder="url"
                v-model="form.url"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="Принт" prop="style.background-image">
            <el-input
                type="textarea"
                :rows="2"
                placeholder="url, dataURI или gradient"
                clearable
                v-model="form.style['background-image']"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="form__btns__container">
          <el-button
              v-for="(btn, index) in buttons" :key="index"
              type="primary"
              class="form__btn"
              :icon="btn.icon"
              @click="submit(btn.format)"
          >{{ btn.text }}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import regexp from '@/assets/constants/regexp'
import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'Form',
  data() {
    return {
      form: null,
      buttons: [
        {
          text: 'Сохранить как png',
          format: 'PNG',
          icon: 'el-icon-download'
        },
        {
          text: 'Скопировать html-разметку в буфер обмена',
          format: 'HTML',
          icon: 'el-icon-edit-outline'
        }, {
          text: 'Скопировать JSON-конфигурацию в буфер обмена',
          format: 'JSON',
          icon: 'el-icon-s-operation'
        }
      ],
      rules: {
        text: [
          { required: true, validator: this.validateText, trigger: 'change' }
        ],
        'style.height': [
          { required: true, validator: this.validateNumber, trigger: 'change' }
        ],
        'style.width': [
          { required: true, validator: this.validateNumber, trigger: 'change' }
        ],
        'style.background-color': [
          { required: true, validator: this.validateColor, trigger: 'change' }
        ],
        'style.color': [
          { required: true, validator: this.validateColor, trigger: 'change' }
        ],
        url: [
          { required: false, validator: this.validateUrl, trigger: 'change' }
        ],
        'style.background-image': [
          { required: false, validator: this.validateImage, trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.form = cloneDeep(this.banner)
  },
  computed: {
    ...mapState({
      banner: state => state.banner
    })
  },
  methods: {
    ...mapActions({
      setBannerProp: 'banner/setBannerProp'
    }),

    validateText(rule, value, callback) {
      if (value === '') {
        return callback(new Error('Это обязательное поле'))
      } else {
        this.setBannerProp({ property: rule.field, value })
        return callback()
      }
    },

    validateNumber(rule, value, callback) {
      if (value === '') {
        return callback(new Error('Это обязательное поле'))
      }
      if (value != parseInt(value)) {
        return callback(new Error('Введите целое число'))
      }
      if (value < 100 || value > 400) {
        return callback(new Error('Введите значение от 100px до 400px'))
      }
      this.setBannerProp({ property: rule.field, value })
      return callback()
    },

    validateColor(rule, value, callback) {
      if (value === '') {
        return callback(new Error('Это обязательное поле'))
      }
      if (!regexp.HEX.test(value) && !regexp.RGBA.test(value)) {
        return callback(new Error('Допустимый формат: RGB(a) или HEX'))
      }
      this.setBannerProp({ property: rule.field, value })
      return callback()
    },

    validateUrl(rule, value, callback) {
      if (!regexp.URL.test(value)) {
        return callback(new Error('Допустимый формат: url'))
      }

      this.setBannerProp({ property: rule.field, value: value })
      return callback()
    },

    validateImage(rule, value, callback) {
      if (!regexp.GRADIENT.test(value) && !regexp.URL.test(value) && !regexp.DATA_URI.test(value)) {
        return callback(new Error('Допустимый формат: url, dataURI, linear-gradient(℃, rgba), radial-gradient(circle, rgba)'))
      }

      this.setBannerProp({ property: rule.field, value: this.formatValue(value) })
      return callback()
    },

    formatValue(value) {
      if (value.startsWith('linear-gradient') || value.startsWith('radial-gradient') || value.trim() == '') {
        return value
      }
      return `url(${value})`
    },

    submit(format) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$root.$emit('exportBanner', format)
        }
          return valid
      })

    }
  }
}
</script>

<style lang="scss">
@import 'src/styles/basics';

.form__btns__container {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  &:last-child {
    margin-right: 0;
  }
}


@media (max-width: $xs-screen) {
  .form__btn {
    width: 100%;

    margin-right: 0;
    margin-left: 0;
  }
}

</style>
