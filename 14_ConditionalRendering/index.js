
const VueApp = {
    data() {
      return {
        // with object
        awesome: false,
        ok: true,
        isShow:false,
        isHide:false,

        loginType:"username",
        inputData:"test",

        usernameinput: 1,
        emailinput: 2
      }
    },
}

const app = Vue.createApp(VueApp).mount('#conditionRendering-example')