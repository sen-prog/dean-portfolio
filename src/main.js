/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// Composables
import { createApp } from 'vue'


const app = createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')

registerPlugins(app)

// app.mount('#app')
