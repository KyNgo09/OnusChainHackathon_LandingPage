<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-vue-next";

const scrollToGioiThieu = () => {
  const el = document.getElementById("gioi-thieu");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section class="px-4 bg-transparent">
    <div class="mx-auto w-full lg:max-w-screen-xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 py-16 md:py-24">
        <!-- LEFT COLUMN -->
        <div class="lg:col-span-6 flex flex-col items-center text-center space-y-4">
          <!-- ✨ Badge-style tagline (matching Onuschain) -->
          <div
            class="inline-flex items-center gap-2 rounded-full border px-4 py-2 border-pink-400/40 bg-white/10 backdrop-blur-md text-transparent bg-clip-text bg-gradient-to-r from-[#D247BF] to-[#6E56CF] shadow-[0_0_20px_rgba(210,71,191,0.15)] hover:shadow-[0_0_25px_rgba(210,71,191,0.25)] transition-all duration-500 ease-in-out">
            <Sparkles class="size-4 md:size-5 text-[#D247BF]" />
            <span class="font-medium leading-none">From Idea to Impact</span>
          </div>

          <!-- Headline -->
          <h1 class="text-gray-900 font-extrabold leading-tight mt-2">
            <span class="block text-4xl sm:text-5xl md:text-6xl mb-1">
              Cuộc thi
            </span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-[#D247BF] to-primary text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_1px_4px_rgba(210,71,191,0.2)]">
              BlockAiThon
            </span>
          </h1>

          <!-- Description + CTA -->
          <div class="w-full flex flex-col items-center mt-8 space-y-6 text-gray-600 text-lg sm:text-xl">
            <p>Tổng giá trị giải thưởng lên đến</p>

            <p
              class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D247BF] to-primary drop-shadow-[0_1px_3px_rgba(210,71,191,0.25)] tracking-tight">
              10.000&nbsp;USD
            </p>

            <p>
              Cơ hội đồng hành & ươm tạo tại
              <strong class="text-primary">Onuschain</strong>.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap justify-center gap-4">
              <!-- Đăng ký ngay -->
              <Button
                class="text-sm md:text-[16px] w-40 font-bold group/arrow bg-blue-600/80 hover:bg-blue-700/90 text-white backdrop-blur-sm shadow-md hover:shadow-blue-500/30 transition-all duration-300">
                Đăng ký ngay
                <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <!-- Tìm hiểu thêm -->
              <Button variant="outline"
                class="text-sm md:text-[16px] w-40 font-bold border-2 border-blue-500/70 text-blue-700 hover:bg-blue-50/40 transition-all duration-300 backdrop-blur-sm"
                @click="scrollToGioiThieu">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="lg:col-span-6 flex justify-center items-center relative">
          <div
            class="absolute inset-0 m-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-blue-400/10 blur-2xl -z-10">
          </div>

          <div
            class="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] flex items-center justify-center relative z-10">
            <img src="/Logo-BlockAIThon.png" alt="Logo BlockAiThon"
              class="w-full h-full object-contain animate-floating" />
          </div>
        </div>

        <!-- HERO DECORATION -->
        <div class="lg:col-span-12 flex justify-center mt-12 relative">
          <hr class="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-5xl border-t-2 border-blue-300/70 rounded-full" />
        </div>
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