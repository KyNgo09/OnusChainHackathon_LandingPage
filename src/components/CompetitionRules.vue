<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const tabs = ['QUYỀN LỢI & TRÁCH NHIỆM ĐỘI THI', 'CÁC HÌNH THỨC KỶ LUẬT']
const active = ref(0)

const benefits = [
  'Trong quá trình tham gia cuộc thi, đội thi KHÔNG có quyền thay đổi cơ cấu thành viên đội thi.',
  'Đội thi có quyền thông báo tới Ban Tổ chức...',
  'Đội thi phải có trên 50% thành viên tham gia...',
  'Các đội thi cần phải tuân thủ nội quy và thời gian nộp tài liệu...',
  'Đội thi và thành viên đội thi cần cam đoan mọi thông tin...',
  'Đội thi không được phép gian lận, vi phạm đạo đức, pháp luật...',
  'Đội thi hoàn toàn tự chịu trách nhiệm về vấn đề bản quyền...',
  'Trong suốt thời gian tham gia dự thi, các buổi gặp mặt, kết nối với cố vấn...'
]

const sanctions = [
  {
    title: 'Nhắc nhở',
    detail: 'Áp dụng với các lỗi nhẹ hoặc lần đầu vi phạm; yêu cầu sửa chữa hành vi.'
  },
  {
    title: 'Cảnh cáo',
    detail: 'Dành cho vi phạm có mức độ hoặc tái phạm; thông báo chính thức từ BTC.'
  },
  {
    title: 'Trừ điểm',
    detail: 'Áp dụng cho vi phạm trong nộp hồ sơ hoặc không tuân thủ quy định thi; ảnh hưởng tới kết quả chấm.'
  },
  {
    title: 'Loại khỏi cuộc thi',
    detail: 'Dành cho hành vi gian lận nghiêm trọng hoặc vi phạm pháp luật.'
  }
]
</script>

<template>
  <section id="quy-che" class="container py-12 sm:py-16">
    <div class="text-center mb-4 px-4 md:px-32">
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        QUY CHẾ CUỘC THI
      </h2>

      <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
        Các quy định dưới đây áp dụng cho tất cả đội tham gia hackathon. Vui lòng đọc kỹ và tuân thủ.
      </h3>
    </div>

    <div class="max-w-4xl mx-auto mt-12">
      <Card
        :class="['bg-card', active !== null ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-background shadow-xl shadow-primary/30' : '']">
        <CardHeader class="py-0">
          <div class="p-0 flex flex-col items-center mt-[-20px]">
            <div
              class="flex flex-wrap justify-center gap-2 mb-4 bg-background ring-1 rounded-sm ring-primary-500 ring-offset-2 ring-offset-background p-0">
              <button v-for="(t, i) in tabs" :key="t" @click="active = i" :aria-pressed="active === i" :class="[
                'px-3 py-2 rounded-md text-xs sm:text-sm md:text-sm font-medium text-destructive text-center whitespace-normal',
                active === i
                  ? 'bg-gradient-to-r from-[#D247BF] to-primary shadow-md text-white'
                  : 'bg-transparent text-muted-foreground hover:text-primary'
              ]">
                {{ t }}
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent class="p-6 pt-0">
          <div class="flex flex-col md:flex-row items-center gap-2 relative" v-if="active === 0">
            <div :class="[
              'flex-1',
              'bg-background/5 dark:bg-background/10 p-4 rounded-lg'
            ]">
              <div>
                <ul
                  class="list-disc pl-5 space-y-3 text-base md:text-sm leading-relaxed text-foreground marker:text-primary">
                  <li v-for="(item, idx) in benefits" :key="idx">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="flex-shrink-0">
              <img :src="`roboto.png`" :alt="`Image describing benefits `"
                className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 animate-floating" />
            </div>
            <div
              class="z-100 absolute right-20 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl">
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-2 relative" v-else>
            <div class="flex-shrink-0">
              <<img :src="`runner.png`" alt="Hình minh họa hình thức kỷ luật"
                class="w-[120px] md:w-[220px] lg:w-[280px] mx-auto -scale-x-100 animate-floating" />

            </div>
            <div :class="[
              'flex-1',
              'bg-background/5 dark:bg-background/10 p-4 rounded-lg'
            ]">
              <div>
                <ul class="space-y-4">
                  <li v-for="(item, idx) in sanctions" :key="idx" class="flex items-start gap-4">
                    <div class="flex-none mt-1">
                      <span
                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 shadow-md text-white font-semibold">
                        {{ idx + 1 }}
                      </span>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-gray-100">{{ item.title }}</div>
                      <div class="text-sm text-muted-foreground mt-1">{{ item.detail }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="z-100 absolute left-22 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl">
            </div>
          </div>
        </CardContent>
      </Card>
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