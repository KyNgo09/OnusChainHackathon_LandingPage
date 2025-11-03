<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ variant?: string; size?: number }>()

const classes = computed(() => {
  switch (props.variant ?? 'blockchain') {
    case 'ai':
      return 'from-indigo-500 to-purple-500'
    case 'both':
      return 'from-pink-500 to-rose-500'
    case 'student':
      return 'from-indigo-500 to-violet-500'
    case 'startup':
      return 'from-emerald-400 to-teal-500'
    case 'researcher':
      return 'from-sky-400 to-indigo-500'
    case 'business':
      return 'from-rose-500 to-red-500'
    case 'benefit':
      return 'from-green-400 to-lime-500'
    case 'responsibility':
      return 'from-red-400 to-pink-500'
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
      <svg v-else-if="(props.variant ?? 'blockchain') === 'student'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256"><path fill="#ffffff" d="m227.79 52.62l-96-32a11.85 11.85 0 0 0-7.58 0l-96 32A12 12 0 0 0 20 63.37a6.05 6.05 0 0 0 0 .63v80a12 12 0 0 0 24 0V80.65l23.71 7.9a67.92 67.92 0 0 0 18.42 85A100.36 100.36 0 0 0 46 209.44a12 12 0 1 0 20.1 13.11C80.37 200.59 103 188 128 188s47.63 12.59 61.95 34.55a12 12 0 1 0 20.1-13.11a100.36 100.36 0 0 0-40.18-35.92a67.92 67.92 0 0 0 18.42-85l39.5-13.17a12 12 0 0 0 0-22.76Zm-99.79-8L186.05 64L128 83.35L70 64ZM172 120a44 44 0 1 1-81.06-23.71l33.27 11.09a11.89 11.89 0 0 0 7.58 0l33.27-11.09A43.85 43.85 0 0 1 172 120Z"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'startup'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="#ffffff" fill-rule="evenodd" d="m13.19.476l-.242.576c.575-.244.575-.243.576-.243v.002l.002.004l.004.01a3 3 0 0 1 .06.16a6.9 6.9 0 0 1 .364 1.917c.051 1.197-.218 2.76-1.534 4.079c-.485.5-1.179.998-1.944 1.483c.438.905.461 1.807.19 2.661c-.318.995-1.02 1.882-1.8 2.64a.625.625 0 0 1-.97-.124l-1.923-3.192L3.55 8.027L.36 6.104a.625.625 0 0 1-.126-.971c.759-.78 1.646-1.482 2.64-1.799a3.5 3.5 0 0 1 2.661.19c.486-.766.984-1.46 1.484-1.944C8.337.264 9.901-.006 11.098.046a6.9 6.9 0 0 1 1.917.364l.16.06l.01.004zm-.242.576l.575-.244a.63.63 0 0 0-.332-.331zM9.276 7.73a.6.6 0 0 1 .107-.059c.932-.569 1.685-1.089 2.142-1.562l.007-.008c.999-.998 1.215-2.178 1.173-3.146a5.6 5.6 0 0 0-.247-1.413a5.6 5.6 0 0 0-1.414-.247c-.967-.042-2.147.174-3.145 1.173l-.008.007C7.42 2.93 6.9 3.681 6.331 4.61a.6.6 0 0 1-.1.165l-.112.188L9.036 7.88l.196-.117zm-.038 1.483l.028-.017l.135-.079c.247.574.238 1.111.073 1.629c-.164.514-.49 1.032-.932 1.546l-1.195-1.984q.475-.278.957-.555l.078-.044q.432-.249.856-.496M7.92 8.532L5.467 6.079l-.156.271q-.298.521-.612 1.057l1.893 1.894c.361-.212.726-.422 1.086-.63l.08-.046zM3.254 4.525a2.24 2.24 0 0 1 1.627.074c-.219.372-.445.765-.671 1.157c-.175.303-.348.605-.518.897L1.708 5.458c.514-.442 1.031-.769 1.546-.933M.01 13.405l.49.095za.5.5 0 0 0 .585.585L.5 13.5l.095.49h.008l.023-.005l.087-.018a22 22 0 0 0 1.29-.304c.37-.1.767-.22 1.116-.355c.325-.125.68-.29.905-.505a2.001 2.001 0 0 0-2.18-3.287a2 2 0 0 0-.647.46c-.215.225-.38.58-.505.905a12 12 0 0 0-.355 1.116a22 22 0 0 0-.322 1.376l-.004.024l-.002.006zM10.5 2.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'researcher'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20"><path fill="#ffffff" fill-rule="evenodd" d="M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9c-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628c.22-.67.635-1.828 1.411-3.121c1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z" clip-rule="evenodd"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'business'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"  viewBox="0 0 24 24"><path fill="#ffffff" d="M21 7h-6a1 1 0 0 0-1 1v3h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'benefit'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 22.5q-.325 0-.625-.1t-.575-.3l-6-4.5q-.375-.275-.587-.7T4 16V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v12q0 .475-.213.9t-.587.7l-6 4.5q-.275.2-.575.3t-.625.1Zm0-2l6-4.5V4H6v12l6 4.5Zm-1.05-8.35l-1.4-1.4q-.3-.3-.7-.288t-.7.288q-.3.3-.313.713t.288.712L10.25 14.3q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.713-.313t-.712.288L10.95 12.15ZM12 4H6h12h-6Z"/></svg>
      <svg v-else-if="(props.variant ?? 'blockchain') === 'responsibility'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 48 48"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M39.5 24h5m-28 0h15m-28 0h5"/><rect width="8" height="17" x="8.5" y="15.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"/><rect width="8" height="17" x="31.5" y="15.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 14 14" fill="#ffffff"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M4.525 7.997V7.11a1.5 1.5 0 0 1 1.5-1.5h1.95a1.5 1.5 0 0 1 1.5 1.5v.888a1.5 1.5 0 0 1-1.5 1.5h-1.95a1.5 1.5 0 0 1-1.5-1.5ZM7 4.503v1.106m-.948 1.779v.33m1.895-.33v.33M.872 9.045H2.61m8.78 0h1.738m-3.993-6.42V.864m0 12.272v-1.745M.872 4.946H2.61m2.261-2.321V.864m6.519 4.082h1.738m-8.257 8.19v-1.745"/><path d="M2.758 10.315c.053.48.434.86.914.915c1.068.121 2.183.27 3.328.27s2.26-.149 3.328-.27c.48-.054.861-.435.914-.915C11.36 9.25 11.5 8.14 11.5 7s-.14-2.25-.258-3.315a1.04 1.04 0 0 0-.914-.915C9.26 2.649 8.145 2.5 7 2.5s-2.26.149-3.328.27c-.48.054-.861.435-.914.915C2.64 4.75 2.5 5.86 2.5 7s.14 2.25.258 3.315"/></g></svg>
    </div>
  </div>
</template>

<style scoped>
.text-white { color: #fff; }
</style>
