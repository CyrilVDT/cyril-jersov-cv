<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <aside class="arch" :aria-label="t.archLabel">
    <p class="arch-kicker">{{ t.archLabel }}</p>
    <p class="arch-note">{{ t.archNote }}</p>
    <ol class="arch-layers">
      <li v-for="(layer, index) in t.archLayers" :key="layer.title" class="arch-layer">
        <h3>
          <span class="arch-index">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ layer.title }}
        </h3>
        <ul>
          <li v-for="item in layer.items" :key="item">{{ item }}</li>
        </ul>
      </li>
    </ol>
    <div class="arch-side">
      <div class="mini-panel">
        <span class="label">{{ t.archStatus }}</span>
        <div class="status-row">
          <span class="dot run">RUN</span>
          <span class="dot idle">IDLE</span>
          <span class="dot alarm">ALARM</span>
        </div>
      </div>
      <div class="mini-panel">
        <span class="label">{{ t.archTrend }}</span>
        <svg class="spark" viewBox="0 0 160 48" aria-hidden="true">
          <polyline
            class="spark-line"
            fill="none"
            points="0,32 18,28 32,30 48,18 64,22 80,12 96,16 112,10 128,14 144,8 160,12"
          />
        </svg>
      </div>
      <div class="mini-panel">
        <span class="label">{{ t.archTelemetry }}</span>
        <table>
          <tbody>
            <tr><td>Motor_A</td><td>24.1 A</td></tr>
            <tr><td>Line_1</td><td>RUN</td></tr>
            <tr><td>Temp_01</td><td>41.2 °C</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </aside>
</template>
