import { createI18n } from "vue-i18n"

// Definición de tipos para los mensajes
type MessageSchema = {
  welcome: string
  tasks: string
}

// Traducciones
const messages = {
  en: {
    welcome: "Welcome",
    tasks: "Tasks",
  },
  es: {
    welcome: "Bienvenido",
    tasks: "Tareas",
  },
}

const i18n = createI18n<[MessageSchema], "en" | "es">({
  locale: "es", // Idioma por defecto
  fallbackLocale: "en", // Idioma de respaldo
  messages,
})

export default i18n
