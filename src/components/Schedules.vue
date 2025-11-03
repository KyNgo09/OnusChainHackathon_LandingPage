<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Trophy, Calendar } from "lucide-vue-next";

const timelineRounds = [
  {
    title: "Vòng Hồ sơ",
    icon: FileText,
    iconColor: "text-blue-400",
    step: 1,
    border: "border-blue-400",
    milestones: [
      { date: "07/11/2025", description: "Kickoff phát động cuộc thi" },
      { date: "07/11 - 12/11/2025", description: "Mở đơn đăng ký các bảng thi" },
      { date: "07/11 – 15/12/2025", description: "Nộp hồ sơ dự thi" },
      { date: "03/01/2026", description: "Thông báo kết quả Top 50 mỗi bảng" },
      { date: "04/01 - 08/01/2026", description: "Pitching Top 50 & Công bố Top 30" },
    ],
  },
  {
    title: "Vòng Bán kết",
    icon: Users,
    iconColor: "text-purple-400",
    step: 2,
    border: "border-purple-400",
    milestones: [
      { date: "07/01/2026", description: "Gặp mặt Top 30 mỗi bảng" },
      { date: "07/01 - 16/01/2026", description: "Chuỗi khóa học đào tạo trực tuyến" },
      { date: "17/01 - 19/01/2026", description: "Pitching Top 30 & chọn ra Top 15" },
      { date: "20/01 - 06/02/2026", description: "Mentoring cho các đội thi" },
    ],
  },
  {
    title: "Vòng Chung kết",
    icon: Trophy,
    iconColor: "text-yellow-400",
    step: 3,
    border: "border-yellow-400",
    milestones: [
      { date: "06/02 - 07/02/2026", description: "Pitching Top 15 & Chọn ra Top 10" },
      { date: "10/02/2026", description: "Chung kết tại TP. Đà Nẵng (offline + livestream)" },
    ],
  },
];

const keyMilestones = [
  { title: "Bắt đầu đăng ký", date: "07/11/2025", highlight: false },
  { title: "Hạn nộp hồ sơ", date: "15/12/2025", highlight: true },
  { title: "Chung kết", date: "10/02/2026", highlight: false },
];
</script>

<template>
  <section id="lich-trinh" class="container py-24 sm:py-32">
    <div class="text-center mb-4 px-4 md:px-32">
      <h2 class="text-[28px] md:text-[40px] text-center font-bold mb-2 text-primary">
        LỊCH TRÌNH TỔ CHỨC!
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4">
        Vòng Hồ sơ, Bán kết, Chung kết.
        Các mốc thời gian quan trọng của cuộc thi!
      </h3>
    </div>
    <div class="flex flex-col max-w-5xl mx-auto gap-8">
      <template v-for="round in timelineRounds" :key="round.title">
        <Card :class="[
          'bg-background/50 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20',
          round.border,
        ]">
          <CardHeader class="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 sm:p-6">
            <component :is="round.icon" :class="[round.iconColor, 'w-6 h-6 sm:w-8 sm:h-8']" stroke-width="2.4" />
            <CardTitle class="text-[18px] sm:text-[20px] font-bold">
              {{ round.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="p-4 md:p-6 pt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="milestone in round.milestones" :key="milestone.description" class="group flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-background/5 border border-gray-700/10 transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/20">
                <Calendar class="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-0 text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover:text-primary" />
                <div>
                  <div class="font-medium transition-colors duration-300 group-hover:text-primary text-sm sm:text-[15px]">
                    {{ milestone.date }}
                  </div>
                  <div class="text-sm sm:text-[15px] text-muted-foreground">
                    {{ milestone.description }}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </template>

        <Card class="mt-4 border-teal-500">
        <CardHeader>
          <CardTitle class="text-[24px] text-center text-primary font-bold">
            Các mốc quan trọng
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-2 pb-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div v-for="km in keyMilestones" :key="km.title">
                <div class="text-sm sm:text-[16px] text-muted-foreground">{{ km.title }}</div>
                <div :class="['text-[20px] sm:text-[20px] font-bold mt-1', km.highlight ? 'text-red-400' : '']">{{ km.date }}</div>
              </div>
            </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>