<template>
  <div class="main">
    <div class="runcode__20UZ e17b2gky2 css-ba7fuo-BaseButtonComponent-StyledRunCodeButton ery7n2v0">
      runcode__20UZ
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "app",
  data() {
    return {
      color: "#2db55d",
      textColor: "#fff",
    };
  },
  created() {},
  mounted() {
    // this.setAttribtue();
  },
  methods: {
    changeAttributeChain() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("await time");
        }, 2000);
      });
    },
    setAttribtue() {
      this.changeAttributeChain().then((res) => {
        console.log(res);
        $(
          ".runcode__20UZ.e17b2gky2.css-ba7fuo-BaseButtonComponent-StyledRunCodeButton.ery7n2v0"
        ).css({
          background: this.color,
          color: this.textColor,
          boxShadow: "inset 0px 0px 0px 1px #2db55d",
        });
        $(".submit__-6u9.css-5dhefr-BaseButtonComponent.ery7n2v0").css({
          background: this.color,
          color: this.textColor,
        });
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.runcode__20UZ .e17b2gky2 {
  width 100px
  height 100px
  background red
  color blue
}
</style>
