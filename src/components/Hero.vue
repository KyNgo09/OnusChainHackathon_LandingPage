<script setup lang="ts">

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="px-4">
    <div class="mx-auto w-full lg:max-w-screen-xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 py-16 md:py-24">
        <!-- LEFT COLUMN -->
        <div class="lg:col-span-6 flex flex-col items-center text-center">
          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Cuộc thi
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Hackathon
            </span>
          </h1>

          <!-- Sub-headline -->
          <p class="text-2xl md:text-3xl font-semibold text-primary mt-4">
            From Idea to Impact
          </p>

          <!-- Description + CTA -->
          <div class="w-full flex flex-col items-center mt-6 space-y-6">
            <p class="max-w-screen-sm text-lg sm:text-xl text-muted-foreground">
              Tổng giá trị giải thưởng lên đến 10.000 USD.<br />
              Cơ hội đồng hành & ươm tạo tại Onuschain.
            </p>

            <Button class="w-3/4 sm:w-2/3 md:w-1/3 font-bold group/arrow">
              Đăng ký ngay
              <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <!-- RIGHT COLUMN (Logo sự kiện) -->
        <div class="lg:col-span-6 flex justify-center lg:justify-center items-center">
          <div
            class="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl bg-gradient-to-tr flex items-center justify-center shadow-inner">
            <img src="/runner.png" alt="Robot Illustration" class="w-5/6 max-w-xs rounded-xl object-contain" />
          </div>
        </div>

        <!-- HERO DECORATION -->
        <div class="lg:col-span-12 flex justify-center mt-12 relative">
          <hr
            class="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-5xl border-t-2 border-primary/30 rounded-full img-border-animation" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
