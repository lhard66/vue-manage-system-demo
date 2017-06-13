import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css'; // 浅绿色主题
import "babel-polyfill";

//路由权限
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') { // 如果不是跳转到登录页面则进行检测登录状态
    if (false) { // 检测未登录则跳转到登录页面	checkLogin();
      next({ 'path': '/login' });
    } else {
    	console.log('用户已登陆');
      next();
    }
  } else {
    next();
  }
});

Vue.use(ElementUI);
// Vue.prototype.$axios = $axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
