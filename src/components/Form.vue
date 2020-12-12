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
        <el-col>
          <el-form-item label="Цвет фона" prop="style.background-color">
            <el-input
                placeholder="#000000 или rgb(0, 0, 0)"
                v-model="form.style['background-color']"></el-input>
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
              @click.prevent="submit(btn.format)"
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
          action: this.saveToPng,
          format: 'PNG',
          icon: 'el-icon-download'
        },
        {
          text: 'Скопировать html-разметку в буфер обмена',
          action: this.copyToHTML,
          format: 'HTML',
          icon: 'el-icon-edit-outline'
        }, {
          text: 'Скопировать JSON-конфигурацию в буфер обмена',
          action: this.copyToJSON,
          format: 'JSON',
          icon: 'el-icon-s-operation'
        }
      ],
      rules: {
        text: [
          { required: true, validator: this.validateText, trigger: 'blur' }
        ],
        'style.height': [
          { required: true, validator: this.validateNumber, trigger: 'blur' }
        ],
        'style.width': [
          { required: true, validator: this.validateNumber, trigger: 'blur' }
        ],
        'style.background-color': [
          { required: true, validator: this.validateColor, trigger: 'blur' }
        ],
        'style.background-image': [
          { required: false, validator: this.validateImage, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.fillForm()
  },
  computed: {
    ...mapState({
      banner: state => state.banner
    })
  },
  methods: {
    ...mapActions({
      setBannerProp: 'banner/setBannerProp',
      resetBanner: 'banner/resetBanner',
    }),

    fillForm() {
      this.form = cloneDeep(this.banner)
    },

    resetForm() {
      this.resetBanner()
      this.fillForm()
    },

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
      if (value < 100 || value > 600) {
        return callback(new Error('Введите значение от 100px до 600px'))
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

    validateImage(rule, value, callback) {
      if (value === '') {
        this.setBannerProp({ property: rule.field, value: value })
        return callback()
      }
      if (!regexp.GRADIENT.test(value) && !regexp.URL.test(value) && !regexp.DATA_URI.test(value)) {
        return callback(new Error('Допустимый формат: url, dataURI, linear-gradient(℃, rgba), radial-gradient(circle, rgba)'))
      }

      this.setBannerProp({ property: rule.field, value: this.formatValue(value) })
      return callback()
    },

    formatValue(value) {
      if (value.startsWith('linear-gradient') || value.startsWith('radial-gradient')) {
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

    },
    saveToPng() {
      console.log('save to png')
    },
    copyToHTML() {
      console.log('copy to html')
    },
    copyToJSON() {
      console.log('copy to json')
    }
  }
}
</script>

<style>

.form__btns__container {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
}

.form__btn:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .form__btn {
    width: 100%;

    margin-right: 0;
    margin-left: 0;
  }
}

</style>
