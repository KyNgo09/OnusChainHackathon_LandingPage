<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

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
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
  subItems?: RouteProps[];
}

const routeList: RouteProps[] = [
  { href: "#gioi-thieu", label: "Giới Thiệu" },
  {
    href: "#cuoc-thi", label: "Cuộc Thi", subItems: [
      { href: "#bang-thi", label: "Bảng Thi" },
      { href: "#co-cau", label: "Cơ Cấu" },
      { href: "#quy-che", label: "Quy Chế" },
    ]
  },
  { href: "#giai-thuong", label: "Giải Thưởng" },
  { href: "#lich-trinh", label: "Lịch Trình" },
  { href: "#lien-he", label: "Liên Hệ" },
];



const isOpen = ref<boolean>(false);
</script>

<template>
  <header :class="{
    'shadow-light': mode === 'light',
    'shadow-dark': mode === 'dark',
    'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
  }">
    <a href="/" class="font-bold text-lg flex items-center">
      <ChevronsDown
        class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
      OnusChain Hackathon
    </a>
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="left" class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card">
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center">
                  <ChevronsDown
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" />
                  ShadcnVue
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <template v-for="route in routeList" :key="route.label">
                <Button as-child variant="ghost" class="justify-start text-base">
                  <a @click="!route.subItems ? isOpen = false : null" :href="route.href">
                    {{ route.label }}
                  </a>
                </Button>

                <div v-if="route.subItems" class="flex flex-col pl-6">
                  <Button v-for="subItem in route.subItems" :key="subItem.label" as-child variant="ghost"
                    class="justify-start text-base text-muted-foreground">
                    <a @click="isOpen = false" :href="subItem.href">
                      {{ subItem.label }}
                    </a>
                  </Button>
                </div>
              </template>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <template v-for="route in routeList" :key="route.label">

          <NavigationMenuItem v-if="!route.subItems">
            <NavigationMenuLink asChild>
              <Button as-child variant="ghost" class="text-base">
                <a :href="route.href">{{ route.label }}</a>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem v-else>
            <NavigationMenuTrigger class="bg-card text-base">
              {{ route.label }}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[200px] gap-3 p-4">
                <li v-for="subItem in route.subItems" :key="subItem.label">
                  <NavigationMenuLink asChild>
                    <a :href="subItem.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {{ subItem.label }}
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </template>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
