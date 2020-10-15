<template>
  <div>
    <div class="web-login">
      <div class="logo">
        <img
          src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
        />
      </div>
      <div class="login-form">
        <div>
          <form>
            <div class="form-group">
              <input
                type="tel"
                maxlength="13"
                placeholder="手机号"
                class="input-control"
              />
              <div
                class="getSmsCode sms-code disable"
                style="position: absolute; right: 0px; top: 0px;"
              >
                获取验证码
              </div>
            </div>
            <div class="errorTip" style="display: none;"></div>
            <!---->
            <div class="errorTip" style="display: none;"></div>
            <div class="form-group">
              <input placeholder="验证码" class="input-control" />
            </div>
            <!---->
            <!---->
            <div class="submit login-btn"><span>登录</span></div>
          </form>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.disable {
  color: #bdc0c5;
}
.web-login {
  font-size: 15px;
  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }
  .login-form {
    width: 100%;
    position: relative;
    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
    }
    .getSmsCode {
      font-size: 13px;
    }
    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      border-bottom: 1px solid #ededed;
      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
    }
    .errorTip {
      text-align: left;
      color: #ff5f16;
      width: 100%;
      line-height: 11px;
      margin-left: 25px;
      font-size: 11px;
      margin-top: 7px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      dataList: [],
      indexList: [],
      height: 0,
      bs: null,
    };
  },
  //进入去掉底部道航
  created() {
    this.eventBus.$emit("footernav", false);
  },
  //出来的时候显示道航
  beforDestroy() {
    this.eventBus.$emit("footernav", true);
  },
};
</script>
