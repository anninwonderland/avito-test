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
                placeholder="240"
                v-model.number="form.style.height"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="Ширина (px)" prop="style.width">
            <el-input
                placeholder="360"
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
                placeholder="url, dataURI или linear-gradient"
                v-model="form.style['background-image']"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

const hexRegExp = new RegExp('^#[0-9a-f]{3,6}$', 'i')
const rgbRegExp = new RegExp('^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$', 'i')
const gradientRegExp = new RegExp('^#[0-9a-f]{3,6}$', 'i')

export default {
  name: 'Form',
  data() {
    return {
      form: null,
      rules: {
        text: [
          { required: true, message: 'Это обязательное поле', trigger: 'blur' }
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
          { validator: this.validateImage, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.banner))
  },
  computed: {
    ...mapState({
      banner: state => state.banner
    })
  },
  methods: {
    ...mapActions({
      setBannerProp: 'banner/setBannerProp',
    }),
    validateNumber: (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Это обязательное поле'))
      } else if (value != parseInt(value)) {
        callback(new Error('Введите целое число'))
      } else if (value < 100 || value > 600) {
        callback(new Error('Введите значение от 100px до 600px'))
      } else {
        callback()
      }
    },
    validateColor: (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Это обязательное поле'))
      } else if (!hexRegExp.test(value) && !rgbRegExp.test(value)) {
        callback(new Error('Допустимый формат: RGB / HEX'))
      } else {
        callback()
      }
    },
    validateImage: (rule, value, callback) => {
      if (!gradientRegExp.test(value)) {
        callback(new Error('Допустимый формат: url, dataURI или linear-gradient'))
      } else {
        callback()
      }
    },
  }
}
</script>

<style scoped>

</style>
