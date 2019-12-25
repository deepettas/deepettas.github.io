// Import main css
import '~/assets/style/index.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, {appOptions, router, head, isClient }) {
  head.script.push({src: '/hotjar.js'});
  head.meta.push({
    name: 'keywords',
    content: 'dionisis,pettas,blog,subneural,space'
  })

  router.options.linkActiveClass = 'is-active';
  Vue.use(Vuetify);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}

