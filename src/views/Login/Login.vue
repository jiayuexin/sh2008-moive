<template>
    <div class="login">
        <el-container>
            <div class="logo">
                <img
                    src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
                />
            </div>
            <el-main>
                <!-- 表单 -->
                <el-form :rules="rules" :model="formData" ref="formData">
                    <el-form-item label="手机号" prop="mobile">
                        <el-input
                            placeholder="请输入手机号"
                            v-model="formData.mobile"
                            maxlength="11"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            type="password"
                            v-model="formData.password"
                            placeholder="请输入密码"
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="submitForm('formData')"
                            >登 录</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-main>
            <el-footer style="height:20px">
                <div @click="back">返回首页</div>
                &copy;2020 SH-HTML5-2008
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import {userLogin} from '@/api/api'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            formData: {
                mobile: '',
                password: '',
            },
            rules: {
                mobile: [
                    {
                        required: true,
                        message: '请输入手机号',
                        trigger: 'blur',
                    },
                    {
                        pattern: /^1[3-9]\d{9}$/,
                        message: '手机格式不正确',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                    },
                    {
                        min: 6,
                        max: 20,
                        message: '长度在 6 到 20 个字符',
                        trigger: 'blur',
                    },
                ],
            },
        };
    },
    created() {
        this.eventBus.$emit('footernav', false);
    },
    beforeDestroy() {
        this.eventBus.$emit('footernav', true);
    },
    computed:{
      ...mapState(['_token'])
    },
    methods: {
        submitForm: function(formName) {
            this.$refs[formName].validate( async valid => {
                if (valid) {
                    // 获取用户名和密码进行提交（API）
                    let ret = await userLogin(this.formData)
                    if(ret.data.code == 1000){
                      // 登录成功(存储token值，然后条状页面)
                      this.$store.commit('updateToken',ret.data.data._token)
                      this.$router.push({path:'/center'})
                      if(this.$route.query.refer){
                          this.$router.push({path:encodeURI(this.$route.query.refer)})
                      }else{
                          this.$router.push({path:"/center"})
                      }
                    }else{
                      // 登录失败
                      alert(ret.data.info)
                    }
                }
            });
        },
        back:function(){
          this.$router.push({path:'/film'})
        }
    },
};
</script>

<style lang="scss" scoped>
.login {
    .logo {
        margin: 79px auto 40px;
        text-align: center;
        height: 60px;
        line-height: 60px;

        img {
            height: 60px;
        }
    }

    .el-container {
        width: 80%;
        margin-left: 40px;

        .el-form {
            .el-button {
                font-size: 16px;
                margin: 70px 0 70px 0;
                border-radius: 7px;
                text-align: center;
                background-color: #ff5f16;
                width: 100%;
                height: 44px;
                color: #fff;
                border: none;
            }
        }

        .el-header {
            font-size: 23px;
        }

        .el-footer {
            font-size: 10px;
            color: #939497;
            text-align: center;
        }
    }
}
</style>
