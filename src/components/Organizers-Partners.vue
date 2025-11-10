<script setup lang="ts">
// Import logo
import logoDanang from "@/assets/logo_danang.png";
import logoTitops from "@/assets/logo_titops.png";
import logoHub from "@/assets/logo_hub.png";
import logoOnuschain from "@/assets/logo_onus2.png";
import logoFundgo from "@/assets/logo_fundgo.png";
import logoHva from "@/assets/logo_hva.png";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Unit {
  name: string;
  src: string;
  href: string;
}

// Mảng 1: Đơn vị bảo trợ
const sponsors: Unit[] = [
  {
    name: "Trung tâm Hỗ trợ Khởi nghiệp Đổi mới sáng tạo Thành phố Đà Nẵng",
    src: logoDanang,
    href: "https://www.facebook.com/TrungtamDISSC/?locale=vi_VN", // Cập nhật link
  },
];

// Mảng 2: Đơn vị tổ chức
const organizers: Unit[] = [
  {
    name: "Onuschain",
    src: logoOnuschain,
    href: "https://goonus.io/", // Cập nhật link
  },
  {
    name: "Fundgo Capital",
    src: logoFundgo,
    href: "https://fundgo.network/", // Cập nhật link
  },
  {
    name: "HVA Group",
    src: logoHva, // Logo mới
    href: "https://hva.group/", // Cập nhật link
  },
];

// Mảng 3: Đơn vị triển khai
const implementers: Unit[] = [
  {
    name: "Titops",
    src: logoTitops,
    href: "https://italent.ai/", // Cập nhật link
  },
  {
    name: "HUB Network",
    src: logoHub,
    href: "https://www.facebook.com/profile.php?id=61566071287402", // Cập nhật link
  },
];
</script>

<template>
  <section
    id="partners"
    class="container py-12 sm:py-16 rounded-2xl bg-secondary/10"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="text-center">
        <h3
          class="text-[20px] md:text-[24px] text-center font-semibold text-primary mb-8"
        >
          {{ t("partner.support-organizer") }}
        </h3>

        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          <a
            v-for="unit in sponsors"
            :key="unit.name"
            :href="unit.href"
            target="_blank"
            rel="noopener noreferrer"
            :title="unit.name"
            class="group transition-all duration-300 ease-in-out hover:opacity-75 hover:scale-110"
          >
            <img
              :src="unit.src"
              :alt="unit.name"
              class="h-16 sm:h-20 object-contain"
            />
          </a>
        </div>
      </div>

      <div class="text-center">
        <h3
          class="text-[20px] md:text-[24px] text-center font-semibold text-primary mb-8"
        >
          {{ t("partner.organizer") }}
        </h3>

        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          <a
            v-for="unit in organizers"
            :key="unit.name"
            :href="unit.href"
            target="_blank"
            rel="noopener noreferrer"
            :title="unit.name"
            class="group transition-all duration-300 ease-in-out hover:opacity-75 hover:scale-110"
          >
            <img
              :src="unit.src"
              :alt="unit.name"
              class="h-16 sm:h-20 object-contain"
            />
          </a>
        </div>
      </div>

      <div class="text-center">
        <h3
          class="text-[20px] md:text-[24px] text-center font-semibold text-primary mb-8"
        >
          {{ t("partner.co-organizer") }}
        </h3>

        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          <a
            v-for="unit in implementers"
            :key="unit.name"
            :href="unit.href"
            target="_blank"
            rel="noopener noreferrer"
            :title="unit.name"
            class="group transition-all duration-300 ease-in-out hover:opacity-75 hover:scale-110"
          >
            <img
              :src="unit.src"
              :alt="unit.name"
              class="h-16 sm:h-20 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
