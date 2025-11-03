<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Crosshair, Lightbulb } from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "target",
    title: "Mục tiêu",
    description:
      "BlockAiThon là cuộc thi sáng tạo tập trung vào Blockchain, AI và Tài sản số. Mục tiêu là tìm kiếm và ươm tạo dự án tiềm năng với sự đồng hành của Onus, đồng thời chiêu mộ nhân sự tài năng. Đây là sân chơi đổi mới sáng tạo dành cho các nhà phát triển, sinh viên, startup và doanh nghiệp để hiện thực hóa ý tưởng công nghệ đột phá.",
  },
  {
    icon: "lightbulb",
    title: "Cơ hội",
    description:
      "BlockAiThon mang lại cơ hội vàng để các đội thi hiện thực hóa ý tưởng công nghệ đột phá, được Onus ươm tạo và tiếp cận nguồn lực hỗ trợ, cố vấn nhằm đưa sản phẩm ra thị trường thực tế, đồng thời xây dựng thương hiệu “Make in Vietnam”",
  },
];

const iconMap: Record<
  string,
  typeof Crosshair | typeof Lightbulb
> = {
  target: Crosshair,
  lightbulb: Lightbulb,
};
</script>

<template>
  <section id="gioi-thieu" class="container py-24 sm:py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-2 text-primary">
        GIỚI THIỆU
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
    </div>

    <div class="grid lg:grid-cols-3 place-items-center lg:gap-12 gap-12">
      <div class="lg:col-span-1 w-full flex justify-center items-center relative p-4 order-2 lg:order-1">
        <div
          class="absolute inset-0 w-64 h-80 lg:w-80 lg:h-96 m-auto rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl -z-10">
        </div>

        <img src="/roboto.png" alt="Hero Image" class="relative w-4/5 max-w-xs h-auto animate-floating" />
      </div>

      <div class="lg:col-span-2 grid grid-cols-1 gap-6 w-full order-1 lg:order-2">
        <Card v-for="{ icon, title, description } in benefitList" :key="title"
          class="p-6 w-full min-h-[200px] transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50">
          <CardHeader class="p-4 pb-5 pt-2">
            <div class="flex items-start justify-between">
              <div class="flex flex-col gap-1">
                <CardTitle class="text-base md:text-lg font-bold text-primary leading-tight">
                  <span
                    class="block text-transparent text-lg md:text-xl font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text uppercase">
                    {{ title }}
                  </span>
                </CardTitle>
              </div>

              <div class="-mr-2 -mt-1 shrink-0 rounded-full p-2 bg-gradient-to-r from-[#D247BF] to-primary">
                <component :is="iconMap[icon]" class="size-4 md:size-5 text-white" />
              </div>
            </div>
          </CardHeader>

          <CardContent class="text-muted-foreground text-sm md:text-[16px] px-4 pt-0 pb-6 text-justify">
            {{ description }}
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