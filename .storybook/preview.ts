import { type Preview } from "@storybook/vue3";
import { setup } from "@storybook-vue/nuxt";


// import { useNuxtApp } from "#app/nuxt";
// import { u } from "#imports";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  
};
console.log('Preview =============')
setup((app)=>{
  console.log(' setup app: ',app)
})
export default preview;
