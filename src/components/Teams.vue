<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

import Nhan from "@/assets/Teams/Vuong_Le_Vinh_Nhan.png";
import Cong from "@/assets/Teams/Nguyen_Chi_Cong.png";
import Nha from "@/assets/Teams/Le_Hoa_Nha.png";
import Dung from "@/assets/Teams/Vu_Tien_Dung.webp";
import Tuong from "@/assets/Teams/Nguyen_Hoai_Tuong.jpeg";
import Chien from "@/assets/Teams/Tran_Quang_Chien.png";
// import Tyler from "@/assets/Teams/Tyler_McElhaney.png";
import Brian from "@/assets/Teams/Brian_Wong.jpeg";
import Toan from "@/assets/Teams/Nguyen_Viet_Toan.png";

interface TeamProps {
  imageUrl: string;
  name: string;
  description: string;
}

const { t } = useI18n();

const teamList = computed<TeamProps[]>(() => [
  {
    imageUrl: Nhan,
    name: t("team.Vuong-Le-Vinh-Nhan.name"),
    description: t("team.Vuong-Le-Vinh-Nhan.role"),
  },
  {
    imageUrl: Cong,
    name: t("team.Nguyen-Chi-Cong.name"),
    description: t("team.Nguyen-Chi-Cong.role"),
  },
  {
    imageUrl: Nha,
    name: t("team.Le-Hoa-Nha.name"),
    description: t("team.Le-Hoa-Nha.role"),
  },
  {
    imageUrl: Dung,
    name: t("team.Vu-Tien-Dung.name"),
    description: t("team.Vu-Tien-Dung.role"),
  },
  {
    imageUrl: Tuong,
    name: t("team.Nguyen-Hoai-Tuong.name"),
    description: t("team.Nguyen-Hoai-Tuong.role"),
  },
  {
    imageUrl: Chien,
    name: t("team.Tran-Quang-Chien.name"),
    description: t("team.Tran-Quang-Chien.role"),
  },
  // {
  //   imageUrl: Tyler,
  //   name: t("team.Tyler-McElhaney.name"),
  //   description: t("team.Tyler-McElhaney.role"),
  // },
  {
    imageUrl: Brian,
    name: t("team.Brian-Wong.name"),
    description: t("team.Brian-Wong.role"),
  },
  {
    imageUrl: Toan,
    name: t("team.Nguyen-Viet-Toan.name"),
    description: t("team.Nguyen-Viet-Toan.role"),
  },
]);
</script>

<template>
  <section id="team" class="container py-12 sm:py-20">
    <div class="mb-16 flex flex-col items-center text-center">
      <div class="flex flex-col items-center space-y-4 mb-6">
        <h2 class="text-[28px] md:text-[40px] font-bold text-primary">
          {{ t("team.title") }}
        </h2>
        <div class="w-24 h-1 bg-primary/30 rounded-full"></div>
      </div>

      <h3
        class="mx-auto max-w-4xl text-lg md:text-[20px] text-muted-foreground leading-relaxed"
      >
        {{ t("team.description") }}
      </h3>
    </div>

    <div class="w-full px-12">
      <Carousel
        :opts="{
          align: 'start',
          loop: true,
        }"
        class="relative w-full"
      >
        <CarouselContent>
          <CarouselItem
            v-for="{ imageUrl, name, description } in teamList"
            :key="name"
            class="basis-4/5 md:basis-1/2 lg:basis-1/4 xl:basis-1/5"
          >
            <div class="p-1">
              <Card class="overflow-hidden rounded-lg shadow-md">
                <CardContent
                  class="p-0 relative flex aspect-[4/5] items-center justify-center"
                >
                  <img
                    :src="imageUrl"
                    :alt="name"
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div
                    class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 sm:p-4 flex flex-col justify-end"
                  >
                    <h3
                      class="text-sm sm:text-lg font-bold text-white leading-tight"
                    >
                      {{ name }}
                    </h3>
                    <p
                      class="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug"
                    >
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
      <h3
        class="mx-auto max-w-4xl text-lg md:text-[20px] text-muted-foreground leading-relaxed italic"
      >
        {{ t("team.note") }}
      </h3>
    </div>
  </section>
</template>
