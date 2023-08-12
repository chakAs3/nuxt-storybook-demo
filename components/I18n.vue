<template>
    <pre>
        <h1> {{ $t('welcome') }} </h1>
    </pre>
    <div> language : {{ lang }}</div>
</template>
<script lang="ts" setup>
const {  locale  } = useI18n({
    locale: 'en',
    messages: {
      en: {
        welcome: 'Hello world!'
      },
      fr: {
        welcome: 'Bonjour le monde!'
      }
    }
  })
  const props = defineProps<{
    lang:'en'|'fr'
    message?: string,
  }>()
</script>