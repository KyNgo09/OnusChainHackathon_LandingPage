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
  <section id="giai-thuong" class="container py-24 pb-0">
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
          class="relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:ring-1 hover:ring-primary/50">
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
          <CardHeader class="p-12 md:p-12 items-center gap-4 relative z-10">
            <div class="flex items-center gap-4">
              <div class="rounded-full bg-white/12 p-3 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <component :is="champion.icon" class="w-10 h-10 text-yellow-500" stroke-width="2.2"
                  aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-[18px] md:text-[20px] text-yellow-500 font-bold tracking-tight uppercase">{{
                  champion.title }}</h3>
                <p class="text-sm opacity-80">Gói giải thưởng cao nhất của cuộc thi</p>
              </div>
            </div>

            <div class="text-center">
              <div
                class="text-4xl sm:text-[40px] md:text-[48px] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">
                {{ champion.prize }}
              </div>

            </div>
          </CardHeader>
        </Card>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Card v-for="award in runners" :key="award.title"
          class="group hover:scale-[1.02] transform transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50">
          <CardHeader class="flex items-center gap-1 p-6">
            <div :class="['rounded-full p-3 shadow-md shadow-primary/30', award.iconColor + ' bg-white/6']">
              <component :is="award.icon" class="w-8 h-8 text-primary" stroke-width="2.2" aria-hidden="true" />
            </div>
            <div class="flex-1">
              <CardTitle class="text-[18px] font-bold uppercase">{{ award.title }}</CardTitle>
            </div>
            <div class="text-right">
              <div
                class="md:text-[24px] text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">
                {{ award.prize }}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <!-- SPECIAL BANNER -->
      <div class="mb-8">
        <Card class="w-full overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:ring-1 hover:ring-primary/50">
          <div class="rounded-lg overflow-hidden bg-gradient-to-r from-[#0528b9] to-[#0b84ff] text-white">
            <div class="max-w-7xl mx-auto px-6 py-6 md:py-8">
              <div class="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-96 px-2 md:px-12">
                <div class="flex-1 md:p-6"> 
                  <div class="text-2xl md:text-3xl font-extrabold uppercase">{{ special.title }}</div>
                  <div class="mt-1 text-sm md:text-base opacity-90">
                      Gói Launchpad OnusChain ĐỘC QUYỀN
                  </div>
                  <div class="mt-1 text-[24px] font-extrabold md:text-xl">{{ special.prize }}</div>
                </div>
                <div class="flex-shrink-0 w-36 md:w-48 lg:w-56 md:ml-auto">
                  <img :src="logoOnuschain" alt="Onus logo" class="w-full h-auto object-contain" />
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
.confetti { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
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
  0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 0; }
  8% { opacity: 1; }
  100% { transform: translateY(120vh) rotate(360deg) translateX(40px); opacity: 0.9; }
}
</style>