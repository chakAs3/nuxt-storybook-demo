
import { defineNuxtPlugin, useNuxtApp } from "#app/nuxt"
export default defineNuxtPlugin({
    name: 'storybook-nuxt-plugin',
    enforce: 'post', // or 'post'

    setup(nuxtApp) {
      console.log(' from project setup nuxtApp:',nuxtApp)
      //
    },
  
    hooks: {
      // You can directly register Nuxt app hooks here
      'app:created'() {
        const nuxtApp = useNuxtApp()
        console.log('  app:created: ------>',nuxtApp)
        // 
      }
    }
  })