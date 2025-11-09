<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Gem, Gift } from "lucide-vue-next";
import logoOnuschain from '@/assets/logo_onus2.png';

const awards = [
  {
    title: "Quán quân",
    prize: "100.000.000 VNĐ",
    icon: Trophy,
    iconColor: "text-blue-500", // <-- Thay đổi màu sắc
    prizeColor: "text-blue-500", // <-- Thay đổi màu sắc
    iconLabel: "Trophy",
  },
  {
    title: "Á quân",
    prize: "50.000.000 VNĐ",
    icon: Medal,
    iconColor: "text-purple-500", // <-- Thay đổi màu sắc
    prizeColor: "text-purple-500", // <-- Thay đổi màu sắc
    iconLabel: "Silver Medal",
  },
  {
    title: "Quý quân",
    prize: "15.000.000 VNĐ",
    icon: Gem,
    iconColor: "text-green-500", // <-- Thay đổi màu sắc
    prizeColor: "text-green-500", // <-- Thay đổi màu sắc
    iconLabel: "Gem",
  },
  {
    title: "03 Giải Khuyến khích",
    prize: "Tổng trị giá: 16.000.000 VNĐ",
    icon: Gift,
    iconColor: "text-orange-500", // <-- Thay đổi màu sắc
    prizeColor: "text-orange-500", // <-- Thay đổi màu sắc
    iconLabel: "Gift",
  },
  {
    title: "Giải Đặc biệt",
    prize: "Tổng giá trị lên đến 150.000.000 VND",
    icon: Gift,
    iconColor: "text-red-500", // <-- Thay đổi màu sắc
    prizeColor: "text-red-500", // <-- Thay đổi màu sắc
    iconLabel: "Special Gift",
  }
];

const champion = awards[0]
const runners = awards.slice(1, 4)
const special = awards[4]
</script>

<template>
  <section id="giai-thuong" class="container py-24 pb-0 rounded-2xl bg-secondary/10">
    <div class="text-center mb-4 px-4 md:px-32">
      <h2 class="text-[28px] md:text-[40px] text-center font-bold mb-2 text-primary">
        CƠ CẤU GIẢI THƯỞNG
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3 class="mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4">
        <span class="font-bold text-3xl text-black">10.000 USD</span>
        <span class="block sm:inline text-muted-foreground"> và các phần thưởng giá trị khác</span>
      </h3>
    </div>
    <div class="max-w-7xl mx-auto">
      <div class="mb-4">
        <Card
          class="relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-md shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40 ring-1 ring-yellow-400/30 bg-gradient-to-b from-yellow-50/40 to-transparent dark:from-yellow-400/5">
          <!-- Ribbon -->
          <div
            class="absolute -left-6 top-4 rotate-[-14deg] bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold px-6 py-1 rounded shadow-md shadow-yellow-500/30">
            QUÁN QUÂN 🥇
          </div>

          <div class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/6 blur-3xl pointer-events-none"></div>
          <div class="confetti pointer-events-none" aria-hidden="true">
            <span class="confetti-piece bg-yellow-400" style="left:6%; --dur:3.8s; --delay:0.2s"></span>
            <span class="confetti-piece bg-pink-400" style="left:16%; --dur:4.6s; --delay:0.6s"></span>
            <span class="confetti-piece bg-emerald-400" style="left:26%; --dur:4.2s; --delay:0.9s"></span>
            <span class="confetti-piece bg-indigo-400" style="left:36%; --dur:3.6s; --delay:0.3s"></span>
            <span class="confetti-piece bg-rose-400" style="left:46%; --dur:5s; --delay:0.8s"></span>
            <span class="confetti-piece bg-amber-400" style="left:56%; --dur:4.1s; --delay:0.4s"></span>
            <span class="confetti-piece bg-cyan-400" style="left:66%; --dur:3.9s; --delay:1.1s"></span>
            <span class="confetti-piece bg-violet-400" style="left:76%; --dur:5.2s; --delay:0.5s"></span>
            <span class="confetti-piece bg-fuchsia-400" style="left:86%; --dur:4.8s; --delay:0.7s"></span>
          </div>
          <!-- Shine sweep -->
          <div
            class="pointer-events-none absolute inset-0 before:absolute before:-left-1/3 before:top-0 before:h-full before:w-1/3 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:blur-xl before:animate-shine">
          </div>

          <CardHeader class="p-10 md:p-12 items-center gap-5 relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="rounded-full bg-white/12 p-4 flex items-center justify-center shadow-lg shadow-yellow-500/40 ring-2 ring-yellow-400/40">
                <component :is="champion.icon" class="w-12 h-12 text-yellow-500 drop-shadow" stroke-width="2.2"
                  aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-[18px] md:text-[20px] text-yellow-600 font-extrabold tracking-tight uppercase">{{
                  champion.title }}</h3>
                <p class="text-sm opacity-80">Gói giải thưởng cao nhất của cuộc thi</p>
              </div>
            </div>

            <div class="text-center">
              <div
                class="text-4xl sm:text-[44px] md:text-[56px] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-primary drop-shadow">
                {{ champion.prize }}
              </div>
              <div class="mt-2 text-xs md:text-sm text-muted-foreground">Tiền mặt và hiện vật cho đội vô địch</div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Card v-for="award in runners" :key="award.title"
          class="group relative overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm hover:shadow-xl ring-1 ring-border/60 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5">
          <!-- top accent bar -->
          <div class="absolute top-0 left-0 right-0 h-1 opacity-30" :class="award.iconColor.replace('text-', 'bg-')" />

          <CardHeader class="flex flex-col items-center text-center gap-3 p-6">
            <div :class="[
              'rounded-full p-3 shadow-md ring-1 ring-opacity-30 bg-white/10',
              award.iconColor.replace('text-', 'ring-')
            ]">
              <component :is="award.icon" class="w-8 h-8" :class="award.iconColor" stroke-width="2.2"
                aria-hidden="true" />
            </div>

            <CardTitle class="text-[16px] md:text-[18px] font-semibold uppercase tracking-wide">
              {{ award.title }}
            </CardTitle>

            <div
              class="md:text-[22px] text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">
              {{ award.prize }}
            </div>
          </CardHeader>
        </Card>
      </div>
      <!-- SPECIAL BANNER -->
      <div class="mb-8">
        <Card
          class="w-full overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:ring-1 hover:ring-primary/50">
          <div class="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#0528b9] to-[#0b84ff] text-white">
            <!-- subtle stripes -->
            <div
              class="pointer-events-none absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_8px,rgba(255,255,255,0.15)_8px,rgba(255,255,255,0.15)_16px)]">
            </div>
            <!-- shine sweep -->
            <div
              class="pointer-events-none absolute inset-0 before:absolute before:-left-1/3 before:top-0 before:h-full before:w-1/3 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:blur-xl before:animate-shine">
            </div>

            <div class="max-w-7xl mx-auto px-6 py-6 md:py-8">
              <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12">
                <div class="flex-1 text-center md:text-left">
                  <div class="text-2xl md:text-3xl font-extrabold uppercase">{{ special.title }}</div>
                  <div class="mt-1 text-sm md:text-base opacity-90">
                    Gói Launchpad OnusChain ĐỘC QUYỀN
                  </div>
                  <div class="mt-4 text-2xl font-extrabold md:text-3xl">{{ special.prize }}</div>
                </div>
                <div class="flex-shrink-0 w-36 md:w-48 lg:w-56">
                  <img :src="logoOnuschain" alt="Onus logo" class="w-full h-auto object-contain drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.confetti {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.confetti-piece {
  position: absolute;
  top: -6%;
  width: 10px;
  height: 18px;
  border-radius: 2px;
  opacity: 0.95;
  transform-origin: center;
  --dur: 4s;
  --delay: 0s;
  animation: confetti-fall var(--dur) linear var(--delay) infinite;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-10vh) rotate(0deg) translateX(0);
    opacity: 0;
  }

  8% {
    opacity: 1;
  }

  100% {
    transform: translateY(120vh) rotate(360deg) translateX(40px);
    opacity: 0.9;
  }
}

/* Shine sweep animation */
.animate-shine {
  animation: shine-sweep 2.5s ease-in-out infinite;
}

@keyframes shine-sweep {
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  50% {
    transform: translateX(180%);
    opacity: 0.8;
  }

  100% {
    transform: translateX(200%);
    opacity: 0;
  }
}
</style>