<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

// Import icons
import { Mail, Phone, Globe, Facebook } from "lucide-vue-next";

const { t } = useI18n();

// THÊM MỚI: Dữ liệu cho các liên kết nhanh
const quickLinks = computed(() => [
  { href: "#gioi-thieu", label: t("footer.quick-link.about") }, // ID của section Giới thiệu
  { href: "#co-cau", label: t("footer.quick-link.structure") }, // ID của section Cơ cấu
  { href: "#giai-thuong", label: t("footer.quick-link.prize") }, // ID của section Giải thưởng
  { href: "#lich-trinh", label: t("footer.quick-link.schedule") }, // ID của section Lịch trình
]);
</script>

<template>
  <footer id="lien-he" class="container pt-24 pb-4 sm:pt-32 sm:pb-4">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        <div class="col-span-1">
          <a href="#" class="flex font-bold items-center">
            <ChevronsDown
              class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
            />
            <h3
              class="text-2xl text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >
              BlockAiThon
            </h3>
          </a>
          <p class="text-sm text-muted-foreground mt-4">
            {{ t("footer.description") }}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t("footer.quick-link.title") }}</h3>
          <a
            v-for="link in quickLinks"
            :key="link.label"
            :href="link.href"
            class="opacity-60 hover:opacity-100"
          >
            <span>{{ link.label }}</span>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t("footer.contact.title") }}</h3>

          <a
            href="mailto:hubnetworkdn@gmail.com"
            class="opacity-60 hover:opacity-100 items-center flex gap-2"
          >
            <Mail class="size-4 text-primary" />
            <span>{{ t("footer.contact.email") }}</span>
          </a>

          <a
            href="tel:0911871573"
            class="opacity-60 hover:opacity-100 items-center flex gap-2"
          >
            <Phone class="size-4 text-primary" />
            <span>{{ t("footer.contact.phone") }}</span>
          </a>

          <a
            href="#"
            target="_blank"
            class="opacity-60 hover:opacity-100 items-center flex gap-2"
          >
            <Facebook class="size-4 text-primary" />
            <span>{{ t("footer.contact.facebook") }}</span>
          </a>

          <a
            href="https.www.blockaithon.com"
            target="_blank"
            class="opacity-60 hover:opacity-100 items-center flex gap-2"
          >
            <Globe class="size-4 text-primary" />
            <span>{{ t("footer.contact.website") }}</span>
          </a>
        </div>
      </div>

      <Separator class="my-4" />
      <section
        class="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
      >
        <h3 class="text-sm opacity-60 text-primary mb-2 md:mb-0">
          &copy; 2025 BlockAiThon. All rights reserved.
        </h3>

        <div class="flex gap-4">
          <a href="#" class="text-sm opacity-60 hover:opacity-100 text-primary"
            >Privacy Policy</a
          >
          <a href="#" class="text-sm opacity-60 hover:opacity-100 text-primary"
            >Terms of Use</a
          >
        </div>
      </section>
    </div>
  </footer>
</template>
