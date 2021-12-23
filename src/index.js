import Vue from "vue";
import App from "./app.vue";
import "./assets/styles/global.styl";

// const root = document.createElement('div');
// document.body.appendChild(root);
import $ from "jquery";
$(".col-xs-7.col-xs-offset-1.aside").css({ display: "none" });
// quora
$("#mainContent").css({ with: 1080 });

// new Vue({
//     render: (h) => h(App)
// }).$mount(root);
// 简书
$(".image-container").css({ with: "100%" });
// 掘金
// 可以使用第三方图片 如简书
let referrerDom = '<meta name="referrer" content="no-referrer" />';
$("body").append(referrerDom);

$(document).ready(function() {
  //code 简书自动展开阅读全文
  $(".ant-btn").click();
});
