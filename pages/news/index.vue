<template>
    <div>
        <h1>News</h1>
        <p>{{ msg }}</p>
    </div>

    <pre>
    {{ $route }}
    </pre>
   <NuxtLink to="/">Home</NuxtLink>
    
</template>
<script lang="ts" setup>

    import { RouteLocationNormalized, useRouter , useRoute } from 'vue-router'

    defineProps({
        msg: String
    })
    useRoute((to: RouteLocationNormalized) => {
        console.log(' useRoute  ',to)
    })
    const router = useRouter()
    console.log(' router  ',router)

   
</script>
```