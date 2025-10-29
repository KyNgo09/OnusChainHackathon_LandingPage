<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// THAY ĐỔI: Thêm icon "Star" (Ngôi sao)
import { Trophy, Medal, Star } from "lucide-vue-next";

const awards = [
  {
    title: "Á QUÂN",
    prize: "20.000.000 VNĐ",
    description: "Hiện kim cùng các gói giải thưởng hấp dẫn.",
    highlight: false,
    icon: Medal,
    iconColor: "text-gray-400",
    iconLabel: "Silver Medal",
    benefits: [
      "Bằng khen",
      "Gói mentoring xây dựng sản phẩm"
    ],
  },
  {
    title: "QUÁN QUÂN",
    prize: "50.000.000 VNĐ",
    description: "Hiện kim cùng các gói giải thưởng giá trị!",
    highlight: true,
    icon: Trophy,
    iconColor: "text-yellow-400",
    iconLabel: "Trophy",
    benefits: [
      "Bằng khen",
      "Gói hỗ trợ phát triển dự án",
      "Cúp quán quân vinh danh"
    ],
  },
  {
    title: "QUÝ QUÂN",
    prize: "10.000.000 VNĐ",
    description: "Hiện kim với nhiều phần thưởng khích lệ.",
    highlight: false,
    icon: Medal,
    iconColor: "text-amber-800",
    iconLabel: "Bronze Medal",
    benefits: [
      "Bằng khen",
      "Gói hỗ trợ truyền thông"
    ],
  },
];
</script>

<template>
  <section id="giai-thuong" class="container py-12 sm:py-16">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-16">CƠ CẤU GIẢI THƯỞNG</h2>
    <div class="flex flex-col lg:grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

      <Card v-for="(award, index) in awards" :key="award.title" :class="[
        'transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/30',
        award.highlight ? 'order-1' : (index === 0 ? 'order-2' : 'order-3'),
        'lg:order-none',
        award.highlight
          ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary scale-[1.1]'
          : 'hover:shadow-2xl hover:border-primary/50'
      ]">

        <CardHeader>
          <div class="flex flex-col items-center justify-center">
            <component :is="award.icon"
              :class="[award.iconColor, award.highlight ? 'w-12 h-12 mb-2 drop-shadow-2xl' : 'w-10 h-10 mb-2']"
              stroke-width="2.4" :aria-label="award.iconLabel" />
            <CardTitle class="pb-2 text-center uppercase">
              {{ award.title }}
            </CardTitle>
          </div>
          <CardDescription class="pb-4 text-center">{{ award.description }}</CardDescription>
          <div class="text-center">
            <span class="text-3xl font-bold">{{ award.prize }}</span>
          </div>
        </CardHeader>
        <CardContent class="flex flex-col items-center">
          <div class="space-y-2 mt-2 w-full">
            <span v-for="benefit in award.benefits" :key="benefit"
              class="block text-base text-muted-foreground text-center">
              {{ benefit }}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="mt-10 flex flex-col items-center">
      <Card
        class="w-full max-w-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/30 hover:shadow-2xl hover:border-primary/50">
        <CardHeader>
          <div class="flex flex-col items-center justify-center">
            <Star class="w-10 h-10 mb-2 text-primary" stroke-width="2.4" aria-label="Giải Khuyến khích" />
            <CardTitle class="pb-2 text-center uppercase">
              3 Giải Khuyến khích
            </CardTitle>
          </div>
          <CardDescription class="pb-4 text-center">Hiện kim với nhiều phần thưởng khích lệ.</CardDescription>
          <div class="text-center">
            <span class="text-3xl font-bold">5.000.000 VNĐ</span>
          </div>
        </CardHeader>
        <CardContent class="flex flex-col items-center">
          <div class="space-y-2 mt-2 w-full">
            <span class="block text-base text-muted-foreground text-center">
              Bằng khen
            </span>
            <span class="block text-base text-muted-foreground text-center">
              Phần quà khích lệ
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>