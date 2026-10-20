<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section class="competencies" aria-label="Competencies">
    <div class="wrap competencies-grid">
      <a v-for="item in t.competencies" :key="item.id" class="comp-card" :href="item.href">
        <span class="comp-icon" aria-hidden="true">
          <svg v-if="item.id === 'iot'" viewBox="0 0 24 24" fill="none">
            <circle cx="4" cy="12" r="2.1" />
            <circle cx="12" cy="5" r="2.1" />
            <circle cx="20" cy="12" r="2.1" />
            <path d="M6 11.2 10.2 6.6M13.8 6.6 18 11.2" />
          </svg>
          <svg v-else-if="item.id === 'edge'" viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
            <path d="M8 12h8M12 8.5v7" />
          </svg>
          <svg v-else-if="item.id === 'net'" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
          </svg>
          <svg v-else-if="item.id === 'plc'" viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
            <path d="M7 8h4M7 12h10M7 16h6" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none">
            <path d="M4 16 8 11 12 13 16 7 20 9" />
            <path d="M4 19h16" />
          </svg>
        </span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </a>
    </div>
  </section>
</template>
