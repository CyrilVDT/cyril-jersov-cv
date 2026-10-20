<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import { content, t } from '../i18n.js'
</script>

<template>
  <SiteHeader />

  <main>
    <div class="wrap">
      <section class="hero">
        <p class="section-kicker">Review</p>
        <h1>{{ t.reviewTitle }}</h1>
        <p class="lede">{{ t.reviewIntro }}</p>
        <p><router-link to="/">{{ t.back }}</router-link></p>
        <article class="card">
          <ul>
            <li v-for="item in content.reviewItems" :key="item">{{ item }}</li>
          </ul>
        </article>
      </section>
    </div>
  </main>
</template>
