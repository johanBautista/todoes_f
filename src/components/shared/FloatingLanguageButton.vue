<template>
  <div class="floating-button">
    <span>🌐</span>
    <button :class="{ active: currentLanguage === 'en' }" @click="changeLanguage('en')">EN</button>
    <button :class="{ active: currentLanguage === 'es' }" @click="changeLanguage('es')">ES</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const changeLanguage = (newLocale: string) => {
  locale.value = newLocale
  currentLanguage.value = newLocale
}

onMounted(() => {
  currentLanguage.value = locale.value
})
</script>

<style scoped>
.floating-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: thistle;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  min-width: 100px;
}
button {
  background: transparent;
  border: 1px solid rgb(186, 163, 186);
  cursor: pointer;
  padding: 2px 4px;
}
button.active {
  background: rgb(159, 95, 159);
  color: white;
}
</style>
