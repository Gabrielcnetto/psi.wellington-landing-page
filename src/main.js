import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { configure } from "vue-gtag";
import './style.css'

configure({
  tagId: "GTM-NM98W69S"
})

const app = createApp(App)

app.use(router)
app.use(gtag)
app.mount('#app')
