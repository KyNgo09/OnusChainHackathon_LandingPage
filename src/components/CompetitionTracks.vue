<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const tracks = [
  {
    id: 0,
    title: "BẢNG 1",
    name: "BLOCKCHAIN HACKATHON",
    description:
      "Tập trung vào công nghệ blockchain, tokenomics, smart contract, DeFi, NFT, SocialFi, GameFi,...",
  },
  {
    id: 1,
    title: "BẢNG 2",
    name: "AI HACKATHON",
    description:
      "Dành cho những ý tưởng sử dụng trí tuệ nhân tạo để giải quyết bài toán thực tế trong tài chính, kinh tế số, tài sản số. Tập trung vào ứng dụng AI/ML, NLP, GenAI, và AI ethics.",
  },
  {
    id: 2,
    title: "BẢNG 3",
    name: "BLOCKCHAIN & AI HACKATHON",
    description:
      "Bảng thi đặc biệt dành cho những đội tiên phong kết hợp sức mạnh của Blockchain và AI, tạo ra các giải pháp xác thực dữ liệu, tự động hóa giao dịch, bảo mật và minh bạch hóa mô hình AI.",
  },
];

const selectedIndex = ref<number | null>(null);
const hoverIndex = ref<number | null>(null);
const emblaApi = ref<any | null>(null);

function onInit(api: any) {
  emblaApi.value = api;
}

function goTo(index: number) {
  if (selectedIndex.value === index) {
    selectedIndex.value = null;
    hoverIndex.value = null;
    if (emblaApi.value?.scrollTo) emblaApi.value.scrollTo(0);
    return;
  }

  selectedIndex.value = index;
  hoverIndex.value = null;
  if (emblaApi.value?.scrollTo) emblaApi.value.scrollTo(index);
}

function onHover(i: number) {
  if (selectedIndex.value === null) hoverIndex.value = i;
}

function onLeave() {
  if (selectedIndex.value === null) hoverIndex.value = null;
}
</script>

<template>
  <section id="bang-thi" class="container py-20 sm:py-28">
    <div class="text-center mb-4 px-4 md:px-32">
      <h3 class="text-3xl md:text-4xl font-bold mb-4">CÁC BẢNG THI</h3>
      <h2 class="md:text-lg text-sm text-primary tracking-wider text-gray-400">Từ Blockchain đến AI, và sự kết hợp đầy
        tiềm năng giữa cả hai –
        đây là nơi những ý tưởng táo bạo được ươm mầm, để công nghệ trở thành động lực thay đổi thế giới số.</h2>
    </div>

    <Carousel @init-api="onInit" :opts="{ align: 'center' }" class="relative max-w-6xl mx-auto">
      <CarouselContent class="gap-4 py-6 md:px-14 px-6">
        <CarouselItem v-for="(track, i) in tracks" :key="track.id" class="basis-auto pl-0">
          <Card @mouseenter="onHover(i)" @mouseleave="onLeave()" :class="[
            'transition-all duration-300 ease-in-out mx-3 sm:mx-2',
            'w-[19rem] sm:w-72 md:w-80 h-92 sm:h-80 md:h-80',
            selectedIndex !== null
              ? (i === selectedIndex
                ? 'scale-100 ring-2 ring-primary-500 shadow-lg dark:shadow-black/50 opacity-100 filter-none'
                : 'opacity-40 scale-95 filter blur-sm')
              : (hoverIndex === i
                ? 'scale-100 ring-2 ring-primary-500 shadow-lg opacity-100 filter-none'
                : 'opacity-100 scale-100 filter-none'),
            'bg-card'
          ]">
            <CardHeader class="pb-0">
              <div class="flex flex-col gap-2 p-4">
                <CardTitle class="text-sm md:text-lg">
                  {{ track.title }}
                  <br />
                  <span
                    class="text-transparent text-2xl font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    {{ track.name }}
                  </span>
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent class="p-10 pt-0 flex items-center justify-center text-justify">
              <p class="text-sm text-muted-foreground">
                {{ track.description }}
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <!-- controls -->
    <div class="mt-2 flex justify-center items-center gap-3">
      <Button v-for="(t, idx) in tracks" :key="t.id" variant="ghost" size="sm"
        class="h-10 w-10 rounded-full p-0 flex items-center justify-center" :class="idx === selectedIndex
          ? 'bg-gradient-to-r from-[#D247BF] to-primary text-white shadow-md'
          : 'text-muted-foreground hover:ring-1 hover:ring-primary/30'" @click="goTo(idx)"
        :aria-pressed="idx === selectedIndex">
        {{ idx + 1 }}
      </Button>
    </div>
  </section>
</template>
