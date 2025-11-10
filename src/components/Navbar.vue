<script lang="ts" setup>
import { ref, computed, provide } from "vue";
import { useI18n } from "vue-i18n";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronsDown, Menu } from "lucide-vue-next";
// import ToggleTheme from "./ToggleTheme.vue"; // nếu dùng, mở lại import này

const { locale, t } = useI18n();

// Lấy ngôn ngữ đã lưu (nếu có)
const saved = localStorage.getItem("lang");
if (saved === "vi" || saved === "en") {
  locale.value = saved;
}

// Đồng bộ nút toggle
const currentLang = computed<"vi" | "en">(() =>
  (locale.value as string) === "en" ? "en" : "vi"
);
const toggleLang = () => {
  locale.value = currentLang.value === "vi" ? "en" : "vi";
  localStorage.setItem("lang", locale.value);
};

// (tuỳ chọn) provide cho nơi khác trong app cần biết lang hiện tại
provide("currentLang", currentLang);

// Danh sách route: dùng i18nKey để dịch label
interface RouteItem {
  href: string;
  i18nKey: string;
  subItems?: RouteItem[];
}

const routeList: RouteItem[] = [
  { href: "#gioi-thieu", i18nKey: "introduction" },
  {
    href: "#cuoc-thi",
    i18nKey: "competition",
    subItems: [
      { href: "#co-cau", i18nKey: "structure" },
      { href: "#bang-thi", i18nKey: "track" },
      { href: "#quy-che", i18nKey: "rule" },
    ],
  },
  { href: "#giai-thuong", i18nKey: "prize" },
  { href: "#lich-trinh", i18nKey: "schedule" },
  { href: "#lien-he", i18nKey: "contact" },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md"
  >
    <a href="/" class="font-bold text-lg flex items-center">
      <ChevronsDown
        class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
      />
      <span
        class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
        >BlockAiThon</span
      >
    </a>

    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center">
                  <ChevronsDown
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                  />
                  BlockAiThon
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <template v-for="route in routeList" :key="route.i18nKey">
                <Button
                  as-child
                  variant="ghost"
                  class="justify-start text-base"
                >
                  <a
                    @click="!route.subItems ? (isOpen = false) : null"
                    :href="route.href"
                  >
                    {{ t(`nav.${route.i18nKey}`) }}
                  </a>
                </Button>

                <div v-if="route.subItems" class="flex flex-col pl-6">
                  <Button
                    v-for="subItem in route.subItems"
                    :key="subItem.i18nKey"
                    as-child
                    variant="ghost"
                    class="justify-start text-base text-muted-foreground"
                  >
                    <a @click="isOpen = false" :href="subItem.href">
                      {{ t(`nav.${subItem.i18nKey}`) }}
                    </a>
                  </Button>
                </div>
              </template>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <!-- Nếu dùng theme toggle, mở lại component -->
            <!-- <ToggleTheme /> -->
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <template v-for="route in routeList" :key="route.i18nKey">
          <!-- Không có submenu -->
          <NavigationMenuItem v-if="!route.subItems">
            <NavigationMenuLink asChild>
              <Button as-child variant="ghost" class="text-base">
                <a :href="route.href">{{ t(`nav.${route.i18nKey}`) }}</a>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <!-- Có submenu -->
          <NavigationMenuItem v-else>
            <NavigationMenuTrigger class="bg-card text-base">
              {{ t(`nav.${route.i18nKey}`) }}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[200px] gap-3 p-4">
                <li v-for="subItem in route.subItems" :key="subItem.i18nKey">
                  <NavigationMenuLink asChild>
                    <a
                      :href="subItem.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {{ t(`nav.${subItem.i18nKey}`) }}
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </template>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Actions (desktop) -->
    <div class="hidden lg:flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        @click="toggleLang"
        class="flex items-center gap-1"
      >
        <span class="inline-block w-5 h-5 align-middle">
          <img
            v-if="currentLang === 'vi'"
            src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/vn.svg"
            alt="VN"
            class="w-full h-full object-cover rounded-sm"
          />
          <img
            v-else
            src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
            alt="EN"
            class="w-full h-full object-cover rounded-sm"
          />
        </span>
        <span>{{ currentLang === "vi" ? "VN" : "EN" }}</span>
      </Button>

      <!-- Nếu dùng theme toggle, mở lại -->
      <!-- <ToggleTheme /> -->
    </div>
  </header>
</template>

<style scoped>
/* giữ nguyên/tuỳ chọn */
</style>
