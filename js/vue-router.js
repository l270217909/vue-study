var Non = {

    template: "<div class='sy'><h1>欢迎来到Lword开发学习</h1><p>用户名：<input type='text'></p><p>密&nbsp;&nbsp;&nbsp;码：<input type='text'></p></div>",
    beforeRouteEnter: (to, from, next) => {
        if (to.meta.auth) {
            var pwd = prompt('请输入登陆密码')
            if (pwd === 'admin') {
                next()
            } else {
                alert('请重新输入密码')
            }
        } else {
            next()
        }
    },
    beforeRouteLeave: (to, from, next) => {
        if (confirm('你确定要离开吗?')) {
            next()
        } else {
            alert('你阻止了该操作！')
        }
    }
}

var Jqu = {
    template: '<div class="top"><p>hello,这里是<span>Jquery</span></p><ul><li><button>选择器</button></li><li><button>jquery语法</button></li><li><button>插件</button></li></ul></div>'
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
var One = {
    template: '<div class="one"><img src="/img/log.png"><router-view></router-view></div>'
}


var router = new VueRouter({
    routes: [{
        path: '/one/:id',
        component: One,

        children: [
            { path: '/non', component: Non, meta: { auth: true } },
            { path: '/jqu', component: Jqu },
            { path: '/boot', component: Boot },
            { path: '/esay', component: Esay },
            { path: '/vue', component: Vuejs },
        ]
    }]
})


var app = new Vue({
    router
}).$mount('#app')