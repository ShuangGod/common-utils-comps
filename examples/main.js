import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'normalize.css/normalize.css';
import 'element-plus/dist/index.css';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import App from './App.vue';
import Demo from '@/Demo';

const app = createApp(App);

app.use(ElementPlus);
// app.use(Vant);
app.use(Demo);
app.mount('#app');
