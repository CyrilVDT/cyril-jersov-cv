import { computed, ref, watchEffect } from 'vue'
import { profile as profileEn } from './data/profile.js'
import { experience as experienceEn } from './data/experience.js'
import { projects as projectsEn, projectCategories as categoriesEn } from './data/projects.js'
import { skillCategories as skillCategoriesEn, supportingWork as supportingWorkEn } from './data/skills.js'
import { education as educationEn } from './data/education.js'
import { profile as profileCs } from './data/cs/profile.js'
import { experience as experienceCs } from './data/cs/experience.js'
import { projects as projectsCs, projectCategories as categoriesCs } from './data/cs/projects.js'
import { skillCategories as skillCategoriesCs, supportingWork as supportingWorkCs } from './data/cs/skills.js'
import { education as educationCs } from './data/cs/education.js'
import { reviewItems } from './data/review.js'

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('cv-locale') : null
export const locale = ref(saved === 'cs' ? 'cs' : 'en')

export function setLocale(next) {
  locale.value = next === 'cs' ? 'cs' : 'en'
}

const ui = {
  en: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    outcome: 'Outcome',
    supporting: 'Supporting Node-RED and integration work',
    languages: 'Languages',
    linkedin: 'LinkedIn',
    email: 'Email',
    strength:
      'Main strength: the full path from a physical device to a software platform — machine, controller, network, edge device, data-processing layer, API, and monitoring.',
    projectNote:
      'Projects are grouped by technical theme. Customer names are shown only where confirmed. Empty dates stay empty.',
    imageNote: 'Illustrative photo — not a customer site and not a project snapshot.',
    photoCredit: 'Atmospheric photos from Unsplash and Pexels.',
    title: 'Cyril Jeršov — Industrial IoT Engineer',
    description: 'Industrial IoT and OT/IT integration engineer based in Prague.',
    all: 'All',
    problem: 'Problem',
    role: 'Role',
    dataFlow: 'Data flow',
    explore: 'Explore Projects →',
    writeEmail: 'Write Email',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    headlineLead: 'Connecting Industrial Equipment, Software ',
    headlineAccent: 'and Data',
    heroTags: [
      'Node-RED',
      'FlowFuse',
      'MQTT',
      'OPC UA',
      'Siemens',
      'Industrial Networking',
      'Python',
      'Time-series Data',
      'Edge Computing',
    ],
    competencies: [
      {
        id: 'iot',
        href: '#projects',
        title: 'Industrial IoT Integration',
        text: 'From machines to cloud platforms.',
      },
      {
        id: 'edge',
        href: '#projects',
        title: 'Edge Computing',
        text: 'Reliable data collection and processing.',
      },
      {
        id: 'net',
        href: '#skills',
        title: 'Industrial Networking',
        text: 'Industrial communication and device connectivity.',
      },
      {
        id: 'plc',
        href: '#experience',
        title: 'Automation and PLCs',
        text: 'Integration, commissioning, and troubleshooting.',
      },
      {
        id: 'data',
        href: '#projects',
        title: 'Data Processing and Analytics',
        text: 'Turning machine data into useful insights.',
      },
    ],
    archLabel: 'Reference architecture',
    archNote: 'Illustrative system view — not one customer deployment and not live production data.',
    archStatus: 'Machine status',
    archTrend: 'Illustrative trend',
    archTelemetry: 'Sample telemetry',
    archLayers: [
      {
        title: 'Factory Equipment',
        items: ['Machines', 'Sensors', 'Drives', 'Energy meters', 'Production signals'],
      },
      {
        title: 'PLC / Controllers',
        items: ['Siemens S7', 'OPC UA', 'Modbus TCP', 'PROFINET', 'I/O modules'],
      },
      {
        title: 'Industrial Network',
        items: ['Industrial Ethernet', 'SCALANCE', 'Teltonika', 'Remote access'],
      },
      {
        title: 'Industrial Edge',
        items: ['Revolution Pi', 'Linux', 'Node-RED', 'FlowFuse Agent'],
      },
      {
        title: 'Messaging and Integration',
        items: ['MQTT', 'REST APIs', 'WebSocket'],
      },
      {
        title: 'Cloud and Data',
        items: ['Insights Hub', 'MindSphere', 'Time-series', 'Analytics'],
      },
      {
        title: 'Visualization',
        items: ['Machine status', 'Trends', 'Energy', 'Alarms', 'History'],
      },
    ],
    contactInvite:
      'If you need to connect industrial equipment, networks, and data platforms, write me.',
    reviewTitle: 'Content still to confirm',
    reviewIntro:
      'Internal notes. Not linked from the public navigation. Fill these when you have them.',
    back: 'Back to site',
  },
  cs: {
    about: 'O mně',
    experience: 'Praxe',
    projects: 'Projekty',
    skills: 'Dovednosti',
    education: 'Vzdělání',
    contact: 'Kontakt',
    outcome: 'Výsledek',
    supporting: 'Další práce v Node-RED a integraci',
    languages: 'Jazyky',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    strength:
      'Hlavní silná stránka: celá cesta od fyzického zařízení k softwarové platformě — stroj, řídicí systém, síť, edge zařízení, vrstva zpracování dat, API a monitoring.',
    projectNote:
      'Projekty jsou podle technického tématu. Zákazníky uvádím jen tam, kde je to potvrzené. Prázdná data nechávám prázdná.',
    imageNote: 'Ilustrativní foto — ne zákaznický provoz a ne snímek z projektu.',
    photoCredit: 'Atmosférické fotografie z Unsplash a Pexels.',
    title: 'Cyril Jeršov — Inženýr průmyslového IoT',
    description: 'Inženýr průmyslového IoT a integrace OT/IT se sídlem v Praze.',
    all: 'Vše',
    problem: 'Úkol',
    role: 'Role',
    dataFlow: 'Tok dat',
    explore: 'Projekty →',
    writeEmail: 'Napsat e-mail',
    themeToDark: 'Přepnout na tmavý vzhled',
    themeToLight: 'Přepnout na světlý vzhled',
    headlineLead: 'Propojuji průmyslová zařízení, software ',
    headlineAccent: 'a data',
    heroTags: [
      'Node-RED',
      'FlowFuse',
      'MQTT',
      'OPC UA',
      'Siemens',
      'Průmyslové sítě',
      'Python',
      'Časové řady',
      'Edge computing',
    ],
    competencies: [
      {
        id: 'iot',
        href: '#projects',
        title: 'Integrace průmyslového IoT',
        text: 'Od strojů ke cloudovým platformám.',
      },
      {
        id: 'edge',
        href: '#projects',
        title: 'Edge computing',
        text: 'Spolehlivý sběr a zpracování dat.',
      },
      {
        id: 'net',
        href: '#skills',
        title: 'Průmyslové sítě',
        text: 'Průmyslová komunikace a konektivita zařízení.',
      },
      {
        id: 'plc',
        href: '#experience',
        title: 'Automatizace a PLC',
        text: 'Integrace, uvádění do provozu a diagnostika.',
      },
      {
        id: 'data',
        href: '#projects',
        title: 'Zpracování a analytika dat',
        text: 'Z dat ze strojů použitelná informace.',
      },
    ],
    archLabel: 'Referenční architektura',
    archNote: 'Ilustrativní pohled na systém — ne jeden zákaznický provoz a ne živá produkční data.',
    archStatus: 'Stav strojů',
    archTrend: 'Ilustrativní trend',
    archTelemetry: 'Ukázková telemetrie',
    archLayers: [
      {
        title: 'Výrobní zařízení',
        items: ['Stroje', 'Senzory', 'Pohony', 'Měřiče energie', 'Výrobní signály'],
      },
      {
        title: 'PLC / řídicí systémy',
        items: ['Siemens S7', 'OPC UA', 'Modbus TCP', 'PROFINET', 'Vstupy/výstupy'],
      },
      {
        title: 'Průmyslová síť',
        items: ['Průmyslový Ethernet', 'SCALANCE', 'Teltonika', 'Vzdálený přístup'],
      },
      {
        title: 'Industrial Edge',
        items: ['Revolution Pi', 'Linux', 'Node-RED', 'FlowFuse Agent'],
      },
      {
        title: 'Messaging a integrace',
        items: ['MQTT', 'REST API', 'WebSocket'],
      },
      {
        title: 'Cloud a data',
        items: ['Insights Hub', 'MindSphere', 'Časové řady', 'Analytika'],
      },
      {
        title: 'Vizualizace',
        items: ['Stav strojů', 'Trendy', 'Energie', 'Alarmy', 'Historie'],
      },
    ],
    contactInvite:
      'Pokud potřebujete propojit průmyslová zařízení, sítě a datové platformy, napište mi.',
    reviewTitle: 'Ještě k ověření',
    reviewIntro:
      'Interní poznámky. Ve veřejné navigaci odkaz není. Doplň, až budeš mít detaily.',
    back: 'Zpět na web',
  },
}

export const t = computed(() => ui[locale.value])

export const content = computed(() =>
  locale.value === 'cs'
    ? {
        profile: profileCs,
        experience: experienceCs,
        projects: projectsCs,
        projectCategories: categoriesCs,
        skillCategories: skillCategoriesCs,
        supportingWork: supportingWorkCs,
        education: educationCs,
        reviewItems: reviewItems.cs,
      }
    : {
        profile: profileEn,
        experience: experienceEn,
        projects: projectsEn,
        projectCategories: categoriesEn,
        skillCategories: skillCategoriesEn,
        supportingWork: supportingWorkEn,
        education: educationEn,
        reviewItems: reviewItems.en,
      },
)

watchEffect(() => {
  if (typeof document === 'undefined') return
  localStorage.setItem('cv-locale', locale.value)
  document.documentElement.lang = locale.value
  document.title = t.value.title
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', t.value.description)
})
