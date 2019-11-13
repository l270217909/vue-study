var Non = {

    template: "<div claaa='sy'><h1>欢迎来到Lword开发学习</h1><from><p>用户名：<input type='text'></p><p>密&nbsp;&nbsp;码：<input type='text'></p></from></div>"
}
var Jqu = {
    template: '<div class="top">jqu</div>'
}
var Boot = {
    template: '<div class="bot"><h1>欢迎使用Bootstarp插件</h1><ul><li>十二栅格系统</li><li>banner</li><li>按钮样式</li><li>CSS 布局样式</li></ul></div>'
}
var Esay = {
    template: '<h1>Hello Esay-Ui</h1>'
}
var Vuejs = {
    template: '<p>欢迎来到Vue的世界</p>'
}


var routes = [
    { path: '/non', component: Non, },
    { path: '/jqu', component: Jqu },
    { path: '/boot', component: Boot },
    { path: '/esay', component: Esay },
    { path: '/vue', component: Vuejs },
]
var router = new VueRouter({
    routes
})
var app = new Vue({
    router
}).$mount('#app')