<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";

// Import icons
import { Mail, Phone, Facebook, Globe } from "lucide-vue-next";
</script>

<template>
  <footer id="lien-he" class="container pt-24 pb-4 sm:pt-32 sm:pb-4">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <!-- 
        THAY ĐỔI: Sử dụng bố cục 3 cột cân đối
        - grid-cols-1: 1 cột trên di động
        - md:grid-cols-3: 3 cột trên máy tính
      -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        <!-- CỘT 1: Logo và Giới thiệu -->
        <div class="col-span-1">
          <a href="#" class="flex font-bold items-center">
            <ChevronsDown
              class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
            <h3 class="text-2xl">BlockAiThon</h3>
          </a>
          <!-- Thêm mô tả ngắn để cột này cân đối hơn -->
          <p class="text-sm text-muted-foreground mt-4">
            Cuộc thi sáng tạo Ứng dụng Blockchain, AI và Tài sản số.
          </p>
        </div>

        <!-- CỘT 2: Thông tin Liên hệ (Theo cấu trúc của Footer 2) -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Liên Hệ</h3>

          <!-- Email -->
          <a href="mailto:hubnetworkdn@gmail.com" class="opacity-60 hover:opacity-100 items-center flex gap-2">
            <Mail class="size-4" />
            <!-- Bỏ chữ "Email:" thừa, dùng icon là đủ -->
            <span>hubnetworkdn@gmail.com</span>
          </a>

          <!-- Phone -->
          <a href="tel:0911871573" class="opacity-60 hover:opacity-100 items-center flex gap-2">
            <Phone class="size-4" />
            <span>0911.871.573 (Ms. Van)</span>
          </a>
        </div>

        <!-- CỘT 3: Mạng Xã Hội (Theo cấu trúc của Footer 2) -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Mạng Xã Hội</h3>

          <!-- Facebook -->
          <a href="#" target="_blank" class="opacity-60 hover:opacity-100 items-center flex gap-2">
            <Facebook class="size-4" />
            <span>BlockAiThon Fanpage</span>
          </a>

          <!-- Website -->
          <a href="https://www.blockaithon.com" target="_blank"
            class="opacity-60 hover:opacity-100 items-center flex gap-2">
            <Globe class="size-4" />
            <span>www.blockaithon.com</span>
          </a>
        </div>

      </div>

      <!-- Phần Copyright giữ nguyên -->
      <Separator class="my-4" />
      <section class="text-center">
        <h3 class="text-sm opacity-60">
          &copy; 2025 BlockAiThon. All rights reserved.
        </h3>
      </section>
    </div>
  </footer>
</template>