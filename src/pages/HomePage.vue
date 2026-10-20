<script setup>
import { computed, ref } from 'vue'
import ArchitectureBoard from '../components/ArchitectureBoard.vue'
import CompetencyStrip from '../components/CompetencyStrip.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { portraitImage, projectImages } from '../data/images.js'
import { content, t } from '../i18n.js'

const year = new Date().getFullYear()
const activeCategory = ref('all')

const visibleProjects = computed(() => {
  if (activeCategory.value === 'all') return content.value.projects
  return content.value.projects.filter((project) =>
    project.categories.includes(activeCategory.value),
  )
})

function metaLine(project) {
  return [project.customer, project.year, project.stage].filter(Boolean).join(' · ')
}

function projectPhoto(id) {
  return projectImages[id]
}
</script>

<template>
  <SiteHeader home />

  <main id="top">
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="kicker">{{ content.profile.location }}</p>
          <h1>
            {{ t.headlineLead }}<span class="accent-text accent-nowrap">{{ t.headlineAccent }}</span>
          </h1>
          <p class="lede">{{ content.profile.subheadline }}</p>
          <p>{{ content.profile.introduction }}</p>
          <ul class="areas">
            <li v-for="tag in t.heroTags" :key="tag">{{ tag }}</li>
          </ul>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects">{{ t.explore }}</a>
            <a class="btn btn-ghost" :href="'mailto:' + content.profile.links.email">
              {{ t.writeEmail }}
            </a>
          </div>
        </div>
        <ArchitectureBoard />
      </div>
    </section>

    <CompetencyStrip />

    <div class="wrap">
      <section id="about">
        <div class="about-lead">
          <img
            class="about-face"
            :src="portraitImage"
            :alt="content.profile.name"
            width="96"
            height="96"
          />
          <div>
            <p class="section-kicker">01</p>
            <h2>{{ t.about }}</h2>
          </div>
        </div>
        <p>{{ content.profile.shortIntroduction }}</p>
        <p>{{ t.strength }}</p>
        <ul class="skill-chips">
          <li v-for="item in content.profile.summaryPoints" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section id="experience">
        <p class="section-kicker">02</p>
        <h2>{{ t.experience }}</h2>
        <div class="timeline">
          <article v-for="job in content.experience" :key="job.id" class="card">
            <p class="job-company">{{ job.company }}</p>
            <h3>{{ job.role }}</h3>
            <p class="meta">
              {{ job.period }}
              <template v-if="job.arrangement"> · {{ job.arrangement }}</template>
              <template v-if="job.location"> · {{ job.location }}</template>
            </p>
            <p v-if="job.intro">{{ job.intro }}</p>
            <ul>
              <li v-for="item in job.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects">
        <p class="section-kicker">03</p>
        <h2>{{ t.projects }}</h2>
        <p class="note">{{ t.projectNote }}</p>
        <div class="filters">
          <button
            type="button"
            :class="{ active: activeCategory === 'all' }"
            @click="activeCategory = 'all'"
          >
            {{ t.all }}
          </button>
          <button
            v-for="category in content.projectCategories"
            :key="category.id"
            type="button"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.label }}
          </button>
        </div>
        <div class="project-grid">
          <article v-for="project in visibleProjects" :key="project.id" class="card project-card">
            <figure v-if="projectPhoto(project.id)" class="project-photo">
              <img
                :src="projectPhoto(project.id)"
                :alt="t.imageNote"
                width="800"
                height="420"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="job-company">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p v-if="metaLine(project)" class="meta">{{ metaLine(project) }}</p>
            <p>{{ project.overview }}</p>
            <div v-if="project.problem || project.role" class="split">
              <p v-if="project.problem">
                <span class="label">{{ t.problem }}</span>
                {{ project.problem }}
              </p>
              <p v-if="project.role">
                <span class="label">{{ t.role }}</span>
                {{ project.role }}
              </p>
            </div>
            <ul class="chips">
              <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
            <ul class="work-list">
              <li v-for="item in project.work" :key="item">{{ item }}</li>
            </ul>
            <template v-if="project.dataFlow?.length">
              <p class="flow-label">{{ t.dataFlow }}</p>
              <ol class="flow">
                <template v-for="(step, index) in project.dataFlow" :key="step">
                  <li>
                    <span class="flow-node">{{ step }}</span>
                  </li>
                  <li v-if="index < project.dataFlow.length - 1" class="flow-arrow" aria-hidden="true"></li>
                </template>
              </ol>
            </template>
            <p v-if="project.outcome">
              <span class="label">{{ t.outcome }}</span>
              {{ project.outcome }}
            </p>
            <p v-if="project.note" class="note">{{ project.note }}</p>
          </article>
        </div>
      </section>

      <section id="skills">
        <p class="section-kicker">04</p>
        <h2>{{ t.skills }}</h2>
        <div class="grid">
          <article v-for="group in content.skillCategories" :key="group.name" class="card">
            <h3>{{ group.name }}</h3>
            <ul class="skill-chips">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <article class="card">
          <h3>{{ t.supporting }}</h3>
          <ul class="skill-chips">
            <li v-for="item in content.supportingWork" :key="item">{{ item }}</li>
          </ul>
        </article>
        <article class="card">
          <h3>{{ t.languages }}</h3>
          <ul class="skill-chips">
            <li v-for="lang in content.profile.languages" :key="lang.name">
              {{ lang.name }} — {{ lang.level }}
            </li>
          </ul>
        </article>
      </section>

      <section id="education">
        <p class="section-kicker">05</p>
        <h2>{{ t.education }}</h2>
        <article v-for="item in content.education" :key="item.school" class="card">
          <p class="job-company">{{ item.year }}</p>
          <h3>{{ item.school }}</h3>
          <p>{{ item.degree }}</p>
          <p v-if="item.faculty" class="meta">{{ item.faculty }}</p>
          <p v-if="item.specialization">{{ item.specialization }}</p>
        </article>
      </section>

      <section id="contact">
        <p class="section-kicker">06</p>
        <h2>{{ t.contact }}</h2>
        <article class="card">
          <p class="lede">{{ t.contactInvite }}</p>
          <p>{{ content.profile.closing }}</p>
          <div class="contact-actions">
            <a class="btn btn-primary" :href="'mailto:' + content.profile.links.email">
              {{ content.profile.links.email }}
            </a>
            <a
              class="btn btn-ghost"
              :href="content.profile.links.linkedin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </article>
      </section>
    </div>
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <span>{{ content.profile.name }} · {{ content.profile.alternativeName }}</span>
      <span>{{ t.photoCredit }} · {{ year }}</span>
    </div>
  </footer>
</template>
