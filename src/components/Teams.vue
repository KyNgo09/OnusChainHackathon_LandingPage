<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import Nhan from "@/assets/Teams/Vuong_Le_Vinh_Nhan.png";
import Cong from "@/assets/Teams/Nguyen_Chi_Cong.png";
import Nha from "@/assets/Teams/Le_Hoa_Nha.png";
import Dung from "@/assets/Teams/Vu_Tien_Dung.webp";
import Tuong from "@/assets/Teams/Nguyen_Hoai_Tuong.jpeg";
import Chien from "@/assets/Teams/Tran_Quang_Chien.jpg";
import Tyler from "@/assets/Teams/Tyler_McElhaney.jpg";
import Brian from "@/assets/Teams/Brian_Wong.jpeg";
// import Toan from "@/assets/Teams/nguyen-viet-toan.png";

interface TeamProps {
  imageUrl: string;
  name: string;
  description: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: Nhan,
    name: "Ông Vương Lê Vĩnh Nhân",
    description: "Co-Founder kiêm CEO của VNDC.IO - Tổ chức phát triển stablecoin VNDC.",
  },
  {
    imageUrl: Cong,
    name: "Ông Nguyễn Chí Công",
    description: "Cố vấn điều hành quản lý dự án startup blockchain tại Citipass và Delta Labs.",
  },
  {
    imageUrl: Nha,
    name: "Th.s Lê Hòa Nhã",
    description: "Thạc sĩ Quản trị Tài chính - Đại học Kinh doanh Quốc tế UBIS, Hoa Kỳ. Trưởng ban Truyền thông - Phát triển hội viên - Cộng đồng tại CEO Việt Nam VCCB.",
  },
  {
    imageUrl: Dung,
    name: "Ông Vũ Tiến Dũng",
    description: "Quản lý phát triển dự án Gcafe tại Công ty Garena Việt Nam (SEA Group).",
  },
  {
    imageUrl: Tuong,
    name: "Ông Nguyễn Hoài Tưởng",
    description: "Giám đốc Phòng thí nghiệm NEXT Lab tại Viện Quốc tế Pháp ngữ – Đại học Quốc gia Hà Nội (VNU-IFI). Co-Founder Titops.",
  },
  {
    imageUrl: Chien,
    name: "Ông Trần Quang Chiến",
    description: "Giám đốc điều hành ONUS Labs. Co-Founder ONUSChain.",
  },
  {
    imageUrl: Tyler,
    name: "Mr. Tyler McElhaney",
    description: "Country Head, Apex Vietnam.",
  },
  {
    imageUrl: Brian,
    name: "Mr. Brian Wong",
    description: "Business Development Executive, Pionex.",
  },
  {
    imageUrl: "", //Toan,
    name: "Ông Nguyễn Viết Toàn",
    description: "Giám đốc Trung tâm Hỗ trợ khởi nghiệp và đổi mới sáng tạo Đà Nẵng.",
  },
];


</script>

<template>
  <section id="team" class="container py-12 sm:py-20">
    <div class="mb-16 flex flex-col items-center text-center">

      <div class="flex flex-col items-center space-y-4 mb-6">
        <h2 class="text-[28px] md:text-[40px] font-bold text-primary">
          Hội đồng Giám khảo và Hội đồng Chuyên môn
        </h2>
        <div class="w-24 h-1 bg-primary/30 rounded-full"></div>
      </div>

      <h3 class="mx-auto max-w-4xl text-lg md:text-[20px] text-muted-foreground leading-relaxed">
        Hội đồng Giám khảo và Chuyên môn gồm các chuyên gia hàng đầu trong lĩnh vực blockchain, AI, tài chính số đến từ
        cơ quan quản lý, trường đại học và doanh nghiệp uy tín.
      </h3>

    </div>


    <div class="w-full px-12">
      <Carousel :opts="{
        align: 'start',
        loop: true,
      }" class="relative w-full">
        <CarouselContent>
          <CarouselItem v-for="{ imageUrl, name, description } in teamList" :key="name"
            class="basis-4/5 md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
            <div class="p-1">
              <Card class="overflow-hidden rounded-lg shadow-md">
                <CardContent class="p-0 relative flex aspect-[4/5] items-center justify-center">
                  <img :src="imageUrl" :alt="name"
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  <div
                    class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 sm:p-4 flex flex-col justify-end">
                    <h3 class="text-sm sm:text-lg font-bold text-white leading-tight">
                      {{ name }}
                    </h3>
                    <p class="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug">
                      {{ description }}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="absolute left-[-20px]" />
        <CarouselNext class="absolute right-[-20px]" />
      </Carousel>
    </div>

    <div class="mt-12 flex flex-col items-center text-center">
      <h3 class="mx-auto max-w-4xl text-lg md:text-[20px] text-muted-foreground leading-relaxed italic">
        Danh sách Hội đồng Giám khảo và Hội đồng Chuyên môn sẽ được cập nhật liên tục.
      </h3>
    </div>
  </section>
</template>