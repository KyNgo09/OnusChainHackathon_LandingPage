<script setup lang="ts">
// Import logo (giữ nguyên)
import logoDanang from '@/assets/logo_danang.png';
import logoRise from '@/assets/logo_ryf.png';
import logoHub from '@/assets/logo_hub.png';
import logoOnuschain from '@/assets/logo_onus.png';
import logoFundgo from '@/assets/logo_fundgo.png';

// Tách lại 2 mảng (giữ nguyên)
const organizers = [
  {
    name: "Trung tâm hỗ trợ Khởi nghiệp ĐMST TP. Đà Nẵng",
    src: logoDanang,
    href: "#",
  },
  {
    name: "Rise Your Future",
    src: logoRise,
    href: "#",
  },
  {
    name: "HUB Network",
    src: logoHub,
    href: "#",
  },
];

const partners = [
  {
    name: "Onuschain",
    src: logoOnuschain,
    href: "#",
  },
  {
    name: "Fundgo Capital",
    src: logoFundgo,
    href: "#",
  },
];
</script>

<template>
  <section id="partners" class="container min-h-screen flex flex-col justify-center py-12 sm:py-16">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl text-primary text-center font-bold mb-4">
        Đơn Vị Tổ Chức & Đồng Hành
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
    </div>

    <div class="mb-16">
      <div class="text-center mb-10">
        <h3 class="text-xl md:text-2xl text-center font-semibold text-primary mb-4">
          Đơn Vị Tổ Chức
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <a v-for="org in organizers" :key="org.name" :href="org.href" target="_blank" rel="noopener noreferrer"
          class="group relative block h-full">
          <div
            class="relative bg-white rounded-xl p-6 h-full flex flex-col items-center justify-between transition-all duration-300 border border-gray-100 shadow-md hover:shadow-xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary">
            <div class="h-28 flex items-center justify-center mb-4">
              <img :src="org.src" :alt="org.name"
                class="h-20 object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>

            <p class="text-base font-medium text-center text-gray-700">
              {{ org.name }}
            </p>
          </div>
        </a>
      </div>
    </div>

    <div class="flex justify-center mb-16">
      <div class="w-full max-w-lg border-t-2 border-primary/20"></div>
    </div>

    <div>
      <div class="text-center mb-10">
        <h3 class="text-xl md:text-2xl text-center font-semibold text-primary mb-4">
          Đơn Vị Đồng Hành
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <a v-for="partner in partners" :key="partner.name" :href="partner.href" target="_blank"
          rel="noopener noreferrer" class="group relative block h-full">
          <div
            class="relative bg-white rounded-xl p-6 h-full flex flex-col items-center justify-between transition-all duration-300 border shadow-md border-gray-100 hover:shadow-xl hover:shadow-primary/30 ">
            <div class="h-28 flex items-center justify-center mb-4">
              <img :src="partner.src" :alt="partner.name"
                class="h-20 object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>

            <p class="text-base font-medium text-center text-gray-700">
              {{ partner.name }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>