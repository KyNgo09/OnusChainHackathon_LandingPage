<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
  <section id="team" class="container lg:w-[75%] py-12 sm:py-20">
    <div class="mb-4 px-0 md:px-0">
      <h2 class="text-[28px] md:text-[40px] text-center font-bold mb-2 text-primary">
        Hội đồng Giám khảo và Hội đồng Chuyên môn
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3 class="mx-auto max-w-4xl text-lg md:text-[20px] text-center text-muted-foreground my-4 leading-relaxed">
        Hội đồng Giám khảo và Hội đồng Chuyên môn bao gồm các chuyên gia uy tín hàng đầu có kiến thức chuyên sâu và giàu
        kinh nghiệm thực tế trong các lĩnh vực blockchain, trí tuệ nhân tạo, tài chính số từ các cơ quan quản lý nhà
        nước, trường đại học uy tín, doanh nghiệp...
        <br />Danh sách Hội đồng Giám khảo và Hội đồng Chuyên môn sẽ được cập nhật liên tục.
      </h3>

    </div>


    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card v-for="{
        imageUrl,
        name,
        description,
      } in teamList" :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img :src="imageUrl" alt="" class="w-full aspect-square object-cover size-full" />
          </div>
          <CardTitle class="py-6 pb-4 px-6">{{ name }}
          </CardTitle>
        </CardHeader>

        <CardContent class="pb-4 text-muted-foreground">
          {{ description }}
        </CardContent>

      </Card>
    </div>
  </section>
</template>