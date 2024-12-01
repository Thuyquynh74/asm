import { createApp } from 'vue'
// import './style.css'
import './assets/main.css';
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
const CLIENT_ID="775583487772-leg7fb8ftq3cbh19rrs54dri7ekbt7e1.apps.googleusercontent.com"
createApp(App)
    .use(router)
    .use(vue3GoogleLogin,{
        clientId: CLIENT_ID,
    })
    .mount('#app')


