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
              BlockAiThon
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
        <div class="lg:col-span-6 flex justify-center lg:justify-center items-center relative ">
          <div
            class="absolute inset-0 m-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-primary/10 dark:bg-primary/5 blur-xl -z-10">
          </div>


          <div
            class="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] rounded-2xl bg-gradient-to-tr flex items-center justify-center shadow-inner relative z-10">
            <img src="@/assets/Logo-BlockAiThon.png" alt="Logo BlockAiThon"
              class="w-full h-full max-w-none max-h-none rounded-xl object-contain animate-floating" />
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
/* Thêm lại keyframes và class cho hiệu ứng pulse-slow nếu chưa có */
@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-floating {
  animation: floating 3s ease-in-out infinite;
}
</style>
