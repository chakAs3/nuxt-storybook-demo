<template>
    <div>
        <h1>About</h1>
        <p>{{ msg }}</p>
    </div>

    <pre>
    {{ $route }}
    </pre>
   <NuxtLink to="/">Home</NuxtLink>
    
</template>
<script lang="ts" setup>

    defineProps({
        msg: String
    })

    import { RouteLocationNormalized, useRouter , useRoute } from 'vue-router'
    useRoute((to: RouteLocationNormalized) => {
        console.log(' useRoute  ',to)
    })
    const router = useRouter()
    console.log(' router  ',router)

   
</script>
```