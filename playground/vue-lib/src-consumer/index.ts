/* eslint-disable node/no-missing-import */
// @ts-ignore
import { CompA } from '../dist/lib/my-vue-lib.es'
import '../dist/lib/style.css'
import { createApp } from 'vue'

const app = createApp(CompA)
app.mount('#app')
