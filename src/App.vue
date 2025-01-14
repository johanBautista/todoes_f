<template>
  <HelloWorld msg="Vite + Vue" />
  <FloatingLanguageButton />
  hola
  
  <h1>{{ $t('welcome') }}</h1>
  <p>{{ $t('tasks') }}</p>
</template>

<script setup lang="ts">
import FloatingLanguageButton from './components/FloatingLanguageButton.vue';
import HelloWorld from './components/HelloWorld.vue'

</script>

<style scoped>
</style>
