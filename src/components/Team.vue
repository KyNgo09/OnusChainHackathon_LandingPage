<script setup lang="ts">
// --- QUAN TRỌNG: Hãy cập nhật tên tệp logo của bạn ở đây ---
// Đảm bảo đường dẫn '@' đang trỏ đúng đến thư mục 'src' của bạn
import logoDanang from '@/assets/logo_danang.png'; // <-- Thay tên tệp này
import logoRise from '@/assets/logo_ryf.png';   // <-- Thay tên tệp này
import logoHub from '@/assets/logo_hub.png';       // <-- Thay tên tệp này
import logoOnuschain from '@/assets/logo_onus.png'; // <-- Thay tên tệp này
import logoFundgo from '@/assets/logo_fundgo.png';         // <-- Thay tên tệp này

// Tạo mảng dữ liệu cho logo để dễ dàng quản lý
const organizers = [
  {
    name: "Trung tâm hỗ trợ Khởi nghiệp ĐMST TP. Đà Nẵng",
    src: logoDanang
  },
  {
    name: "Rise Your Future",
    src: logoRise
  },
  {
    name: "HUB Network",
    src: logoHub
  },
];

const partners = [
  {
    name: "Onuschain",
    src: logoOnuschain
  },
  {
    name: "Fundgo Capital",
    src: logoFundgo
  },
];
</script>

<template>
  <section id="partners" class="container py-12 sm:py-16">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-12">
      Đơn Vị Tổ Chức & Đơn Vị Đồng Hành
    </h2>

    <div class="flex flex-col items-center gap-12">

      <div class="w-full">
        <h3 class="text-xl md:text-2xl text-center font-semibold text-primary mb-8">
          Đơn Vị Tổ Chức
        </h3>
        <div class="flex flex-wrap justify-around items-center gap-x-6 gap-y-8 px-4 sm:px-0">
          <div v-for="org in organizers" :key="org.name"
            class="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 w-40 sm:w-48">
            <img :src="org.src" :alt="org.name" class="h-20 lg:h-24 object-contain mb-2" />
            <p class="text-base font-medium text-muted-foreground">{{ org.name }}</p>
          </div>
        </div>
      </div>

      <hr class="w-full max-w-lg border-t-2 border-primary/20" />
      <div class="w-full">
        <h3 class="text-xl md:text-2xl text-center font-semibold text-primary mb-8">
          Đơn Vị Đồng Hành
        </h3>
        <div class="flex flex-wrap justify-around items-center gap-x-6 gap-y-8 px-4 sm:px-0">
          <div v-for="partner in partners" :key="partner.name"
            class="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 w-40 sm:w-48">
            <img :src="partner.src" :alt="partner.name" class="h-20 lg:h-24 object-contain mb-2" />
            <p class="text-base font-medium text-muted-foreground">{{ partner.name }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Không cần style tùy chỉnh riêng, Tailwind đã xử lý */
</style>