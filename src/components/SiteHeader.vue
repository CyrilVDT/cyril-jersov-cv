<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { content, locale, setLocale, t } from '../i18n.js'
import { theme, toggleTheme } from '../theme.js'

const props = defineProps({
  home: { type: Boolean, default: false },
})

const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact']
const active = ref('')

function syncActive() {
  if (window.scrollY < 48) {
    active.value = ''
    return
  }
  const marker = 120
  const next = sections
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .filter((el) => el.getBoundingClientRect().top <= marker)
    .pop()
  active.value = next?.id || ''
}

onMounted(() => {
  if (!props.home) return
  syncActive()
  window.addEventListener('scroll', syncActive, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', syncActive))
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <a v-if="home" class="brand" href="#top">{{ content.profile.name }}</a>
      <router-link v-else class="brand" to="/">{{ content.profile.name }}</router-link>
      <nav v-if="home">
        <a
          v-for="id in sections"
          :key="id"
          :href="'#' + id"
          :class="{ active: active === id }"
        >
          {{ t[id] }}
        </a>
      </nav>
      <div class="header-tools">
        <div class="lang-switch">
          <button
            type="button"
            :class="{ active: locale === 'cs' }"
            :aria-pressed="locale === 'cs'"
            @click="setLocale('cs')"
          >
            CS
          </button>
          <button
            type="button"
            :class="{ active: locale === 'en' }"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>
        <button
          type="button"
          class="theme-toggle"
          :aria-label="theme === 'dark' ? t.themeToLight : t.themeToDark"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ theme === 'dark' ? '☀' : '☾' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>
