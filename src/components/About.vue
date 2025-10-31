<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Target, Lightbulb, Award, Rocket } from "lucide-vue-next";

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
      "BlockAiThon là cuộc thi nhằm thúc đẩy sáng tạo ứng dụng blockchain, AI và tài sản số trong đời sống và kinh tế số, tìm kiếm dự án tiềm năng để Onus đồng hành và ươm tạo, đồng thời tìm kiếm nguồn nhân sự tài năng sau cọ xát thực tiễn.",
  },
  {
    icon: "lightbulb",
    title: "Tạo sân chơi sáng tạo",
    description:
      "Cuộc thi được tổ chức với mục tiêu tạo ra một sân chơi công nghệ đổi mới sáng tạo ý nghĩa, nơi các nhà phát triển, sinh viên, startup và doanh nghiệp có thể cùng nhau trao đổi, thử nghiệm và hiện thực hóa những ý tưởng mang tính đột phá.",
  },
  {
    icon: "award",
    title: "Cơ hội",
    description:
      "Không chỉ là cơ hội để khám phá và phát triển các giải pháp blockchain ứng dụng trong tài chính, tài sản số, mà cuộc thi này còn đóng vai trò là sân chơi, cầu nối giữa những người trẻ đam mê công nghệ với doanh nghiệp, chuyên gia và nhà đầu tư trong hệ sinh thái blockchain tại Việt Nam. Nhờ đó, các đội thi sẽ được tiếp cận các nguồn lực, cố vấn và có cơ hội ươm tạo để đưa sản phẩm của mình tiến gần hơn đến thị trường thực tế.",
  },
  {
    icon: "rocket",
    title: "Thúc đẩy khởi nghiệp",
    description:
      "Bên cạnh đó, BlockAiThon còn góp phần nâng cao nhận thức về giá trị của blockchain trong đời sống hiện đại, thúc đẩy kỹ năng đổi mới sáng tạo và tinh thần khởi nghiệp trong cộng đồng trẻ Việt Nam. Đây là bước đệm quan trọng giúp thế hệ nhà phát triển Việt tự tin làm chủ công nghệ, xây dựng sản phẩm “Make in Vietnam” đóng góp vào sự phát triển bền vững của nền kinh tế số quốc gia.",
  },
];

const iconMap: Record<
  string,
  typeof Target | typeof Lightbulb | typeof Award | typeof Rocket
> = {
  target: Target,
  lightbulb: Lightbulb,
  award: Award,
  rocket: Rocket,
};
</script>

<template>
  <section id="gioi-thieu" class="container py-24 sm:py-20">
    <!-- SECTION HEADER -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl text-primary text-center font-bold mb-4">
        Đơn Vị Tổ Chức & Đồng Hành
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
    </div>

    <!-- GRID -->
    <div class="grid lg:grid-cols-3 place-items-center lg:gap-12 gap-12">
      <!-- LEFT ILLUSTRATION -->
      <div class="lg:col-span-1 w-full flex justify-center items-center relative p-4 order-2 lg:order-1">
        <!-- glow -->
        <div
          class="absolute inset-0 w-64 h-80 lg:w-80 lg:h-96 m-auto rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl -z-10">
        </div>

        <img src="/roboto.png" alt="Hero Image" class="relative w-4/5 max-w-xs h-auto animate-floating" />
      </div>

      <!-- RIGHT CARDS -->
      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full order-1 lg:order-2">
        <Card v-for="{ icon, title, description } in benefitList" :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50">
          <!-- HEADER (căn giống CompetitionTracks) -->
          <CardHeader class="p-6 pb-3">
            <div class="flex items-start justify-between">
              <!-- TEXT BLOCK -->
              <div class="flex flex-col gap-1">
                <!-- Dòng tiêu đề chính -->
                <CardTitle class="text-base md:text-lg font-bold text-primary leading-tight">
                  <!-- Vì bên CompetitionTracks có 2 dòng (số + tên),
                       ở đây ta chỉ có 1 dòng nên ta dùng gradient cho chính tên -->
                  <span
                    class="block text-transparent text-lg md:text-xl font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    {{ title }}
                  </span>
                </CardTitle>
              </div>

              <!-- ICON BÊN PHẢI -->
              <div class="-mr-2 -mt-2 shrink-0">
                <component :is="iconMap[icon]" class="size-8 md:size-9 text-primary" />
              </div>
            </div>
          </CardHeader>

          <!-- CONTENT -->
          <CardContent class="text-muted-foreground text-sm md:text-[16px] px-6 pt-0 pb-6 text-justify">
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