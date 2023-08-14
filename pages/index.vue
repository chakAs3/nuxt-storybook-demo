<template>
  <div style="display: flex;gap: 20px;padding: 20px;">
    <MyButton primary><NuxtLink to="/news">News</NuxtLink></MyButton>
    <MyButton primary><NuxtLink to="/about">About</NuxtLink></MyButton>
    <MyButton primary><NuxtLink to="/pinia">Pinia</NuxtLink></MyButton>
  </div>
  <div>
      <h1>Home</h1>
  </div>

  <pre>
  {{ $route }}
  </pre>
  
</template>
<script lang="ts" setup>

  import { useRouter , useRoute } from 'vue-router'
  
 
</script>

```