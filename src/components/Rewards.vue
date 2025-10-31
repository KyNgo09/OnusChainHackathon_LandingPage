<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Gem, Gift } from "lucide-vue-next";

const awards = [
  {
    title: "Quán quân",
    prize: "50.000.000 VNĐ",
    icon: Trophy,
    iconColor: "text-blue-500", // <-- Thay đổi màu sắc
    prizeColor: "text-blue-500", // <-- Thay đổi màu sắc
    iconLabel: "Trophy",
    benefits: [
      "Hiện kim: 50.000.000 VNĐ",
      "Gói truyền thông - PR: 20.000.000 VNĐ",
      "Gói Mentoring và cố vấn: 30.000.000 VNĐ",
      "Gói Launchpad Onuschain: 50.000.000 VNĐ",
    ],
  },
  {
    title: "Á quân",
    prize: "20.000.000 VNĐ",
    icon: Medal,
    iconColor: "text-purple-500", // <-- Thay đổi màu sắc
    prizeColor: "text-purple-500", // <-- Thay đổi màu sắc
    iconLabel: "Silver Medal",
    benefits: [
      "Hiện kim: 20.000.000 VNĐ",
      "Gói Mentoring và cố vấn: 30.000.000 VNĐ",
      "Gói Launchpad Onuschain: 50.000.000 VNĐ",
    ],
  },
  {
    title: "Quý quân",
    prize: "10.000.000 VNĐ",
    icon: Gem,
    iconColor: "text-green-500", // <-- Thay đổi màu sắc
    prizeColor: "text-green-500", // <-- Thay đổi màu sắc
    iconLabel: "Gem",
    benefits: [
      "Hiện kim: 10.000.000 VNĐ",
      "Gói hỗ trợ kỹ thuật/văn phòng: 5.000.000 VNĐ",
      "Gói Launchpad Onuschain: 50.000.000 VNĐ",
    ],
  },
  {
    title: "Khuyến khích",
    prize: "5.000.000 VNĐ",
    icon: Gift,
    iconColor: "text-orange-500", // <-- Thay đổi màu sắc
    prizeColor: "text-orange-500", // <-- Thay đổi màu sắc
    iconLabel: "Gift",
    benefits: [
      "Hiện kim: 5.000.000 VNĐ (x3 giải)",
      "Gói mentoring kỹ thuật: 3.000.000 VNĐ",
      "Hỗ trợ demo sản phẩm",
      "Hỗ trợ truyền thông Startup",
    ],
  },
];
</script>

<template>
  <section id="giai-thuong" class="container py-24 sm:py-32">
    <div class="text-center mb-4 px-4 md:px-32">
      <div class="text-center mb-4">
        <h2 class="text-3xl md:text-4xl text-primary text-center font-bold mb-4">
          CƠ CẤU GIẢI THƯỞNG
        </h2>
        <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      </div>

      <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
        <span class="font-bold text-orange-400">10.000 USD tiền mặt</span>
        <span class="block sm:inline text-muted-foreground"> và các phần thưởng giá trị khác</span>
      </h3>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <Card v-for="award in awards" :key="award.title"
        class="group transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-blue-400">
        <CardHeader>
          <div class="flex flex-col items-center justify-center">
            <component :is="award.icon" :class="[award.iconColor, 'w-10 h-10 mb-2']" stroke-width="2.4"
              :aria-label="award.iconLabel" />
            <CardTitle class="pb-2 text-center text-xl font-semibold transition-colors duration-300', award.iconColor">
              {{ award.title }}
            </CardTitle>
          </div>
          <div class="text-center">
            <span :class="['text-3xl font-bold ', award.prizeColor || '']">
              {{ award.prize }}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul class="mt-4 space-y-2 text-sm md:text-[16px] list-disc list-inside dark:shadow-white/10">
            <li v-for="benefit in award.benefits" :key="benefit">
              {{ benefit }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
</template>