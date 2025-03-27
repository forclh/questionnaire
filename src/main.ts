import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 引入全局样式
import './assets/css/index.scss';

// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn';
const app = createApp(App);

// 引入 FontAwesome图标库
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 将所有 solid 图标添加到库中
library.add(fas);
// 注册FontAwesome图标组件
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');
