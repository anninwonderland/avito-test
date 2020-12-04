<template>
  <div v-if="form && Object.keys(form).length != 0">
    <el-form :model="form" :rules="rules" ref="form">
      <el-row>
        <el-col>
          <el-form-item label="Текст" prop="text">
            <el-input
                type="textarea"
                :rows="2"
                placeholder="Текст баннера"
                v-model="form.text"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="Высота (px)" prop="size.height">
            <el-input
                placeholder="240"
                v-model="form.size.height"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="Ширина (px)" prop="size.width">
            <el-input
                placeholder="360"
                v-model="form.size.width"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Form',
  data() {
    return {
      form: null,
      rules: {
        text: [
          { required: true, message: 'Это обязательное поле', trigger: 'blur' },
        ],
        'size.height': [
          { required: true, message: 'Это обязательное поле', trigger: 'blur' },
          { type: 'number', message: 'Введите число'},
          { min: 100, max: 1000, message: 'Высота баннера – от 100px до 1000px', trigger: 'blur' }
        ],
        'size.width': [
          { required: true, message: 'Это обязательное поле', trigger: 'blur' },
          { type: 'number', message: 'Введите число'},
          { min: 60, max: 600, message: 'Ширина баннера – от 60px до 600px', trigger: 'blur' }
        ],
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
    })
  }
}
</script>

<style scoped>

</style>
