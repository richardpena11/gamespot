import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './Store/store.js'
import Vuelidate from 'vuelidate'

import wysiwyg from "vue-wysiwyg";

import { MdCard, MdDialog, MdContent, MdButton, MdTable, MdDialogConfirm } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import Button from './components/UI/button.vue'
Vue.component('app-button', Button)

// MATERIAL
Vue.use(MdCard)
Vue.use(MdDialog)
Vue.use(MdContent)
Vue.use(MdButton)
Vue.use(MdTable)
Vue.use(MdDialogConfirm)

// Resource
Vue.use(VueResource);
Vue.http.options.root = 'https://gamespot-7769b.firebaseio.com/'

// MISC
Vue.use(Vuelidate)
Vue.use(wysiwyg, {})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
