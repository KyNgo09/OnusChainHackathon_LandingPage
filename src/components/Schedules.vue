<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Trophy } from "lucide-vue-next";

const timelineRounds = [
  {
    title: "VÒNG HỒ SƠ",
    icon: FileText,
    iconColor: "text-blue-400",
    border: "border-blue-400",
    milestones: [
      "07/11/2025: Kickoff phát động cuộc thi",
      "07/11 - 12/11/2025: Mở đơn đăng ký các bảng thi",
      "07/11 – 15/12/2025: Nộp hồ sơ dự thi",
      "03/01/2026: Thông báo kết quả Top 50 mỗi bảng",
      "04/01 - 08/01/2026: Pitching Top 50 mỗi bảng & Công bố Top 30 mỗi bảng",
    ],
  },
  {
    title: "VÒNG BÁN KẾT",
    icon: Users,
    iconColor: "text-purple-400",
    border: "border-purple-400",
    milestones: [
      "07/01/2026: Gặp mặt Top 30 mỗi bảng",
      "07/01 - 16/01/2026: Chuỗi khóa học đào tạo trực tuyến",
      "17/01 - 19/01/2026: Pitching Top 30 mỗi bảng & chọn ra Top 15 mỗi bảng",
      "20/01 - 06/02/2026: Mentoring cho các đội thi",
    ],
  },
  {
    title: "VÒNG CHUNG KẾT",
    icon: Trophy,
    iconColor: "text-yellow-400",
    border: "border-yellow-400",
    milestones: [
      "06/02 - 07/02/2026: Pitching Top 15 mỗi bảng & Chọn ra Top 10 chung kết tổng",
      "10/02/2026: Chung kết (TP. Đà Nẵng, Việt Nam) (offline + livestream) Chọn ra Quán quân, Á quân và Quý quân cùng các giải thưởng khác",
    ],
  },
];
</script>

<template>
  <section id="lich-trinh" class="container py-12 sm:py-16">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">LỊCH TRÌNH TỔ CHỨC</h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
      Vòng Hồ sơ, Bán kết, Chung kết. Các mốc thời gian quan trọng của cuộc thi!
    </h3>
    <div class="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-0">
      <template v-for="(round, index) in timelineRounds" :key="round.title">
        <Card :class="[
          'bg-background/50 shadow-lg min-w-0 lg:flex-1 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden',
          'border-l-8',
          round.border,
        ]">
          <CardHeader>
            <span
              class="absolute top-2 left-0 right-0 text-center select-none text-[5rem] font-bold opacity-10 leading-none pointer-events-none z-0 step-num">
            </span>
            <component :is="round.icon" :class="[round.iconColor, 'w-9 h-9 mx-auto mb-2 z-10']" stroke-width="2.4" />
            <CardTitle class="text-xl font-bold text-center z-10 relative">
              {{ round.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-sm z-10 relative">
            <ul class="space-y-1.5 list-disc pl-5">
              <li v-for="milestone in round.milestones" :key="milestone">
                <span class="font-bold">
                  {{ milestone.split(':')[0] }}
                </span>
                <span>
                  :{{ milestone.split(':').slice(1).join(':') }}
                </span>
              </li>

            </ul>
          </CardContent>
        </Card>

        <div v-if="index < timelineRounds.length - 1"
          class="flex-shrink-0 flex lg:flex-col items-center justify-center">

          <div class="lg:hidden flex flex-col items-center justify-center my-4">
            <div class="w-0.5 h-5 bg-primary/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-primary my-1"></div>
            <div class="w-0.5 h-5 bg-primary/50"></div>
          </div>

          <div class="hidden lg:flex items-center justify-center mx-4">
            <div class="h-0.5 w-5 bg-primary/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-primary mx-1"></div>
            <div class="h-0.5 w-5 bg-primary/50"></div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped></style>