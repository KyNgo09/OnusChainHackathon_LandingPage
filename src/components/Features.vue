<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dữ liệu mới cho timeline
const timelineRounds = [
  {
    title: "Khối 1: VÒNG HỒ SƠ",
    milestones: [
      "07/11/2025: Kickoff phát động cuộc thi",
      "07/11 - 12/11/2025: Mở đơn đăng ký các bảng thi",
      "07/11 – 15/12/2025: Nộp hồ sơ dự thi",
      "03/01/2026: Thông báo kết quả Top 50 mỗi bảng",
      "04/01 - 08/01/2026: Pitching Top 50 & Công bố Top 30 mỗi bảng",
    ],
  },
  {
    title: "Khối 2: VÒNG BÁN KẾT",
    milestones: [
      "07/01/2026: Gặp mặt Top 30 mỗi bảng",
      "07/01 - 16/01/2026: Chuỗi khóa học đào tạo trực tuyến",
      "17/01 - 19/01/2026: Pitching Top 30 & chọn ra Top 15 mỗi bảng",
      "20/01 - 06/02/2026: Mentoring cho các đội thi",
    ],
  },
  {
    title: "Khối 3: VÒNG CHUNG KẾT",
    milestones: [
      "06/02 - 07/02/2026: Pitching Top 15 & Chọn ra Top 10 chung kết tổng",
      "10/02/2026: Chung kết (TP. Đà Nẵng, Việt Nam) (offline + livestream) & Trao giải.",
    ],
  },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      HACKATHON
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      LỊCH TRÌNH TỔ CHỨC
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
      Các mốc thời gian quan trọng của cuộc thi. Đừng bỏ lỡ!
    </h3>

    <div class="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-0">
      <template v-for="(round, index) in timelineRounds" :key="round.title">
        <Card
          class="bg-background/50 shadow-lg min-w-0 lg:flex-1 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
          <CardHeader>
            <CardTitle class="text-xl font-bold text-center">
              {{ round.title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-sm">
            <ul class="space-y-1.5 list-disc pl-5">
              <li v-for="milestone in round.milestones" :key="milestone">
                {{ milestone }}
              </li>
            </ul>
          </CardContent>
        </Card>

        <div v-if="index < timelineRounds.length - 1"
          class="flex-shrink-0 flex lg:flex-col items-center justify-center">
          <div class="lg:hidden w-1 h-12 bg-primary/30 my-4"></div>

          <div class="hidden lg:block w-12 h-1 bg-primary/30 mx-4"></div>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="less" scoped>
/* Không cần CSS tùy chỉnh, Tailwind đã xử lý hết layout */
</style>