/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { registerPlugins } from '@/plugins'

// Components

// Composables

const app = createApp(App)

registerPlugins(app)

app.provide('$vuetify', vuetify)

app.mount('#app')
