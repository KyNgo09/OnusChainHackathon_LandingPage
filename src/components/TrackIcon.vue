<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ variant?: string; size?: number }>()

const classes = computed(() => {
  switch (props.variant ?? 'blockchain') {
    case 'ai':
      return 'from-indigo-500 to-purple-500'
    case 'both':
      return 'from-pink-500 to-rose-500'
    default:
      return 'from-amber-400 to-yellow-500'
  }
})
</script>

<template>
  <div :style="{ width: (props.size ?? 44) + 'px', height: (props.size ?? 44) + 'px' }" class="rounded-full overflow-hidden shadow-lg">
    <div :class="`w-full h-full inline-flex items-center justify-center bg-gradient-to-br ${classes}`">
      <svg v-if="(props.variant ?? 'blockchain') === 'blockchain'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c.244 0 .471-.113.926-.34l3.65-1.817C18.193 19.04 19 18.637 19 18v-8m-7 12c-.244 0-.471-.113-.926-.34l-3.65-1.817C5.807 19.04 5 18.637 5 18v-8m7 12v-8m7-4c0-.637-.808-1.039-2.423-1.843l-3.651-1.818C12.47 6.113 12.244 6 12 6s-.471.113-.926.34l-3.65 1.817C5.807 8.96 5 9.363 5 10m14 0c0 .637-.808 1.039-2.423 1.843l-3.651 1.818c-.455.226-.682.339-.926.339m-7-4c0 .637.808 1.039 2.423 1.843l3.651 1.818c.455.226.682.339.926.339m10 7l-3-2.5M12 2v4M2 21l3-2.5" color="currentColor"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'ai'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 4.5a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893M7.5 4.5a2.5 2.5 0 0 1 5 0V6m-5-1.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 0 7.5 19.5a2.5 2.5 0 0 0 5-.001V18m-7.567-3.053A3 3 0 0 1 6.5 13.67M17.5 9h-2c-.943 0-1.414 0-1.707.293S13.5 10.057 13.5 11v2c0 .943 0 1.414.293 1.707S14.557 15 15.5 15h2c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-2c0-.943 0-1.414-.293-1.707S18.443 9 17.5 9M15 15v2m3-2v2M15 7v2m3-2v2m-4.5 1.5h-2m2 3h-2m10-3h-2m2 3h-2" color="currentColor"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 14 14" fill="#ffffff"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M4.525 7.997V7.11a1.5 1.5 0 0 1 1.5-1.5h1.95a1.5 1.5 0 0 1 1.5 1.5v.888a1.5 1.5 0 0 1-1.5 1.5h-1.95a1.5 1.5 0 0 1-1.5-1.5ZM7 4.503v1.106m-.948 1.779v.33m1.895-.33v.33M.872 9.045H2.61m8.78 0h1.738m-3.993-6.42V.864m0 12.272v-1.745M.872 4.946H2.61m2.261-2.321V.864m6.519 4.082h1.738m-8.257 8.19v-1.745"/><path d="M2.758 10.315c.053.48.434.86.914.915c1.068.121 2.183.27 3.328.27s2.26-.149 3.328-.27c.48-.054.861-.435.914-.915C11.36 9.25 11.5 8.14 11.5 7s-.14-2.25-.258-3.315a1.04 1.04 0 0 0-.914-.915C9.26 2.649 8.145 2.5 7 2.5s-2.26.149-3.328.27c-.48.054-.861.435-.914.915C2.64 4.75 2.5 5.86 2.5 7s.14 2.25.258 3.315"/></g></svg>
    </div>
  </div>
</template>

<style scoped>
.text-white { color: #fff; }
</style>
