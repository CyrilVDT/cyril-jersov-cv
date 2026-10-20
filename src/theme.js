import { ref, watchEffect } from 'vue'

function initialTheme() {
  if (typeof localStorage === 'undefined') return 'dark'
  const saved = localStorage.getItem('cv-theme')
  if (saved === 'dark' || saved === 'light') return saved
  return 'dark'
}

export const theme = ref(initialTheme())

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('cv-theme', theme.value)
})
