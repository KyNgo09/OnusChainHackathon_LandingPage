<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crosshair, Lightbulb } from "lucide-vue-next";

const { t } = useI18n();

type Benefit = {
  icon: "target" | "lightbulb";
  title: string;
  description: string;
};

// benefitList reactive theo locale
const benefitList = computed<Benefit[]>(() => [
  {
    icon: "target",
    title: t("about.title-description"),
    description: t("about.objective"),
  },
  {
    icon: "lightbulb",
    title: t("about.title-description2"),
    description: t("about.opportunities"),
  },
]);

const iconMap = {
  target: Crosshair,
  lightbulb: Lightbulb,
};
</script>

<template>
  <section
    id="gioi-thieu"
    class="container py-24 sm:py-20 rounded-2xl bg-secondary/10"
  >
    <!-- Title -->
    <div class="text-center mb-16">
      <h2 class="text-[30px] md:text-[40px] font-bold mb-2 text-primary">
        {{ t("about.title") }}
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
    </div>

    <div class="grid lg:grid-cols-3 place-items-center lg:gap-12 gap-12">
      <!-- Hình minh họa / Logo -->
      <div
        class="lg:col-span-1 w-full flex justify-center items-center relative p-4 order-2 lg:order-1"
      >
        <img
          src="/Logo-BlockAIThon.png"
          alt="BlockAiThon Logo"
          class="relative w-full max-w-md h-auto animate-floating"
        />
      </div>

      <!-- Cards -->
      <div
        class="lg:col-span-2 grid grid-cols-1 gap-6 w-full order-1 lg:order-2"
      >
        <Card
          v-for="b in benefitList"
          :key="b.title"
          class="p-6 w-full min-h-[200px] transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50"
        >
          <CardHeader class="p-4 pb-5 pt-2">
            <div class="flex items-start justify-between">
              <div class="flex flex-col gap-1">
                <CardTitle
                  class="text-base md:text-lg font-bold text-primary leading-tight"
                >
                  <span
                    class="block text-transparent text-[20px] font-bold uppercase bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                  >
                    {{ b.title }}
                  </span>
                </CardTitle>
              </div>

              <div
                class="-mr-2 -mt-1 shrink-0 rounded-full p-2 bg-gradient-to-r from-[#D247BF] to-primary"
              >
                <component
                  :is="iconMap[b.icon]"
                  class="size-4 md:size-5 text-white"
                />
              </div>
            </div>
          </CardHeader>

          <CardContent
            class="text-muted-foreground text-sm md:text-[16px] px-4 pt-0 pb-6 text-justify"
          >
            {{ b.description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-floating {
  animation: floating 3s ease-in-out infinite;
}
</style>
